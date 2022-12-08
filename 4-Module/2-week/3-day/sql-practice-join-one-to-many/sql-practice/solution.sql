--   SELECT column1, column2, ...etc FROM table1
--   JOIN table2 ON (column-table1 = column-table2);

SELECT bands.name, albums.title from albums
JOIN bands ON (bands.id = albums.band_id);

SELECT bands.name from albums
JOIN bands ON (bands.id = albums.band_id)
WHERE albums.num_sold < 20000;