-- 1.

INSERT INTO customers (name, phone)
VALUES ('Rachel', 1111111111);

-- 2.

SELECT points
FROM customers
WHERE name = 'Rachel';

UPDATE customers
SET points = 6
WHERE name = 'Rachel';

INSERT INTO coffee_orders DEFAULT VALUES;

-- 3.

INSERT INTO customers
  (name, email, phone)
VALUES
  ('Monica',   'monica@friends.show',   2222222222),
  ('Phoebe',   'phoebe@friends.show',   3333333333);

-- 4. 

SELECT points
FROM customers
WHERE name = 'Phoebe';

UPDATE customers
SET points = 8
WHERE name = 'Phoebe';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- 5. 

SELECT points
FROM customers
WHERE name = 'Rachel';

UPDATE customers
SET points = 10
WHERE name = 'Rachel';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

SELECT points
FROM customers
WHERE name = 'Monica';

UPDATE customers
SET points = 9
WHERE name = 'Monica';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- 6.

SELECT points
FROM customers
WHERE name = 'Monica';

-- 7. 

SELECT points
FROM customers
WHERE name = 'Rachel';

UPDATE customers
SET points = 0
WHERE name = 'Rachel';

INSERT INTO coffee_orders
  (is_redeemed)
VALUES
  (1);

-- 8. 

INSERT INTO customers
  (name, email)
VALUES
  ('Joey',     'joey@friends.show'),
  ('Chandler', 'chandler@friends.show'),
  ('Ross',     'ross@friends.show');

-- 9. 

SELECT points
FROM customers
WHERE name = 'Ross';

UPDATE customers
SET points = 11
WHERE name = 'Ross';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- 10.

SELECT points
FROM customers
WHERE name = 'Monica';

UPDATE customers
SET points = 12
WHERE name = 'Monica';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- 11.

SELECT points
FROM customers
WHERE name = 'Phoebe';

UPDATE customers
SET points = 9
WHERE name = 'Phoebe';

INSERT INTO coffee_orders DEFAULT VALUES;

-- 12. 

SELECT id
FROM coffee_orders;

DELETE FROM coffee_orders
WHERE id = 18;

DELETE FROM coffee_orders
WHERE id = 19;

SELECT points
FROM customers
WHERE name = 'Ross';

UPDATE customers
SET points = 9
WHERE name = 'Ross';

-- 13.

SELECT points
FROM customers
WHERE name = 'Joey';

UPDATE customers
SET points = 7
WHERE name = 'Joey';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- 14.

SELECT points
FROM customers
WHERE name = 'Monica';

UPDATE customers
SET points = 2
WHERE name = 'Monica';

INSERT INTO coffee_orders
  (is_redeemed)
VALUES
  (1);

-- 15.

DELETE FROM customers
WHERE name = 'Chandler';

--16.

SELECT points
FROM customers
WHERE name = 'Ross';

UPDATE customers
SET points = 10
WHERE name = 'Ross';

INSERT INTO coffee_orders DEFAULT VALUES;

--17. 

SELECT points
FROM customers
WHERE name = 'Joey';

UPDATE customers
SET points = 8
WHERE name = 'Joey';

INSERT INTO coffee_orders DEFAULT VALUES;

--18.

UPDATE customers
SET email = 'p_as_in_phoebe@friends.show'
WHERE name = 'Phoebe';