--!!START
DROP TABLE IF EXISTS parties;
DROP TABLE IF EXISTS performance_reviews;
DROP TABLE IF EXISTS relationships;
DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(40) NOT NULL,
  last_name VARCHAR(40) NOT NULL,
  department VARCHAR(60) NOT NULL,
  role VARCHAR(60) NOT NULL 
);

CREATE TABLE relationships (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  a_employee_id INTEGER NOT NULL,
  b_employee_id INTEGER NOT NULL
);

CREATE TABLE performance_reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  employee_id INTEGER NOT NULL,
  score DECIMAL(3, 1) NOT NULL
);

CREATE TABLE parties (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  budget DECIMAL(5, 2) NOT NULL,
  is_onsite BOOLEAN DEFAULT 1
);

-- Add employees
INSERT INTO employees
  (first_name, last_name, department, role)
VALUES
  ('Michael', 'Scott', 'Management', 'Regional Manager'),
  ('Dwight', 'Schrute', 'Sales', 'Assistant Regional Manager'),
  ('Jim', 'Halpert', 'Sales', 'Sales Representative'),
  ('Pam', 'Beesly', 'Reception', 'Receptionist'),
  ('Kelly', 'Kapoor', 'Product Oversight', 'Customer Service Representative'),
  ('Angela', 'Martin', 'Accounting', 'Head of Accounting'),
  ('Roy', 'Anderson', 'Warehouse', 'Warehouse Staff');

-- "Roy Anderson" and "Pam Beesly" are in a romantic relationship
INSERT INTO relationships
  (a_employee_id, b_employee_id)
VALUES
  (7, 4);

-- "Ryan Howard" is hired in the "Reception" department as a "Temp" role
INSERT INTO employees
  (first_name, last_name, department, role)
VALUES
  ('Ryan', 'Howard', 'Reception', 'Temp');

-- An onsite office party is held with a budget of $100.00
INSERT INTO parties
  (budget)
VALUES
  (100.00);

-- "Dwight Schrute" gets a performance review with a score of 3.3
-- "Jim Halpert" gets a performance review with a score of 4.2
INSERT INTO performance_reviews
  (employee_id, score)
VALUES
  (2, 3.3),
  (3, 4.2);

-- "Dwight Schrute"'s past performance review needs to be changed to a score of 9.0
UPDATE performance_reviews
SET score = 9.0
WHERE id = 1;

-- "Jim Halpert"'s past performance review needs to be changed to a score of 9.3
UPDATE performance_reviews
SET score = 9.3
WHERE id = 2;

-- "Jim Halpert" is promoted to the role of "Assistant Regional Manager"
UPDATE employees
SET role = 'Assistant Regional Manager'
WHERE id = 3;

-- "Ryan Howard" is promoted to the "Sales" department as the role of "Sales Representative"
UPDATE employees
SET role = 'Sales Representative'
WHERE id = 8;

-- An onsite office party is held with a budget of $200.00
INSERT INTO parties
  (budget)
VALUES
  (200.00);

-- "Angela Martin" and "Dwight Schrute" are in a romantic relationship.
INSERT INTO relationships
  (a_employee_id, b_employee_id)
VALUES
  (2, 6);

-- "Angela Martin" gets a performance review score of 6.2
INSERT INTO performance_reviews
  (employee_id, score)
VALUES
  (6, 6.2);

-- "Ryan Howard" and "Kelly Kapoor" are in a romantic relationship
INSERT INTO relationships
  (a_employee_id, b_employee_id)
VALUES
  (8, 5);

-- An onsite office party is held with a budget of $50.00
INSERT INTO parties
  (budget)
VALUES
  (50.00);

-- "Jim Halpert" moves to another office branch
DELETE FROM employees
WHERE id = 3;

DELETE FROM performance_reviews
WHERE id = 2;

-- "Roy Anderson" and "Pam Beesly" are NO LONGER in a romantic relationship
DELETE FROM relationships
WHERE id = 1;

-- "Pam Beesly" gets a performance review score of 7.6
INSERT INTO performance_reviews
  (employee_id, score)
VALUES
  (4, 7.6);

-- "Dwight Schrute" gets another performance review score of 8.7
INSERT INTO performance_reviews
  (employee_id, score)
VALUES
  (2, 8.7);

-- "Ryan Howard" quits the office
DELETE FROM employees
WHERE id = 8;

DELETE FROM relationships
WHERE id = 3;

-- "Jim Halpert" and "Karen Filippelli" are hired in "Sales" department in the role of "Sales Representative"
INSERT INTO employees
  (first_name, last_name, department, role)
VALUES
  ('Jim', 'Halpert', 'Sales', 'Sales Representative'),
  ('Karen', 'Filippelli', 'Sales', 'Sales Representative');

-- "Karen Filippelli" and "Jim Halpert" are in a romantic relationship
INSERT INTO relationships
  (a_employee_id, b_employee_id)
VALUES
  (9, 10);

-- An onsite office party is held with a budget of $120.00
INSERT INTO parties
  (budget)
VALUES
  (120.00);

-- The onsite office party scheduled right before this is canceled
-- An offsite office party is scheduled instead with a budget of $300.00
DELETE FROM parties
WHERE id = 4;

INSERT INTO parties
  (budget, is_onsite)
VALUES
  (300.00, 0);

-- "Karen Filippelli" and "Jim Halpert" are NO LONGER in a romantic relationship
DELETE FROM relationships
WHERE id = 4;

-- "Roy Anderson" is fired from the office
DELETE FROM employees
WHERE id = 7;

-- "Pam Beesly" and "Jim Halpert" are in a romantic relationship
INSERT INTO relationships
  (a_employee_id, b_employee_id)
VALUES
  (4, 9);
--!!END
