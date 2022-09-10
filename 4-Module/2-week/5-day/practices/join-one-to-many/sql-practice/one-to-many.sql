-- all the records where (albums.band_id = bands.id) from the two tables (albums + bands)
SELECT * FROM albums JOIN bands ON albums.band_id = bands.id;

-- the columns i want after joining
SELECT albums.title, bands.name FROM albums JOIN bands ON albums.band_id = bands.id;

-- this calls out any band that flops (< 20000 sales)
SELECT bands.name, albums.num_sold  FROM albums JOIN bands ON albums.band_id = bands.id WHERE albums.num_sold < 20000;