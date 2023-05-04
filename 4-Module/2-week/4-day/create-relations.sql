DROP TABLE IF EXISTS owners;
DROP TABLE IF EXISTS puppies;

CREATE TABLE owners (
    id INTEGER PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE puppies (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    age INTEGER,
    owner_id INTEGER,
    FOREIGN KEY (owner_id) REFERENCES owners(id)
);

INSERT INTO owners (first_name, last_name) VALUES ("Jill", "beep"), ("Boing", "Bong"), ("Beep", "Bop");

INSERT INTO puppies (name, age, owner_id) VALUES ("Puppo", 3, 2), ("Gorbo", 6, 1), ("Kevin", 1, 3);