import pool from './db.js'
import classes from '../client/src/data/classes.js'
import crew from '../client/src/data/crew.js'
import plans from '../client/src/data/plans.js'

await pool.query('TRUNCATE classes, crew, plans RESTART IDENTITY')

for (const item of classes) {
  await pool.query(
    'INSERT INTO classes (day, time, name, type) VALUES ($1, $2, $3, $4)',
    [item.day, item.time, item.name, item.type]
  )
}

for (const item of crew) {
  await pool.query(
    'INSERT INTO crew (name, role, bio, image) VALUES ($1, $2, $3, $4)',
    [item.name, item.role, item.bio, item.image]
  )
}

for (const item of plans) {
  await pool.query(
    'INSERT INTO plans (name, price, features, popular) VALUES ($1, $2, $3, $4)',
    [item.name, item.price, item.features, item.popular]
  )
}

console.log('Seed done')
await pool.end()