import express from 'express'
import cors from 'cors'
import pool from './db.js'

const app = express()
const port = process.env.PORT || 3000

app.use(cors())
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