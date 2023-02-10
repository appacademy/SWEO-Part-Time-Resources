-- SQL LONG PRACTICE SOLUTION BELOW

-- Part 2/4~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
DROP TABLE IF EXISTS toys;
DROP TABLE IF EXISTS cat_owners;
DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS owners;

CREATE TABLE owners (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name TEXT,
  last_name TEXT
);

CREATE TABLE cats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  birth_year INTEGER
);

CREATE TABLE cat_owners (
  owner_id INTEGER,
  cat_id INTEGER,
  PRIMARY KEY (owner_id, cat_id),
  FOREIGN KEY (owner_id) REFERENCES owners(id) ON DELETE CASCADE
  FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE
);

CREATE TABLE toys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  cat_id INTEGER,
  FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE
);



--PART 3~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
SELECT '----- Herminoe cats ------';

SELECT cats.name, owners.first_name
FROM cats
JOIN cat_owners ON cats.id = cat_owners.cat_id
JOIN owners ON owners.id = cat_owners.owner_id
WHERE
  owners.first_name = 'Hermione';


-- Find All the Toys for Hermione's cats
SELECT '----- Herminoe cat toys ------';
-- Three JOINs
SELECT toys.name
FROM toys
JOIN cats ON (toys.cat_id = cats.id)
JOIN cat_owners ON (cats.id = cat_owners.cat_id)
JOIN owners ON (cat_owners.owner_id = owners.id)
WHERE
  owners.first_name = 'Hermione';

-- Two JOINs
-- SELECT toys.name
-- FROM toys
-- JOIN cat_owners ON (cat_owners.cat_id = toys.cat_id)
-- JOIN owners ON (owners.id = cat_owners.owner_id)
-- WHERE
--   owners.first_name = 'Hermione';


--PART 5~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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


-- Find the first and last names of the owner whose cats are born after the year 2015

SELECT owners.first_name, owners.last_name
FROM cats
JOIN cat_owners
  ON (cat_owners.cat_id = cats.id)
JOIN owners
  ON (cat_owners.owner_id = owners.id)
WHERE
  cats.birth_year > 2015;

-- Find names of the cats whose owners are both George Beatty and Melynda Abshire, or just George Beatty, or just Melynda Abshire

SELECT DISTINCT cats.name
FROM cats
JOIN cat_owners ON (cats.id = cat_owners.cat_id)
JOIN owners ON (owners.id = cat_owners.owner_id)
WHERE
  (owners.first_name = 'George' AND owners.last_name = 'Beatty') OR (owners.first_name = 'Melynda' AND owners.last_name = 'Abshire');

--PART 6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
UPDATE toys
SET name = 'Pooky'
WHERE name = 'Cheetos';
