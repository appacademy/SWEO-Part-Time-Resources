DROP TABLE IF EXISTS trees;


CREATE TABLE trees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(40) NOT NULL UNIQUE,
    height_ft INTEGER
);

INSERT INTO trees (name, height_ft) 
VALUES 
('Apple', 35),
('Peach', 15),
('Orange', 20);

-- SELECT * FROM trees;

-- SELECT name 
-- FROM trees
-- WHERE height_ft = 35;

-- SELECT name 
-- FROM trees
-- WHERE name LIKE 'O%';

-- DELETE FROM trees
-- WHERE id = 3;

-- UPDATE trees
-- SET height_ft = 50
-- WHERE name = 'Apple';












