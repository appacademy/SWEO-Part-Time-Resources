-- this file will update the database. Remember to run `.read undate.sql`

-- Step 1: Update last name
-- update any records in the friends table to have the first_name of Ryder ONLY IF (where) condition is met,  
UPDATE friends SET first_name = "Ryder" WHERE first_name = "Ryan" AND last_name = "Pond";

-- !!!! be careful when updating and changing things inside the database, it might not exist anymore
-- UPDATE friends SET first_name = "Cory" WHERE first_name = "Ryder" AND last_name = "Pond";


-- Step 2: Silent failure
-- for any records in the friends table that has the first_name of "sky" and the last_name of "tyler", then set the last_name for that record to be "blue"
UPDATE friends
SET last_name = 'Blue'
WHERE first_name = 'Sky'
  AND last_name = 'Tyler';