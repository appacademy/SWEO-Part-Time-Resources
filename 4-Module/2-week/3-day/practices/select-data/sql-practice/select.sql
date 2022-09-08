-- remmebr if we want to see which column,  we can do `.headers on`

-- Step 1: Select all rows, all columns
-- SELECT * FROM puppies;


-- Step 2: Select specific columns
-- I want all records but only display each record's name, age, weight.
-- SELECT name, age_yrs, weight_lbs FROM puppies;

-- Step 3: Select one row by its primary key
-- select name, age, and weight columns of EACH RECORD, ONLY IF... CONDITION IS MET (WHERE)
-- SELECT id, name, age_yrs, weight_lbs FROM puppies WHERE id = 5;


-- Step 4: Select rows matching a specific value
-- SELECT name, age_yrs, weight_lbs, microchipped FROM puppies WHERE microchipped = 1;

-- Step 5 INTERMEDIATE: Select rows greater than a value
-- SELECT name, age_yrs, weight_lbs FROM puppies WHERE weight_lbs > 25;

-- Step 6 ADVANCED: Select rows with multiple criteria
-- GET ALL RECORDS AND ITS COLUMNS IF THE RECORD IS CONSIDERED A LARGE PUPPY, AND IT HAS A MICROCHIP
SELECT name, age_yrs, weight_lbs, microchipped FROM puppies WHERE weight_lbs > 25 AND microchipped = 1;