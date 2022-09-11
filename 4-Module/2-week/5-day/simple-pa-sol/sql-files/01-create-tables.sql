-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

DROP TABLE IF EXISTS tools;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS purchases;

-- TABLE tools
-- name
-- department
-- price
CREATE TABLE tools(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    department VARCHAR(255),
    price DECIMAL(5,2)
);

-- TABLE: customers
-- first_name
-- last_name
-- phone_number
CREATE TABLE customers(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    phone_number INTEGER(10)
);

-- TABLE: purchases
-- quantity
-- tool_id -> foreign key referncing tools table 
-- customer_id --> foreign key referencing customers table
CREATE TABLE purchases(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quantity INTEGER,
    
    tool_id INTEGER, 
    customer_id INTEGER,
    FOREIGN KEY (tool_id) REFERENCES tools(id) ON DELETE CASCADE,
    FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);