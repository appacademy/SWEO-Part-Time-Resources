.headers on

-- select * from albums
-- where num_sold >= 100000;

-- select * from albums 
-- where year between 2018 and 2020;

-- select * from albums
-- where band_id in (1, 3, 4);

-- select * from albums
-- order by num_sold;

select * from albums
limit 3
offset 1;
