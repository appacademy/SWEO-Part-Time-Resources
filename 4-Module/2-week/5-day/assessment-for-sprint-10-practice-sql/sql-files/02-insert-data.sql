-- Your code here
INSERT INTO departments (name)
VALUES
('Home & Garden'),
('Plumbing'),
('Electrical');

INSERT INTO tools (name, price, department_id)
VALUES
('Snow shovel',    16.50, 1), -- 1
('Work light',     29.99, 3), -- 2
('Wheelbarrow',    89.99, 1), -- 3
('Pipe Wrench',    18.99, 2), -- 4
('Pipe Cutter',    36.36, 2), -- 5
('Rake',           15.45, 1), -- 6
('Women''s Gloves',   8.39, 1), -- 7
('Men''s Gloves',     8.39, 1); -- 8

INSERT INTO customers (first_name, last_name, phone_number)
VALUES
('John', 'Smith', 111-111-1111),
('Jane', 'Doe', 222-222-2222);

INSERT INTO purchases (customer_id)
VALUES
(1),
(2),
(1);

INSERT INTO tool_purchases (tool_id, purchase_id, quantity)
VALUES
(2, 1, 1),
(5, 1, 2),
(1, 2, 3),
(7, 2, 1),
(4, 2, 1),
(5, 2, 1),
(3, 3, 3),
(8, 3, 2);



