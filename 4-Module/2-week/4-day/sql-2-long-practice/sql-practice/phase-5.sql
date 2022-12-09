-- Find the first owner that has a last name containing the lowercase letter "r"
-- Your code here
SELECT *
FROM owners
WHERE
  owners.last_name LIKE '%r%'
LIMIT 1;


-- Find the name and birth year of all the cats ordered by descending birth year
SELECT name, birth_year
FROM cats
ORDER BY birth_year DESC;


-- Find the name of the cats who have an owner whose first name begins with an "H"
SELECT name
FROM cats
JOIN cat_owners
  ON (cat_owners.cat_id = cats.id)
JOIN owners
  ON (cat_owners.owner_id = owners.id)
WHERE
  owners.first_name LIKE 'H%';
