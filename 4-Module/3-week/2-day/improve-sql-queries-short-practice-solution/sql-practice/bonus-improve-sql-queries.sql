----------
-- Step 0 - Create a Query 
----------
-- Query: Find a count of `toys` records that have a price greater than
    -- 55 and belong to a cat that has the color "Olive".

    SELECT COUNT() FROM toys
    JOIN cat_toys ON toys.id = cat_toys.toy_id
    JOIN cats ON cats.id = cat_toys.cat_id
    WHERE toys.price > 55 AND cats.color = "Olive";

-- Paste your results below (as a comment):

    -- 215



----------
-- Step 1 - Analyze the Query
----------
-- Query:

    EXPLAIN QUERY PLAN
    SELECT COUNT() FROM toys
    JOIN cat_toys ON toys.id = cat_toys.toy_id
    JOIN cats ON cats.id = cat_toys.cat_id
    WHERE toys.price > 55 AND cats.color = "Olive";

-- Paste your results below (as a comment):

    -- QUERY PLAN
    -- |--SCAN cat_toys
    -- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
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

    .timer on

    SELECT COUNT() FROM toys
    JOIN cat_toys ON toys.id = cat_toys.toy_id
    JOIN cats ON cats.id = cat_toys.cat_id
    WHERE toys.price > 55 AND cats.color = "Olive";

-- Paste your results below (as a comment):

    -- 215
    -- Run Time: real 0.019 user 0.018029 sys 0.000357



----------
-- Step 3 - Add an index and analyze how the query is executing
----------

-- Create index:

    CREATE INDEX idx_cat_toys_toy_id ON cat_toys(toy_id);
    CREATE INDEX idx_cat_toys_cat_id ON cat_toys(cat_id);

-- Analyze Query:
    EXPLAIN QUERY PLAN
    SELECT COUNT() FROM toys
    JOIN cat_toys ON toys.id = cat_toys.toy_id
    JOIN cats ON cats.id = cat_toys.cat_id
    WHERE toys.price > 55 AND cats.color = "Olive";

-- Paste your results below (as a comment):

    -- QUERY PLAN
    -- |--SCAN cat_toys
    -- |--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
    -- `--SEARCH cats USING INTEGER PRIMARY KEY (rowid=?)

-- Analyze Results:

    -- Is the new index being applied in this query?

        -- No new indexes were applied to the query



----------
-- Step 4 - Re-time the query using the new index
----------
-- Query (to be used in the sqlite CLI):

    .timer on

    SELECT COUNT() FROM toys
    JOIN cat_toys ON toys.id = cat_toys.toy_id
    JOIN cats ON cats.id = cat_toys.cat_id
    WHERE toys.price > 55 AND cats.color = "Olive";

-- Paste your results below (as a comment):

    -- 215
    -- Run Time: real 0.022 user 0.018277 sys 0.001588

-- Analyze Results:
    -- Are you still getting the correct query results?

        -- Yes

    -- Did the execution time improve (decrease)?

        -- Baseline: 
            -- Run Time: real 0.019 user 0.018029 sys 0.000357
        -- New execution time: 
            -- Run Time: real 0.022 user 0.018277 sys 0.001588
        -- The new indexes were not applied, and the execution time was slower (increased).

    -- Do you see any other opportunities for making this query more efficient?

        -- Try creating new / different indexes
        -- Drop any indexes you do not end up using


---------------------------------
-- Notes From Further Exploration
---------------------------------

-- Possible indexes created:
CREATE INDEX idx_cat_toys_toy_id ON cat_toys(toy_id);
CREATE INDEX idx_cat_toys_cat_id ON cat_toys(cat_id);
CREATE INDEX idx_toys_price ON toys(price);
CREATE INDEX idx_cats_color ON cats(color);

-- Analysis:
    -- QUERY PLAN
    -- |--SEARCH cats USING COVERING INDEX idx_cats_color (color=?)
    -- |--SEARCH cat_toys USING INDEX idx_cat_toys_cat_id (cat_id=?)
    -- `--SEARCH toys USING INTEGER PRIMARY KEY (rowid=?)
-- Timing Results:
    -- Baseline: 
        -- Run Time: real 0.019 user 0.018029 sys 0.000357
    -- Current Results with idx_cats_color and idx_cat_toys_cat_id applied
        -- 215
        -- Run Time: real 0.011 user 0.002490 sys 0.002852
-- Decision:
    -- Drop the unused indexes idx_toys_price and idx_cat_toys_toy_id
    -- Keep the idx_cats_color and idx_cat_toys_cat_id indexes
        -- they were both applied and decresed the real and user run time