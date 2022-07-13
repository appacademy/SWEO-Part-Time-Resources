DROP TABLE IF EXISTS friends;

CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

-- SELECT '----- PHASE 1 -----';

INSERT INTO friends (first_name, last_name)
VALUES
('Amy', 'Pond');

SELECT * FROM friends;

INSERT INTO friends (first_name, last_name)
VALUES
('Rose', 'Tyler'),
('Martha', 'Jones'),
('Donna', 'Noble'),
('River', 'Song');

-- SELECT '----- PHASE 2 -----';

SELECT * FROM friends;

-- SELECT '----- PHASE 3 -----';

INSERT INTO friends (id, first_name, last_name)
VALUES (600, 'Jenny', 'Who');

SELECT * FROM friends;
