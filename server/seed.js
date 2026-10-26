import pool from './db.js'
import classes from '../client/src/data/classes.js'
import crew from '../client/src/data/crew.js'
import plans from '../client/src/data/plans.js'
import products from '../client/src/data/products.js'

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

for (const item of products) {
  await pool.query(
    'INSERT INTO products (name, category, price, description, image) VALUES ($1, $2, $3, $4, $5)',
    [item.name, item.category, item.price, item.description, item.image]
  )
}

console.log('Seed done')
await pool.end()