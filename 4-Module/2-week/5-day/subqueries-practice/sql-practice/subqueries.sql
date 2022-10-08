INSERT INTO toys (name, cat_id)
VALUES
(
    "Pepperoni",
    (
        SELECT id FROM cats
        WHERE name = 'Garfield'
    )
)
-- (name, cat_id)

SELECT name, cat_id FROM toys
WHERE cat_id IN (
    SELECT id FROM cats
    WHERE name = 'Garfield'
)