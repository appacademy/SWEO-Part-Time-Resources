-- This ensures that SQLite enforces FOREIGN KEY constraints
PRAGMA foreign_keys = ON;
-- PRAGMA foreign_keys = 1; 

DROP TABLE IF EXISTS juices;
DROP TABLE IF EXISTS juice_types;
DROP TABLE IF EXISTS students;

-- juice types i.e.: apple, orange, mango, strawberry, etc. 
-- parent table  
CREATE TABLE juice_types (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(30) NOT NULL UNIQUE
);

-- parent table
CREATE TABLE students (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

-- child table (one with the foreign key column)
CREATE TABLE juices (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    color VARCHAR(20),
    sweet BOOLEAN DEFAULT 1,
    
    -- foreign keys
    jt_id INTEGER NOT NULL,
    student_id INTEGER NOT NULL,

    -- If a record in <table_1> is deleted, all records in <table_2 (this one)> that reference that record in <table_1> through the <foreign_key> will be deleted.;
    -- So if juice_type of `apple` gets removed, all juice boxes that has a foreign key referencing the record `apple` will also be deleted.;
    FOREIGN KEY (jt_id) REFERENCES juice_types(id) ON DELETE CASCADE,

    -- So if Jeff gets removed, he loses all his juice boxes as well;
    FOREIGN KEY(student_id) 
        REFERENCES students(id)
        ON DELETE CASCADE
);

-- ******insert students******
INSERT INTO students(name) VALUES ("Jeff"), ("Cindy");

-- ******insert actual juice_types******
INSERT INTO juice_types(name) VALUES ("apple"), ("grape"), ("orange");

-- ******insert a few juices w/ relationship******
-- juice box belongs to Jeff and belongs to "apple" juice type
INSERT INTO juices(color, jt_id, student_id) VALUES ("green", 1, 1);

-- juice box belongs to Jeff and belongs to "orange" juice type
INSERT INTO juices(color, jt_id, student_id) VALUES ("orange", 3, 1);

-- ******deleting Jeff******
-- first take a look at the juices table before deleting
SELECT * FROM juices;
DELETE FROM students WHERE name = "Jeff";

-- ****run this in sqlite3 terminal for this db: SELECT * FROM juices; ****
-- take a look at juices table after. We didn't delete any juice, but it was removed! This is the "cascading delete"

