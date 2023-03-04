-- Not In Project (divider for readability of output)
SELECT "----- 1 all -----";

-- Step 1
SELECT * FROM puppies;

-- Not In Project (divider for readability of output)
SELECT "----- 2 select columns -----";

-- Step 2
SELECT name, age_yrs, weight_lbs FROM puppies;

-- Not In Project (divider for readability of output)
SELECT "----- 3 by id -----";

-- Step 3
SELECT name, age_yrs, weight_lbs
FROM puppies
WHERE id = 5;

-- Not In Project (divider for readability of output)
SELECT "----- 4 microchipped -----";

-- Step 4
SELECT name, age_yrs, weight_lbs
FROM puppies
WHERE microchipped = 1;

-- Not In Project (divider for readability of output)
SELECT "----- 5 large -----";

-- Step 5
SELECT name, age_yrs, weight_lbs
FROM puppies
WHERE weight_lbs > 25;

-- Not In Project (divider for readability of output)
SELECT "----- 6 microchippped and large -----";

-- Step 6
SELECT name, age_yrs, weight_lbs
FROM puppies
WHERE microchipped = 1
AND weight_lbs > 25;
