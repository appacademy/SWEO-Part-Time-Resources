-- Step 1
CREATE TABLE puppies (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50),
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN
);

-- Step 3
DROP TABLE puppies;

-- Step 5
DROP TABLE IF EXISTS puppies;
