-- classic join syntax
-- select toys.name from toys 
-- join cats on (cats.id = toys.cat_id)
-- where cats.name = 'Garfield';


-- select name from toys 
-- where toys.cat_id in (select id from cats where name = 'Garfield');

-- insert into toys (cat_id, name)
-- values
-- ((select id from cats where name = 'Garfield'), 'Pepperoni');


insert into toys (name, cat_id)
select 'Cat Bed', id from cats
where cats.birth_year < 2013;

-- select * from toys;

-- select 'Some value', name from toys;
-- insert into toys(name, cat_id)
--     select 'Cat Bed' id from cats
--     where birth_year in (
--       select birth_year from cats
--       where birth_year < 2013
--     );

  select * from toys;