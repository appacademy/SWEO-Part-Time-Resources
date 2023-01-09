-- To verify 1
SELECT '----- 1 before delete id 5 -----';
SELECT * FROM puppies WHERE id = 9;

-- Step 1
DELETE FROM puppies WHERE id = 9;

-- To verify 1
SELECT '----- 1 after delete id 5 -----';
SELECT * FROM puppies WHERE id = 9;



-- To verify 2
SELECT '----- 2 before delete not microchipped -----';
SELECT * FROM puppies WHERE microchipped = 0;

-- Step 2
DELETE FROM puppies WHERE microchipped = 0;

-- To verify 2
SELECT '----- 2 after delete not microchipped -----';
SELECT * FROM puppies WHERE microchipped = 0;



-- Step 3
SELECT '----- 3 final table -----';
SELECT * FROM puppies;
