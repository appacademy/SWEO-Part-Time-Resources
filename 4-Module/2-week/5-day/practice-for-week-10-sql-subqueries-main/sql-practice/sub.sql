select toys.name from toys 
where toys.cat_id = (select id from cats where cats.name = 'Garfield');

insert into toys (cat_id, name)
VALUES
((select id from cats where cats.name = 'Garfield'), 'Pepperoni');

select * from toys
