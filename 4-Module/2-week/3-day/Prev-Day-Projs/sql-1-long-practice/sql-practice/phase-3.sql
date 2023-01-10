--!!START
-- Rachel joins with a phone number
INSERT INTO customers
  (name, phone)
VALUES
  ('Rachel',  1111111111);

-- Rachel purchases a coffee
SELECT points
FROM customers
WHERE name = 'Rachel';

UPDATE customers
SET points = 6
WHERE name = 'Rachel';

INSERT INTO coffee_orders DEFAULT VALUES;

-- Monica and Phoebe join with an email and a phone number
INSERT INTO customers
  (name, email, phone)
VALUES
  ('Monica',   'monica@friends.show',   2222222222),
  ('Phoebe',   'phoebe@friends.show',   3333333333);

-- Phoebe purchases three coffees
SELECT points
FROM customers
WHERE name = 'Phoebe';

UPDATE customers
SET points = 8
WHERE name = 'Phoebe';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- Rachel and Monica purchases four coffees
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

-- Monica wants to know her new point total
SELECT points
FROM customers
WHERE name = 'Monica';

-- Rachel wants to redeem or purchase a coffee
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

-- Joey, Chandler, and Ross join with an email
INSERT INTO customers
  (name, email)
VALUES
  ('Joey',     'joey@friends.show'),
  ('Chandler', 'chandler@friends.show'),
  ('Ross',     'ross@friends.show');

-- Ross purchases six coffees
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

-- Monica purchases three coffees
SELECT points
FROM customers
WHERE name = 'Monica';

UPDATE customers
SET points = 12
WHERE name = 'Monica';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- Phoebe wants to redeem or purchase a coffee
SELECT points
FROM customers
WHERE name = 'Phoebe';

UPDATE customers
SET points = 9
WHERE name = 'Phoebe';

INSERT INTO coffee_orders DEFAULT VALUES;

-- Ross demands a refund for the last two coffees that he ordered
-- There were 4 coffee orders since his last two coffees
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

-- Joey purchases two coffees
SELECT points
FROM customers
WHERE name = 'Joey';

UPDATE customers
SET points = 7
WHERE name = 'Joey';

INSERT INTO coffee_orders DEFAULT VALUES;
INSERT INTO coffee_orders DEFAULT VALUES;

-- Monica wants to redeem or purchase a coffee
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

-- Chandler wants to delete his loyalty program account
DELETE FROM customers
WHERE name = 'Chandler';

-- Ross wants to redeem or purchase a coffee
SELECT points
FROM customers
WHERE name = 'Ross';

UPDATE customers
SET points = 10
WHERE name = 'Ross';

INSERT INTO coffee_orders DEFAULT VALUES;

-- Joey wants to redeem or purchase a coffee
SELECT points
FROM customers
WHERE name = 'Joey';

UPDATE customers
SET points = 8
WHERE name = 'Joey';

INSERT INTO coffee_orders DEFAULT VALUES;

-- Phoebe wants to change her email
UPDATE customers
SET email = 'p_as_in_phoebe@friends.show'
WHERE name = 'Phoebe';
--!!END
