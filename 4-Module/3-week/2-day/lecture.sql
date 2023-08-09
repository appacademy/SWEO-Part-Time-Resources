pragma foreign_keys = on;

DROP TABLE IF EXISTS purchases;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100) UNIQUE
);

-- CREATE INDEX <idx_name> -- idx_firstname
-- ON <table name> (column name)

CREATE INDEX idx_firstname
ON users (first_name);

-- inserting without index: o(1)

-- search without index takes up: o(n)
-- search with index takes up: (log n)

-- cons for indexing:
-- takes up additional memory
-- insert time/adding new data adds more time: o(log n)

CREATE TABLE purchases (
    purchase_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    product_name VARCHAR(100),
    purchase_date DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);


INSERT INTO users (first_name, last_name, email)
VALUES
('John', 'Doe', 'john.doe@example.com'),
('Jane', 'Doe', 'jane.doe@example.com'),
('Alex', 'Smith', 'alex.smith@example.com');

INSERT INTO purchases (user_id, product_name, purchase_date)
VALUES
(1, 'Apple iPhone 13', '2023-06-06'),
(1, 'Samsung Galaxy S22', '2023-06-01'),
(2, 'Apple MacBook Pro', '2023-05-15');


-- ORM (object relational mapping)
-- tables -> classes
-- with work instances of these classes
-- sql queries are now instance methods or static methods


-- table users
-- class Users
-- SELECT * FROM users;
-- Users.findAll();
