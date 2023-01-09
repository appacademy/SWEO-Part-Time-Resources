--------------- Step 1 ---------------

-- Not In Project (divider for readability of output)
SELECT "----- 1 - Ryan Pond => Ryder Pond -----";

-- Not In Project (output for verification)
SELECT * FROM friends WHERE last_name = 'Pond';

UPDATE friends
SET first_name = 'Ryder'
WHERE first_name = 'Ryan'
  AND last_name = 'Pond';

-- Not In Project (output for verification)
SELECT * FROM friends WHERE last_name = 'Pond';

-- Not In Project (divider for readability of output)
SELECT "----- 2 - Silent failure -----";

-- Not In Project (output for verification)
SELECT * FROM friends WHERE first_name = 'Sky';

--------------- Step 2 - Original ---------------

UPDATE friends
SET last_name = 'Blue'
WHERE first_name = 'Tyler'
  AND last_name = 'Sky';

-- Not In Project (output for verification)
SELECT * FROM friends WHERE first_name = 'Sky';

--------------- Step 2 - Fixed ---------------

UPDATE friends
SET last_name = 'Blue'
WHERE first_name = 'Sky'
  AND last_name = 'Tyler';

-- Not In Project (output for verification)
SELECT * FROM friends WHERE first_name = 'Sky';

-- Not In Project (divider for readability of output)
SELECT "----- BONUS - Update error -----";

-- Not In Project (output for verification)
SELECT * FROM friends WHERE id = 5;

--------------- BONUS - Original ---------------

UPDATE friends
SET first_name = NULL
WHERE id = 5;

-- Not In Project (output for verification)
SELECT * FROM friends WHERE id = 5;

--------------- BONUS - Fixed ---------------

UPDATE friends
SET first_name = ''
WHERE id = 5;

-- Not In Project (output for verification)
SELECT * FROM friends WHERE id = 5;
