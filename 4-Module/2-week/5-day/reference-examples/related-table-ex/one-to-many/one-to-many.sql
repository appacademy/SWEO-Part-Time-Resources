-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = ON;
-- PRAGMA foreign_keys = 1; 
-- SQLITE3 foreign key docs: https://www.sqlite.org/foreignkeys.html
DROP TABLE IF EXISTS owners;
DROP TABLE IF EXISTS puppies;

-- parent
CREATE TABLE owners (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL
);

INSERT INTO owners(name) VALUES
  ("Wes"),
  ("Jesse");

-- child (one with the foreign key that points to an owner)
CREATE TABLE puppies (
  id INTEGER PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  age_yrs NUMERIC(3,1),
  breed VARCHAR(100),
  weight_lbs INTEGER,
  microchipped BOOLEAN DEFAULT 0,

  -- correct syntax for adding relationship using FOREIGN KEY
  owner_id INTEGER,
  FOREIGN KEY(owner_id) REFERENCES owners(id) ON DELETE CASCADE
);

INSERT INTO puppies(name, age_yrs, breed, weight_lbs, owner_id) VALUES
  ("Tofu", 1, "Shiba", 20, 1),
  ("Soup", 1, "Shiba", 19, 1);


