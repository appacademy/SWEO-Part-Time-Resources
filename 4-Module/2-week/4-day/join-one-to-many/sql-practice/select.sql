SELECT bands.name, albums.title FROM bands
    JOIN albums ON (bands.id = albums.band_id);

SELECT bands.name, albums.num_sold FROM bands
    JOIN albums ON (bands.id = albums.band_id)
    WHERE num_sold < 20000;