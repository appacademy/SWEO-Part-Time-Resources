-- Not In Project
DROP TABLE IF EXISTS friends;

-- Step 1
CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

-- Step 2
INSERT INTO friends (first_name, last_name)
VALUES
  ('Amy', 'Pond');

-- Step 3
INSERT INTO friends (first_name, last_name)
VALUES
  ('Rose', 'Tyler'),
  ('Martha', 'Jones'),
  ('Donna', 'Noble'),
  ('River', 'Song');

-- Step 4
INSERT INTO friends (id, first_name, last_name)
VALUES (6, 'Jenny', 'Who');

-- All Steps
SELECT * FROM friends;
