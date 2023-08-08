DROP TABLE IF EXISTS users;

CREATE TABLE users (
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	first_name VARCHAR(40) NOT NULL,
	last_name VARCHAR(40) NOT NULL,
	username VARCHAR(100) UNIQUE
);

SELECT * FROM users;


INSERT INTO users
VALUES
	(1, 'Alex', 'Betita', 'alexb'),
	(2, 'Kate', 'Cizewski', 'katec');


INSERT INTO users (first_name, last_name, username)
VALUES
	('Alex', 'Betita', 'alexb'),
	('Kate', 'Cizewski', 'katec');

SELECT * FROM users
WHERE first_name LIKE 'A%';

SELECT * FROM users
WHERE first_name = 'Alex';

DELETE FROM users
WHERE last_name LIKE 'B%';

UPDATE users
SET username = 'alex'
WHERE first_name = 'Alex' and last_name = 'Betita';

-- ALTER TABLE users
-- ADD column_name definitions/constraints

ALTER TABLE users
ADD email VARCHAR(50);
