DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
  id INT PRIMARY KEY,
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  salary DECIMAL(10,2),
  joining_date DATE
);


INSERT INTO employees (id, first_name, last_name, salary, joining_date)
VALUES
  (1, 'John', 'Doe', 70000.00, '2020-06-01'),
  (2, 'Jane', 'Doe', 80000.00, '2021-07-01'),
  (3, 'Jack', 'Smith', 90000.00, '2022-08-01'),
  (4, 'Jill', 'Johnson', 100000.00, '2023-09-01'),
  (5, 'James', 'Williams', 120000.00, '2023-01-05'),
  (6, 'Mary', 'Brown', 95000.00, '2022-02-10'),
  (7, 'Patricia', 'Davis', 105000.00, '2021-03-15'),
  (8, 'Michael', 'Miller', 115000.00, '2020-04-20');

-- INSERT INTO employees (id, first_name, last_name, salary, joining_date)
-- VALUES
-- 	(9, 'John', 'Doe', 70000.00, '2020-06-01');

-- max,
-- SELECT MAX(salary)
-- FROM employees;
-- count,
-- SELECT COUNT(*)
-- FROM employees;
-- sum,
-- SELECT SUM(salary)
-- FROM employees;
-- avg,
-- SELECT AVG(salary)
-- FROM employees;
-- min
-- SELECT MIN(salary)
-- FROM employees;


-- SELECT MAX(salary)
-- FROM employees
-- WHERE joining_date > '2021-01-01';


-- SELECT first_name, COUNT(*)
-- FROM employees
-- GROUP BY salary, first_name
-- HAVING salary >
-- 	(SELECT AVG(salary) FROM employees);


-- SELECT first_name, COUNT(*)
--   FROM employees
--   WHERE salary > (
--     SELECT AVG(salary)
--     FROM employees
--   );

-- SELECT salary, COUNT(*)
-- FROM employees
-- GROUP BY salary
-- HAVING COUNT(*) > 1;
