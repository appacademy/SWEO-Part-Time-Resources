SELECT COUNT(*) FROM cats;
SELECT COUNT(*) FROM toys;

SELECT name, MIN(birth_year) FROM cats;
SELECT name, MAX(birth_year) FROM cats;

--! Can't do it :(
SELECT name, MIN(birth_year), MAX(birth_year), name FROM cats;