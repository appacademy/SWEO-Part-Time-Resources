-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

-- Your code here


--purchases
CREATE TABLE departments (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR
);

CREATE TABLE customers (
id INTEGER PRIMARY KEY AUTOINCREMENT,
first_name VARCHAR(40),
last_name VARCHAR(40),
phone_number DECIMAL(10,0)
);

CREATE TABLE tools (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR,
price DECIMAL(6,2),
department_id INTEGER,
FOREIGN KEY (department_id)
REFERENCES departments(id) ON DELETE SET NULL
);


CREATE TABLE tool_purchases (
id INTEGER PRIMARY KEY AUTOINCREMENT,
tool_id INTEGER,
customer_id INTEGER,
quantity INTEGER,
FOREIGN KEY (tool_id) REFERENCES tools(id) ON DELETE CASCADE
FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);




-- CREATE TABLE purchases (
-- id INTEGER PRIMARY KEY AUTOINCREMENT,
-- customer_id INTEGER,
-- FOREIGN KEY (customer_idd) REFERENCES customers(id),
-- );
