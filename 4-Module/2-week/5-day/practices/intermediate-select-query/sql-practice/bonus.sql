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