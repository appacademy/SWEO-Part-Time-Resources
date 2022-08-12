-- Q1
SELECT * FROM albums
WHERE num_sold >= 100000;

-- Q2
SELECT * FROM albums
WHERE year BETWEEN 2018 AND 2020;

-- Q3
SELECT * FROM albums             
WHERE band_id IN (1, 3, 4);

-- Bonus Q1
SELECT * FROM albums
WHERE title LIKE 'The%';

-- Bonus Q2
SELECT *
FROM albums
ORDER BY num_sold DESC
LIMIT 2;

-- Bonus Q3
SELECT *
FROM albums
ORDER BY num_sold DESC
LIMIT 2 OFFSET 2;