-- .read order-by.sql

DROP TABLE IF EXISTS puppies; 

CREATE TABLE puppies (
  name VARCHAR(50),
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);

INSERT INTO puppies
VALUES
  ('Cooper', 1, 'Miniature Schnauzer', 18, 1),
  ('Indie', 0.5, 'Yorkshire Terrier', 13, 1),
  ('Kota', 0.7, 'Australian Shepherd', 26, 0),
  ('Zoe', 0.8, 'Korean Jindo', 32, 1),
  ('Charley', 1.5, 'Basset Hound', 25, 0),
  ('Ladybird', 0.6, 'Labradoodle', 20, 1),
  ('Callie', 0.9, 'Corgi', 16, 0),
  ('Jaxson', 0.4, 'Beagle', 19, 1),
  ('Leinni', 1, 'Miniature Schnauzer', 25, 1),
  ('Max', 1.6, 'German Shepherd', 65, 0);


-- **** ORDER BY - ASC ****
-- specify the order in which you get them back, maybe in alphabetical order by their name
SELECT name, breed
  FROM puppies
  ORDER BY name;

-- **** ORDER BY DESC****
-- specify the order by age from oldest dog to youngest dog (descending)
SELECT name, breed, age_yrs
  FROM puppies
  ORDER BY age_yrs DESC;

-- **** ORDER BY Advance****
-- Order by microchipper ascending first, then if tied, order by age_yrs descending
SELECT name, breed, microchipped, age_yrs
  FROM puppies
  ORDER BY microchipped ASC, age_yrs DESC