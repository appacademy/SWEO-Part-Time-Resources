-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

-- Your code here
DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS tool_purchases;
DROP TABLE IF EXISTS tools;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE
);

CREATE TABLE tools (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR NOT NULL UNIQUE,
    price NUMERIC(4,2),
    department_id INTEGER,
    FOREIGN KEY (department_id)
    REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL,
    phone_number NUMERIC(10, 0) NOT NULL
);
CREATE TABLE purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL,
    FOREIGN KEY (customer_id) 
    REFERENCES customers(id) ON DELETE SET NULL
);


CREATE TABLE tool_purchases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tool_id INTEGER NOT NULL,
    purchase_id INTEGER NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id)
    REFERENCES purchases(id) ON DELETE SET NULL,
    FOREIGN KEY (tool_id) 
    REFERENCES tools(id) ON DELETE SET NULL
);
