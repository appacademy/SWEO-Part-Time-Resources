-- Count
SELECT
  COUNT(*)
FROM
  cats;

-- Oldest
SELECT
  name, MIN(birth_year)
FROM
  cats;

-- Youngest
SELECT
  name, MAX(birth_year)
FROM
  cats;

SELECT
  name, birth_year
FROM
  cats
WHERE birth_year = (SELECT MIN(birth_year) FROM cats)
UNION
SELECT
  name, birth_year
FROM
  cats
WHERE birth_year = (SELECT MAX(birth_year) FROM cats)

-- Brandon's solution
SELECT 
  * 
FROM 
  cats 
WHERE 
  birth_year = (SELECT MAX(birth_year) FROM cats) 
OR 
  birth_year = (SELECT MIN(birth_year) FROM cats);

-- Bonus 1
SELECT 
  cats.name, COUNT(toys.id) AS toy_count
FROM 
  toys
JOIN 
  cats 
ON 
  cats.id = toys.cat_id
GROUP BY 
  toys.cat_id;

-- Bonus 2
SELECT 
  cats.name, COUNT(toys.id) AS toy_count
FROM 
  toys
JOIN 
  cats 
ON 
  cats.id = toys.cat_id
GROUP BY 
  cat_id
HAVING 
  toy_count >= 2;
