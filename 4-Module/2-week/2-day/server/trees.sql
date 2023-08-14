DROP TABLE IF EXISTS trees;

CREATE TABLE trees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    height_ft INTEGER
);

INSERT INTO trees (name, height_ft) 
VALUES ('Apple', 35),
('Peach', 15),
('Orange', 20);


-- SELECT * FROM trees;

-- SELECT type
-- FROM trees
-- WHERE type = 'Apple';

-- SELECT type
-- FROM trees
-- WHERE type LIKE 'A%';

-- DELETE FROM trees 
-- WHERE height_ft = 20;

-- UPDATE trees
-- SET height_ft = 25
-- WHERE type = 'Orange';

