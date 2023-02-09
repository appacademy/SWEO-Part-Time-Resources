SELECT '--------JOIN---------';

SELECT toys.name FROM toys
JOIN cats ON cats.id = toys.cat_id
WHERE cats.name = 'Garfield';

SELECT '------SUBQUERY------';

SELECT name FROM toys 
WHERE cat_id = (
    SELECT id FROM cats
    WHERE name = 'Garfield'
);

SELECT '---- DYNAMIC INSERT ----';


INSERT INTO toys (name, cat_id)
VALUES('Pepperoni',
    (
    SELECT id FROM cats
    WHERE name = 'Garfield'
    )
);


SELECT '------ VERIFY INSERT----';

SELECT name FROM toys 
WHERE cat_id = (
    SELECT id FROM cats
    WHERE name = 'Garfield'
);


