SELECT * FROM albums
WHERE num_sold >= 100000;

SELECT * FROM albums
WHERE year BETWEEN 2018 AND 2020;

SELECT * FROM albums
WHERE band_id IN (1, 3, 4);

SELECT * FROM albums
WHERE title LIKE 'The%';

SELECT * FROM albums
ORDER BY num_sold DESC
LIMIT 2;

SELECT * FROM albums
ORDER BY num_sold DESC
LIMIT 2 OFFSET 2;