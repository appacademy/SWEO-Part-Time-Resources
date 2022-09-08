-- step 0: in the terminal run: `.headers on` to see the columns for the records

-- Step 1: Select all rows, all columns
-- SELECT * FROM puppies;

-- Step 2: Select specific columns
-- get all records with only the columns specified
-- select name, age_yrs, weight_lbs from puppies;



-- Step 3: Select one row by its primary key
-- SELECT id, NAME, age_yrs, weight_lbs FROM puppies WHERE id =5;

-- Step 4: Select rows matching a specific value
SELECT id, NAME, age_yrs, weight_lbs, microchipped FROM puppies WHERE microchipped = 1;

-- Step 5 INTERMEDIATE: Select rows greater than a value
-- select all records and list their specified columns ONLY IF their weight_lbs > 25
SELECT name, age_yrs, weight_lbs FROM puppies WHERE weight_lbs>25;


-- Step 6 ADVANCED: Select rows with multiple criteria
-- I want all records that are considered "large puppies", "and also microchipped"
select * from puppies where weight_lbs > 25 and microchipped = 1;
