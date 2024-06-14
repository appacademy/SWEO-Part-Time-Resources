-- Find names of the cats whose owners are both George Beatty and Melynda Abshire, or just George Beatty, or just Melynda Abshire
-- Your code here
SELECT DISTINCT name FROM cats
JOIN cat_owners ON cat_owners.cat_id = cats.id
JOIN owners ON owners.id = cat_owners.owner_id
WHERE (owners.first_name = "George" AND owners.last_name = "Beatty")
or (owners.first_name = "Melynda" AND owners.last_name = "Abshire");
