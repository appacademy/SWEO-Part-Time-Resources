SELECT * FROM albums
    WHERE num_sold > 100000;

SELECT * FROM albums
    WHERE year BETWEEN 2018 AND 2020;

SELECT * FROM albums
    WHERE band_id = 1 OR band_id = 3 OR band_id = 4;