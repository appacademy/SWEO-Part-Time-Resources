SELECT bands.name, albums.title FROM albums
JOIN bands ON (albums.band_id = bands.id);

SELECT bands.name FROM albums
JOIN bands on (albums.band_id = bands.id)
WHERE num_sold < 20000;