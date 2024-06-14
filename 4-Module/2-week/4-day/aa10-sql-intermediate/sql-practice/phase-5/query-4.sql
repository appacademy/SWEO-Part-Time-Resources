-- Find the first and last names of the owner whose cats are born after the year 2015
-- Your code here
SELECT owners.first_name, owners.last_name FROM cats
JOIN cat_owners ON cat_owners.cat_id = cats.id
JOIN owners ON owners.id = cat_owners.owner_id
WHERE cats.birth_year > 2015;
