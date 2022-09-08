-- Step 1: Update last name
-- update the records to have the first_name of Ryder ONLY IF their first name is "Ryan" and last_name = "Pond"
UPDATE friends SET first_name = "Ryder" WHERE first_name = "Ryan" AND last_name = "Pond";


-- Step 2: Silent failure

-- make sure to run the .read seed-data.sql to reset the data back to original state so this SQL query could be applied
UPDATE friends
SET last_name = 'Dobson', first_name = 'Christopher'
WHERE last_name = 'Tyler'
  AND first_name = 'Sky';


UPDATE friends
SET last_name = 'Yu', first_name = 'Ray'
WHERE last_name = 'Dobson'
  AND first_name = 'Christopher';