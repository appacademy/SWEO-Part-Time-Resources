CREATE table cats (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    breed VARCHAR(200) NOT NULL,
    weight FLOAT NOT NULL,
    age INTEGER NOT NULL
);

INSERT INTO cats (name, breed, weight, age)
VALUES("Loafy", "Turkish Angora", 10.5, 3);

INSERT INTO cats (name, breed, weight, age)
VALUES("Noodles", "Orange Tabby", 13, 7);
