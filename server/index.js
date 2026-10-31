import express from 'express'
import cors from 'cors'
import pool from './db.js'
import { toNodeHandler } from 'better-auth/node'
import { auth } from './auth.js'
import stripe from './stripe.js'
import requireAuth from './requireAuth.js'

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))

app.all('/api/auth/*splat', toNodeHandler(auth))

app.post('/api/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const signature = req.headers['stripe-signature']
  let event

  try {
    event = stripe.webhooks.constructEvent(req.body, signature, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (error) {
    console.error('Webhook signature failed:', error.message)
    return res.status(400).send('Invalid signature')
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    const orderId = session.metadata.orderId

    if (session.payment_status === 'paid') {
      await pool.query("UPDATE orders SET status = 'paid' WHERE id = $1", [orderId])
      console.log(`Order ${orderId} is paid`)
    }
  }

  res.json({ received: true })
})

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.get('/api/classes', async (req, res) => {
  const result = await pool.query('SELECT * FROM classes ORDER BY id')
  res.json(result.rows)
})

app.get('/api/crew', async (req, res) => {
  const result = await pool.query('SELECT * FROM crew ORDER BY id')
  res.json(result.rows)
})

app.get('/api/plans', async (req, res) => {
  const result = await pool.query('SELECT * FROM plans ORDER BY id')
  res.json(result.rows)
})

app.get('/api/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products ORDER BY id')
  res.json(result.rows)
})

app.get('/api/orders/:id', requireAuth, async (req, res) => {
  const result = await pool.query(
    'SELECT id, status, total, created_at FROM orders WHERE id = $1 AND user_id = $2',
    [req.params.id, req.user.id]
  )

  if (result.rows.length === 0) {
    return res.status(404).json({ error: 'Order not found' })
  }

  res.json(result.rows[0])
})

app.post('/api/checkout', requireAuth, async(req, res) => {
  const items = req.body.items

  if(!Array.isArray(items) || items.length == 0) {
    return res.status(400).json({error: "Your cart is empty"})
  }

  const ids = items.map((item) => Number(item.id))
  const result = await pool.query("SELECT * FROM products WHERE id = ANY($1)", [ids])
  const products = result.rows

  let total = 0
  const lines = []

  for(const item of items) {
    const product = products.find((p) => p.id === Number(item.id))
    const quantity = Number(item.quantity)

    if (!product || !Number.isInteger(quantity) || quantity < 1) {
      return res.status(400).json({ error: 'Something is wrong with your cart' })
    }

    total = total + product.price * quantity
    lines.push({ product, quantity })
  }

  const order = await pool.query("INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING id", [req.user.id, total])
  const orderId = order.rows[0].id

  for (const line of lines) {
    await pool.query("INSERT INTO order_items (order_id, product_id, quantity, unit_price) VALUES ($1, $2, $3, $4)", [orderId, line.product.id, line.quantity, line.product.price])
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lines.map((line) => ({
      price_data: {
        currency: 'eur',
        product_data: { name: line.product.name },
        unit_amount: line.product.price * 100,
      },
      quantity: line.quantity,
    })),
    metadata: { orderId: String(orderId) },
    success_url: `${process.env.CLIENT_URL}/success?order=${orderId}`,
    cancel_url: `${process.env.CLIENT_URL}/#supplements`
  })

  await pool.query("UPDATE orders SET stripe_session_id = $1 WHERE id = $2", [session.id, orderId])

  res.json({ url: session.url })
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})