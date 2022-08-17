----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

SELECT name FROM cats 
WHERE id IN (
	SELECT cat_id FROM cat_toys
	WHERE toy_id = 5
);

SELECT cats.name FROM cats
   JOIN cat_toys ON (cats.id = cat_toys.cat_id)
   WHERE toy_id = 5;

SELECT cats.name, toys.name FROM cats
    JOIN cat_toys 
    ON cat_id = cats.id 
		JOIN toys
		ON toy_id = toys.id
    WHERE toy_id = 5;

SELECT cats.name, toys.name FROM cat_toys
    JOIN cats 
    ON cat_id = cats.id 
		JOIN toys
		ON toy_id = toys.id
    WHERE toy_id = 5;
-- Paste your results below (as a comment):

-- Rodger
-- Jamal
-- Rachele


----------
-- Step 1 - Analyze the Query
----------
-- Query:

|--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
`--LIST SUBQUERY 1
   `--SCAN cat_toys
Run Time: real 0.001 user 0.000361 sys 0.000310

|--SCAN cat_toys
`--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
Run Time: real 0.000 user 0.000147 sys 0.000088

|--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
|--SCAN cat_toys
`--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
Run Time: real 0.000 user 0.000158 sys 0.000030
-- Paste your results below (as a comment):


-- What do your results mean?

    -- Was this a SEARCH or SCAN?

	Scan for cat toys

    -- What does that mean?

	-- Takes time



----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

	Just look up please

-- Paste your results below (as a comment):




----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

CREATE INDEX idx_cat_toys_toy_id ON cat_toys(toy_id);

-- Analyze Query:
EXPLAIN QUERY PLAN
SELECT name FROM cats 
WHERE id IN (
	SELECT cat_id FROM cat_toys
	WHERE toy_id = 5
);

`idx_table_name_column_names`

-- Paste your results below (as a comment):
QUERY PLAN
|--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)
`--LIST SUBQUERY 1
   `--SEARCH cat_toys USING INDEX idx_cat_toys_toy_id (toy_id=?)
Run Time: real 0.000 user 0.000152 sys 0.000061

-- Analyze Results:

    -- Is the new index being applied in this query?




----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

Already did that 
Used .timer on first, because we're smart'.

-- Paste your results below (as a comment):


-- Analyze Results:
    -- Are you still getting the correct query results?


    -- Did the execution time improve (decrease)?


    -- Do you see any other opportunities for making this query more efficient?


---------------------------------
-- Notes From Further Exploration
---------------------------------
let query = `SELECT * FROM Bookmarks WHERE title Twilight`;
