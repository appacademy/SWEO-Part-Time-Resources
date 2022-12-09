SELECT '----- NUMBER OF CATS ------';

SELECT COUNT(*) FROM cats;


SELECT '------ MIN/MAX ----------';

SELECT name, MIN(birth_year) FROM CATS;
SELECT name, MAX(birth_year) FROM CATS;


-- Can you query for both cats in one simple SELECT?
-- NO because this select only returns 1 result
SELECT name, MIN(birth_year), MAX(birth_year) FROM cats;