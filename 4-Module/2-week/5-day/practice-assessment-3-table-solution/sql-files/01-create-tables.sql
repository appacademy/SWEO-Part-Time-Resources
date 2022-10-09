-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;
DROP TABLE IF EXISTS tools;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS purchases;

CREATE TABLE tools (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR NOT NULL,
  price NUMERIC(10,2),
  department VARCHAR
);

CREATE TABLE customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL,
  phone NUMERIC(10,0)
);

CREATE TABLE purchases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER,
  tool_id INTEGER,
  quantity INTEGER NOT NULL,
  FOREIGN KEY (customer_id)
  REFERENCES customers(id) ON DELETE CASCADE,
  FOREIGN KEY (tool_id) 
  REFERENCES tools(id) ON DELETE CASCADE
);