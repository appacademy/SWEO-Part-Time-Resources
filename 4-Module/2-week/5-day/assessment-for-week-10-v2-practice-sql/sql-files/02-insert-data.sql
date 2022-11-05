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

INSERT INTO customers (first_name, last_name, phone)
VALUES
  ('John', 'Smith', 1111111111),
  ('Jane', 'Doe', 2222222222);

INSERT INTO purchases (customer_id)
VALUES
  (1),
  (2),
  (1);

INSERT INTO tool_purchase (tool_id, purchase_id, quantity)
VALUES
  (2, 1, 1),
  (5, 1, 2),
  (1, 2, 3),
  (2, 2, 1),
  (4, 2, 1),
  (5, 2, 1),
  (3, 3, 3);
