SELECT '------REPLACE JOIN -------';

-- SELECT toys.name FROM toys
-- JOIN cats on cats.id = toys.cat_id
-- WHERE cats.name = 'Garfield';

SELECT name FROM toys
WHERE cat_id = (
    SELECT id FROM cats
    WHERE name = 'Garfield'
);

SELECT '------- INSERT ---------';

INSERT INTO toys
(name, cat_id)
VALUES
('Pepperoni',
    (
        SELECT id FROM cats
        WHERE name = 'Garfield'
    )
);

SELECT name FROM toys
WHERE cat_id = (
    SELECT id FROM cats
    WHERE name = 'Garfield'
);