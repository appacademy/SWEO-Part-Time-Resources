
INSERT INTO tools (name, price, department)
VALUES
('Snow shovel', 16.50, 'Home & Garden'),
('Work light', 29.99, 'Electrical'),
('Wheelbarrow', 89.99, 'Home & Garden'),
('Pipe Wrench', 18.99, 'Plumbing'),
('Pipe Cutter', 36.36, 'Plumbing'),
('Rake', 15.45, 'Home & Garden');

INSERT INTO customers (first_name, last_name, phone)
VALUES
('John', 'Smith', 1111111111),
('Jane', 'Doe', 2222222222);

-- First set of purchases
INSERT INTO purchases (customer_id, tool_id, quantity)
-- First entry is:
-- customer id 1 = John Smith, tool id 2 = work light, quantity is 1
VALUES
(1, 2, 1),
(1, 5, 2);

-- Second set of purchases
INSERT INTO purchases (customer_id, tool_id, quantity)
VALUES
(2, 1, 3),
(2, 2, 1),
(2, 4, 1),
(2, 5, 1);

-- Third purchase
INSERT INTO purchases (customer_id, tool_id, quantity)
VALUES
(1, 3, 3);