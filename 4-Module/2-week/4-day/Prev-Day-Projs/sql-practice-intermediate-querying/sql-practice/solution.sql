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

-------------------------- BONUS Query 1 --------------------------
-- LIKE compares text, allowing the use of the % wildcard.
SELECT *
FROM albums
WHERE title LIKE 'The%';

-------------------------- BONUS Query 2 --------------------------
-- The two highest selling albums can be determined with ORDER BY, using DESC
-- to ensure the largest numbers are first.
-- A LIMIT restricts the results to the first two records.
SELECT *
FROM albums
ORDER BY num_sold DESC
LIMIT 2;

-------------------------- BONUS Query 3 --------------------------
-- In order to obtain the *next* two records, an OFFSET is used to skip the
-- first two results.
SELECT *
FROM albums
ORDER BY num_sold DESC
LIMIT 2 OFFSET 2;