--Intermediate Queries ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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



--One to Many ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-- Step 1
-- JOIN the tables, matching FOREIGN KEYs to the corresponding PRIMARY KEY.
SELECT bands.name, albums.title
FROM albums
  JOIN bands ON (bands.id = albums.band_id);


-- Step 2
-- A WHERE clause can filter across any JOINed table, even if it's not in the
-- final output of what is being SELECTed for.
SELECT bands.name
FROM bands
  JOIN albums ON (bands.id = albums.band_id)
WHERE albums.num_sold < 20000;





--Many to Many ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
-- Step 1
-- Connecting both sides of a many-to-many relationship involves JOINing the
-- join table on to one side of the relationship, then JOINing the other side
-- on to the join table.
SELECT musicians.first_name, instruments.type
FROM instruments
  JOIN musician_instruments ON (
    instruments.id = musician_instruments.instrument_id
  )
  JOIN musicians ON (musicians.id = musician_instruments.musician_id)

-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a conected table.
SELECT musicians.first_name,
  musicians.last_name
FROM musicians
  JOIN musician_instruments ON (musicians.id = musician_instruments.musician_id)
  JOIN instruments ON (
    instruments.id = musician_instruments.instrument_id
  )
WHERE instruments.type = 'piano';
