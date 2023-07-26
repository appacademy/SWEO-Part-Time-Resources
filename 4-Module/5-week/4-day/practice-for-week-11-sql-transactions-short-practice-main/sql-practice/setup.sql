-- Clean up from previous execution
DROP TABLE IF EXISTS accounts;


-- Create accounts table
-- Constraint exists on balance (cannot be negative)
CREATE TABLE accounts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  balance DECIMAL(17, 2) NOT NULL CHECK(balance >= 0)
);


-- Insert seed data
INSERT INTO accounts (first_name, last_name, balance)
VALUES ('Amy', 'Pond', 2500),
  ('Rose', 'Tyler', 600),
  ('Martha', 'Jones', 3000),
  ('Donna', 'Noble', 200),
  ('River', 'Song', 1200);


-- Check initial table data
SELECT *
FROM accounts;