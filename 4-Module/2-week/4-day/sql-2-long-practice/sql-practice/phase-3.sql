-- Find Hermione's cats
-- Your code here
SELECT cats.name
FROM cats
JOIN cat_owners ON cats.id = cat_owners.cat_id
JOIN owners ON owners.id = cat_owners.owner_id
WHERE
  owners.first_name = 'Hermione';


-- SELECT name FROM cats WHERE id  =  (
--       SELECT cat_id FROM cat_owners WHERE owner_id =(
--           SELECT id FROM owners WHERE first_name = 'Hermione'
--       )
-- );


-- Find All the Toys for Hermione's cats
-- Three JOINs
SELECT toys.name
FROM toys
JOIN cats ON (toys.cat_id = cats.id)
JOIN cat_owners ON (cats.id = cat_owners.cat_id)
JOIN owners ON (cat_owners.owner_id = owners.id)
WHERE
  owners.first_name = 'Hermione';

-- Two JOINs
SELECT toys.name
FROM toys
JOIN cat_owners ON (cat_owners.cat_id = toys.cat_id)
JOIN owners ON (owners.id = cat_owners.owner_id)
WHERE
  owners.first_name = 'Hermione';