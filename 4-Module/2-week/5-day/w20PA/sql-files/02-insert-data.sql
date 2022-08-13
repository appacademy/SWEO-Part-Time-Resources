-- Your code here

INSERT INTO departments (name)
VALUES
('Home & Garden'),
('Electrical'),
('Plumbing');

INSERT INTO tools (name, price, department_id)
VALUES
('Snow shovel', 16.50, 1),
('Work light', 29.99, 2),
('Wheelbarrow', 89.99, 1),
('Pipe Wrench', 18.99, 3),
('Pipe Cutter', 36.36, 3),
('Rake', 15.45, 1);

INSERT INTO customers (first_name, last_name, phone_number)
VALUES
('John', 'Smith', 1111111111), -- 1
('Jane', 'Doe', 2222222222); -- 2

INSERT INTO purchases (tool_name, quantity, customer_id)
VALUES
('Work light', 1, 1),
('Pipe Cutter', 2, 1),
('Snow shovel', 3, 2),
('Work light', 1, 2),
('Pipe Wrench', 1, 2),
('Pipe Cutter', 1, 2),
('Wheelbarrow', 3, 1);