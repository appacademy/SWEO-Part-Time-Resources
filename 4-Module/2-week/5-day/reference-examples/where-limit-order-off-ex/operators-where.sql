-- .read operators-where.sql
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


-- more SQL operators inside of WHERE clauses to filter table rows

-- **** OR ****
-- to get matching records (col: name, breed) where the breed is not one of the following ('Miniature Schnauzer', 'Basset Hound', 'Labradoodle')
SELECT name, breed FROM puppies WHERE breed = "German Shepherd" OR breed = "Corgi";

-- **** NOT ****
-- to get matching records (col: name, breed) where the breed is not one of the following ('Miniature Schnauzer', 'Basset Hound', 'Labradoodle')
SELECT name, breed FROM puppies WHERE breed NOT IN ('Miniature Schnauzer', 'Basset Hound', 'Labradoodle');


-- **** LIKE ****
-- to get matching records where the breed follows this pattern. (%) represents zero, one, or multiple characters.
SELECT name, breed FROM puppies WHERE breed LIKE '%Shepherd';   

-- valid examples of %Shepherd: ("big Shepherd", "German Shepherd", "Shepherd") 
-- invalid example %Shepherd: ("big Shepherd cool", "Shepherd-the-great")


-- **** Arithmetic Operators ****
-- select matching records where age_yrs times 10 is equal to 6.
SELECT name, breed, age_yrs FROM puppies WHERE age_yrs * 10 = 6;

-- **** Comparison Operators ****
SELECT name, breed, weight_lbs FROM puppies WHERE weight_lbs > 50;

