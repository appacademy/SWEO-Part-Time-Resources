.headers on

-- select title, bands.name from albums
-- join bands on (bands.id = albums.band_id);

-- select name from bands
-- join albums on (albums.band_id = bands.id)
-- where albums.num_sold < 20000;

SELECT bands.name, albums.title, albums.num_sold FROM albums
JOIN bands ON (albums.band_id = bands.id)
WHERE albums.num_sold < 20000;