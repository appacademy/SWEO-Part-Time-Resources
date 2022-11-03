-- Phase 1
SELECT
  bands.name, albums.title
FROM
  albums
JOIN
  bands
ON
  (bands.id = albums.band_id);

-- Phase 2
SELECT
  bands.name
FROM
  bands
JOIN
  albums
ON
  (bands.id = albums.band_id)
WHERE 
  albums.num_sold < 20000;