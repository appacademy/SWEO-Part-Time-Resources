-- -- Phase 1
SELECT 
  *
FROM
  albums
WHERE
  num_sold >= 100000;

-- -- Phase 2
SELECT
  *
FROM
  albums
WHERE
  year 
BETWEEN 
  2018 AND 2020;

-- Phase 3
SELECT
  *
FROM
  albums
WHERE 
  band_id IN (1, 3, 4);

-- Bonus 1
SELECT
  *
FROM
  albums
WHERE
  title LIKE 'The%';

-- Bonus 2
SELECT
  *
FROM
  albums
ORDER BY 
  num_sold DESC
LIMIT
  2;

-- Bonus 3
SELECT
  *
FROM
  albums
ORDER BY 
  num_sold DESC
LIMIT
  2
OFFSET
  2;
