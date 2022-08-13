-- SELECT toys.name FROM toys
-- JOIN cats ON (toys.cat_id = cats.id)
-- WHERE cats.name = 'Garfield';

-- INSERT INTO toys (name, cat_id)
-- VALUES 
-- 	('Pepperoni',
-- 		(SELECT id FROM cats
-- 		 WHERE name = 'Garfield'
-- 		)
-- 	);

-- SELECT name FROM toys
-- WHERE cat_id = (
-- 	SELECT id FROM cats
-- 	WHERE name = 'Garfield'
-- );

SELECT * FROM cats;

INSERT INTO cats_backup
SELECT * FROM cats;

SELECT * FROM cats_backup;
-- INSERT INTO table_name (table_val_1, table_val_2)
-- VALUES
-- 	(newVal1, newVal2),
-- 	(newVal1, newVal2),
-- 	(newVal1, newVal2),
-- 	(newVal1, newVal2);