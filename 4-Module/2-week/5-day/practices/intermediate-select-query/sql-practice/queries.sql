-------------------------- Query 1 --------------------------
-- The >= comparison returns all albums with at least 100,000 sales.
SELECT *
FROM albums
WHERE num_sold >= 100000;

-------------------------- Query 2 --------------------------
-- BETWEEN allows a comparison of values to a range.
SELECT *
FROM albums
WHERE year BETWEEN 2018 AND 2020;

-------------------------- Query 3 --------------------------
-- IN allows a comparison of values to a specific list.
SELECT *
FROM albums
WHERE band_id IN (1, 3, 4);

