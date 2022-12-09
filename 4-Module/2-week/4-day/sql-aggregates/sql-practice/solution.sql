SELECT '------ PHASE 1 -----------';

SELECT COUNT(*) FROM cats;


SELECT '------ PHASE 2 -----------';

SELECT name, MIN(birth_year) FROM cats;

SELECT name, MAX(birth_year) FROM cats;

SELECT '------ not a simple query -----------';

SELECT name, birth_year
FROM cats 
WHERE birth_year =(SELECT MIN(birth_year) FROM cats)
OR birth_year =(SELECT MAX(birth_year)FROM cats);

-- SELECT name, MIN(birth_year), MAX(birth_year) FROM cats;