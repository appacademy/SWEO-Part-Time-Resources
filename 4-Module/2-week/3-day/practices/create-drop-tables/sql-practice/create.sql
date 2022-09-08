-- here we add in the column, type, and constraint

-- step 3
-- DROP TABLE puppies;

-- step 5
-- checks if table exists first before attempting to drop it
DROP TABLE IF EXISTS puppies;

-- Step 1
CREATE TABLE puppies(
    id NUMBER PRIMARY KEY,
    name VARCHAR(50),
    age_yrs NUMERIC(3,1),
    breed VARCHAR(100),
    weight_lbs INTEGER(100),
    microchipped BOOLEAN
);



