select name, albums.title, albums.num_sold from bands
--  the "join" keyword table to join "on" keyword (f key = p key)
join albums on (albums.band_id = bands.id)

select name from bands
join albums on (albums.band_id = bands.id)
where albums.num_sold < 20000;

