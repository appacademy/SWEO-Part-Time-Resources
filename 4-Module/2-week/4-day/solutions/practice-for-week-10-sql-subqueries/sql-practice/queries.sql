SELECT
  toys.name
FROM
  toys 
JOIN
  cats
ON
  cats.id = toys.cat_id
WHERE
  cats.name = 'Garfield';

--Phase 1
SELECT 
  name
FROM
  toys
WHERE
  cat_id IN
(
  SELECT 
    id
  FROM
    cats
  WHERE
    name = 'Garfield'
);

-- Phase 2
INSERT INTO
  toys (name, cat_id)
VALUES
  ('String', 
  (
    SELECT
      id
    FROM
      cats
    WHERE
      name = 'Garfield'
  ));

SELECT
  *
FROM
  toys;

-- Bonus 1
INSERT INTO 
  toys (name, cat_id)
SELECT 
  'Cat Bed', id
FROM 
  cats
WHERE 
  birth_year < 2013;

SELECT 
  toys.name AS toy_name, cats.name AS cat_name
FROM 
  toys
JOIN 
  cats
ON 
  toys.cat_id = cats.id
WHERE 
  toys.name = 'Cat Bed';

-- Bonus 2
INSERT INTO 
  cats_backup
SELECT 
  * 
FROM 
  cats;

INSERT INTO 
  toys_backup
SELECT 
  * 
FROM 
  toys;