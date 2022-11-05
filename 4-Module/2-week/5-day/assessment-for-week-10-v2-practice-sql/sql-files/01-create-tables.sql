-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

-- departments (name)
-- tools (name, price)
-- customers (firstname, lastname, number)
-- purchases (customer_id)
-- tool_purchase (FK)

DROP TABLE IF EXISTS tool_purchase;
DROP TABLE IF EXISTS tools;
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50)
);

CREATE TABLE tools (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(100),
  price NUMERIC(6, 2),
  department_id INTEGER,
  FOREIGN KEY (department_id) 
    REFERENCES departments(id)
    ON DELETE SET NULL
);

CREATE TABLE customers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  phone NUMERIC(10, 0)
);

CREATE TABLE purchases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  customer_id INTEGER,
  FOREIGN KEY (customer_id)
    REFERENCES customers(id)
    ON DELETE CASCADE
);

CREATE TABLE tool_purchase (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tool_id INTEGER,
  purchase_id INTEGER,
  quantity INTEGER,
  FOREIGN KEY (tool_id)
    REFERENCES tools(id)
    ON DELETE SET NULL
  FOREIGN KEY (purchase_id)
    REFERENCES purchases(id)
    ON DELETE CASCADE
);

