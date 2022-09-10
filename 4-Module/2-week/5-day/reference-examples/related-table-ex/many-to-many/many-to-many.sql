-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = ON;
-- PRAGMA foreign_keys = 1; 
-- SQLITE3 foreign key docs: https://www.sqlite.org/foreignkeys.html

DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS elephants;

CREATE TABLE people (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

CREATE TABLE elephants (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  age INTEGER
);

-- join table to keep records of the many to many relationships between the records in the two table above.
CREATE TABLE people_elephants (
  person_id INTEGER NOT NULL,
  elephant_id INTEGER NOT NULL,
  FOREIGN KEY (person_id) REFERENCES people(id),
  FOREIGN KEY (elephant_id) REFERENCES elephants(id)
);