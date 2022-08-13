-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = 1;

DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS tools;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS customers;

CREATE TABLE departments (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(50)
);

CREATE TABLE tools (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name VARCHAR(255) NOT NULL UNIQUE,
	price NUMERIC(5, 2) NOT NULL,
	department_id INTEGER,
	FOREIGN KEY (department_id) REFERENCES departments(id) -- ON DELETE SET NULL
);

CREATE TABLE customers (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	phone_number INTEGER(10) NOT NULL
);

CREATE TABLE purchases (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	tool_name VARCHAR(255),
	quantity INTEGER,
	customer_id INTEGER,
	FOREIGN KEY (tool_name) REFERENCES tools(name), -- ON DELETE CASCADE,
	FOREIGN KEY (customer_id) REFERENCES customers(id) ON DELETE CASCADE
);