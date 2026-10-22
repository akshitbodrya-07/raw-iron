import express from 'express'
import cors from 'cors'
import pool from './db.js'
import { toNodeHandler } from 'better-auth/node'
import { auth } from './auth.js'

const app = express()
const port = process.env.PORT || 3000

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))

app.all('/api/auth/*splat', toNodeHandler(auth))

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

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})