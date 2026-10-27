DROP TABLE IF EXISTS order_items;
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS crew;
DROP TABLE IF EXISTS plans;
DROP TABLE IF EXISTS products;

CREATE TABLE classes (
  id SERIAL PRIMARY KEY,
  day TEXT NOT NULL,
  time TEXT NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL
);

CREATE TABLE crew (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT NOT NULL,
  image TEXT NOT NULL
);

CREATE TABLE plans (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price INTEGER NOT NULL,
  features TEXT[] NOT NULL,
  popular BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price INTEGER NOT NULL,
  description TEXT NOT NULL,
  image TEXT NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES "user"(id),
  status TEXT NOT NULL DEFAULT 'pending',
  total INTEGER NOT NULL,
  stripe_session_id TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER NOT NULL REFERENCES orders(id),
  product_id INTEGER NOT NULL REFERENCES products(id),
  quantity INTEGER NOT NULL,
  unit_price INTEGER NOT NULL
);