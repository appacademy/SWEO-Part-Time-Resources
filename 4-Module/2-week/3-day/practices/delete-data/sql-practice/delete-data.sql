-- Step 1: Delete one row by primary key
SELECT * FROM puppies where id = 9;

-- delete all the records where the id = 9
DELETE FROM puppies WHERE id = 9;

-- Step 2: Delete several rows with matching condition
-- we can see if it exists first by selecting it, then using a similar logic to delete the records we want.
SELECT * FROM puppies where microchipped = 0;
DELETE FROM puppies where microchipped = 0;

-- Step 3: Final result
SELECT * FROM puppies;