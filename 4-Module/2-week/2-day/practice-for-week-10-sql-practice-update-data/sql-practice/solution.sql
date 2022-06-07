--------------- Step 1 ---------------

-- Not In Project (divider for readability of output)
SELECT "----- 1 - Amy Pond => Amy Blue -----";

-- Not In Project (output for verification)
SELECT * FROM friends WHERE first_name = 'Amy';

UPDATE friends
SET last_name = 'Blue'
WHERE first_name = 'Amy'
  AND last_name = 'Pond';

-- Not In Project (output for verification)
SELECT * FROM friends WHERE first_name = 'Amy';

-- Not In Project (divider for readability of output)
SELECT "----- 2 - Silent failure -----";

-- Not In Project (output for verification)
SELECT * FROM friends WHERE first_name = 'Rose';

--------------- Step 2 - Original ---------------

UPDATE friends
SET last_name = 'Smith'
WHERE first_name = 'Tyler'
  AND last_name = 'Rose';

-- Not In Project (output for verification)
SELECT * FROM friends WHERE first_name = 'Rose';

--------------- Step 2 - Fixed ---------------

UPDATE friends
SET last_name = 'Smith'
WHERE first_name = 'Rose'
  AND last_name = 'Tyler';

-- Not In Project (output for verification)
SELECT * FROM friends WHERE first_name = 'Rose';

-- Not In Project (divider for readability of output)
SELECT "----- 3 - Update error -----";

-- Not In Project (output for verification)
SELECT * FROM friends WHERE id = 5;

--------------- BONUS - Original ---------------

UPDATE friends
SET last_name = NULL
WHERE id = 5;

-- Not In Project (output for verification)
SELECT * FROM friends WHERE id = 5;

--------------- BONUS - Fixed ---------------

UPDATE friends
SET last_name = ''
WHERE id = 5;

-- Not In Project (output for verification)
SELECT * FROM friends WHERE id = 5;