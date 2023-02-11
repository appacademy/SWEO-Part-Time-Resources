-- Your code here

INSERT INTO departments
  (name)
VALUES
  ('Home & Garden'),
  ('Plumbing'),
  ('Electrical');

INSERT INTO tools
  (name, price, department_id)
VALUES
  ('Snow shovel',     16.50, 1),
  ('Work light',      29.99, 3),
  ('Wheelbarrow',     89.99, 1),
  ('Pipe Wrench',     18.99, 2),
  ('Pipe Cutter',     36.36, 2),
  ('Rake',            15.45, 1),
  ('Women''s Gloves', 8.39,  1),
  ('Men''s Gloves',   8.39,  1);

INSERT INTO customers
  (first_name, last_name, phone)
VALUES
  ('John', 'Smith', 1111111111),
  ('Jane', 'Doe',   2222222222);

-- Customer 1 purchases 2 items
-- INSERT INTO purchases
--   (customer_id)
-- VALUES
--   (1);

INSERT INTO tool_purchases
  (tool_id, customer_id, quantity)
VALUES
  (2, 1, 1),
  (5, 1, 2);

-- Customer 2 purchases 4 items
-- INSERT INTO purchases
--   (customer_id)
-- VALUES
--   (2);

INSERT INTO tool_purchases
  (tool_id, customer_id, quantity)
VALUES
  (1, 2, 3),
  (2, 2, 1),
  (7, 2, 1),
  (4, 2, 1),
  (5, 2, 1);

-- Customer 1 purchases 1 item
-- INSERT INTO purchases
--   (customer_id)
-- VALUES
--   (1);

INSERT INTO tool_purchases
  (tool_id, customer_id, quantity)
VALUES
  (3, 1, 3),
  (8, 1, 2);
