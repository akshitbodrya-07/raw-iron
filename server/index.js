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

app.get('/api/db-test', async (req, res) => {
  const result = await pool.query("SELECT NOW()")
  res.json(result.rows[0])
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})