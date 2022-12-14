----------
-- Step 0 - Create a Query 
----------
-- Query: Select all cats that have a toy with an id of 5

    SELECT * FROM cats
    JOIN cat_toys ON cats.id = cat_toys.cat_id
    JOIN toys ON toys.id = cat_toys.toy_id
    WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):

    -- 4002|Rachele|Maroon|Foldex Cat|4509|4002|5|5|Shiny Mouse|Blue|7
    -- 31|Rodger|Lavender|Oregon Rex|10008|31|5|5|Shiny Mouse|Blue|7
    -- 77|Jamal|Orange|Sam Sawet|10051|77|5|5|Shiny Mouse|Blue|7



----------
-- Step 1 - Analyze the Query
----------
-- Query:

    EXPLAIN QUERY PLAN
    SELECT * FROM cats
    JOIN cat_toys ON cats.id = cat_toys.cat_id
    JOIN toys ON toys.id = cat_toys.toy_id
    WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):

    -- QUERY PLAN
    -- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
    -- |--SCAN cat_toys
    -- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- What do your results mean?

    -- Was this a SEARCH or SCAN?

        -- SEARCH toys and cats
        -- SCAN cat_toys

    -- What does that mean?

        -- The primary key index on cats and toys was used to search for
        -- appropriate records, which is good
        -- Every single row of the cat_toys table was scanned, and no index was
        -- used in this operation. This could potentially be improved by
        -- applying an index.



----------
-- Step 2 - Time the Query to get a baseline
----------
-- Query (to be used in the sqlite CLI):

    -- .timer on

    SELECT * FROM cats
    JOIN cat_toys ON cats.id = cat_toys.cat_id
    JOIN toys ON toys.id = cat_toys.toy_id
    WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):

    -- 4002|Rachele|Maroon|Foldex Cat|4509|4002|5|5|Shiny Mouse|Blue|7
    -- 31|Rodger|Lavender|Oregon Rex|10008|31|5|5|Shiny Mouse|Blue|7
    -- 77|Jamal|Orange|Sam Sawet|10051|77|5|5|Shiny Mouse|Blue|7
    -- Run Time: real 0.005 user 0.002021 sys 0.001183



----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    CREATE INDEX
        idx_cat_toys_toy_id    
        ON cat_toys(toy_id);    

-- Analyze Query:
    EXPLAIN QUERY PLAN
    SELECT * FROM cats
    JOIN cat_toys ON cats.id = cat_toys.cat_id
    JOIN toys ON toys.id = cat_toys.toy_id
    WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):

    -- QUERY PLAN
    -- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
    -- |--SEARCH cat_toys USING INDEX idx_cat_toys_toy_id (toy_id=?)
    -- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- Analyze Results:

    -- Is the new index being applied in this query?

        -- Yes, the cat_toys table is now being searched instead of scanned
        -- It is applying the new idx_cat_toys_toy_id index to only run through
        -- the cat_toy records that have the correct toy_id



----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    .timer on

    SELECT * FROM cats
    JOIN cat_toys ON cats.id = cat_toys.cat_id
    JOIN toys ON toys.id = cat_toys.toy_id
    WHERE cat_toys.toy_id = 5;

-- Paste your results below (as a comment):

    -- 4002|Rachele|Maroon|Foldex Cat|4509|4002|5|5|Shiny Mouse|Blue|7
    -- 31|Rodger|Lavender|Oregon Rex|10008|31|5|5|Shiny Mouse|Blue|7
    -- 77|Jamal|Orange|Sam Sawet|10051|77|5|5|Shiny Mouse|Blue|7
    -- Run Time: real 0.001 user 0.000217 sys 0.000126

-- Analyze Results:
    -- Are you still getting the correct query results?

        -- Yes

    -- Did the execution time improve (decrease)?

        -- Yes

    -- Do you see any other opportunities for making this query more efficient?

        -- No, an index is already applied to each table, and adding the index
        -- improved (decreased) the execution time of the query.

---------------------------------
-- Notes From Further Exploration
---------------------------------