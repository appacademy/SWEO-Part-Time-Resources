-- Step 1: Delete one row by primary key
-- SELECT * FROM puppies where id = 5;
-- -- delete all records where id =5
-- DELETE FROM puppies where id =5;

-- Step 2: Delete several rows with matching condition
-- select all records and display all columns for puppies that have no microchipped
SELECT * FROM puppies WHERE microchipped = 0;
DELETE FROM puppies WHERE microchipped = 0;