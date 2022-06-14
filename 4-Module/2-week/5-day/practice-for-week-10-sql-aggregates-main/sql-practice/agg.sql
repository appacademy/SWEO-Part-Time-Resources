-- select count(cats.id) from cats;

select  max(birth_year), * from cats

-- SELECT name FROM Cats
-- WHERE birth_year IN 
-- ((SELECT MIN(birth_year) FROM Cats), 
-- (SELECT MAX(birth_year) FROM Cats));