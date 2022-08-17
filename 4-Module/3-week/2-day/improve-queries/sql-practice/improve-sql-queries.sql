----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

SELECT name FROM cats 
WHERE id IN (
	SELECT cat_id FROM cat_toys
	WHERE toy_id = 5
);

-- Paste your results below (as a comment):

-- Rodger
-- Jamal
-- Rachele


----------
-- Step 1 - Analyze the Query
----------
-- Query:

EXPLAIN QUERY PLAN
SELECT name FROM cats 
WHERE id IN (
	SELECT cat_id FROM cat_toys
	WHERE toy_id = 5
);

-- Paste your results below (as a comment):

-- |--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
-- `--LIST SUBQUERY 1
--    `--SCAN cat_toys


-- What do your results mean?

    -- Was this a SEARCH or SCAN?

	-- I searched, but I also scanned

    -- What does that mean?

	-- I can use an index to make my scan into a search


----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

SELECT name FROM cats 
WHERE id IN (
	SELECT cat_id FROM cat_toys
	WHERE toy_id = 5
);

-- Paste your results below (as a comment):

-- Run Time: real 0.002 user 0.000778 sys 0.000265


----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

CREATE INDEX idx_cat_toys_toy_id
ON cat_toys(toy_id);

CREATE INDEX naema 
ON cookies(baker_id);

-- Analyze Query:
SELECT name FROM cats 
WHERE id IN (
	SELECT cat_id FROM cat_toys
	WHERE toy_id = 5
);

-- Paste your results below (as a comment):

-- Run Time: real 0.001 user 0.000143 sys 0.000046

-- Analyze Results:

    -- Is the new index being applied in this query?

OH YEAHHH


----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

Whooops go look up

-- Paste your results below (as a comment):

EXPLAIN QUERY PLAN
SELECT name FROM cats 
WHERE id IN (
	SELECT cat_id FROM cat_toys
	WHERE toy_id = 5
);

Now search is used in both cases, index is being used.
-- Analyze Results:
    -- Are you still getting the correct query results?

Yes

    -- Did the execution time improve (decrease)?

Yes!

    -- Do you see any other opportunities for making this query more efficient?

NO 
---------------------------------
-- Notes From Further Exploration
---------------------------------