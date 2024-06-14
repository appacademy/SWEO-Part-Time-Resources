-- Find All the Toys for Hermione's cats
-- Your code here

-- one joins
-- SELECT toys.name FROM toys
-- JOIN cats, owners, cat_owners
-- ON (cats.id = cat_owners.cat_id
-- AND owners.id = cat_owners.owner_id
-- AND owners.first_name = "Hermione"
-- AND cats.id = toys.cat_id);

-- two joins

SELECT toys.name FROM toys
JOIN cat_owners ON cat_owners.cat_id = toys.cat_id
JOIN owners ON owners.id = cat_owners.owner_id
WHERE owners.first_name = "Hermione";
