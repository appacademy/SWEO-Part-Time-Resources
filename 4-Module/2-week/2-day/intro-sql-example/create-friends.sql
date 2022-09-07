DROP TABLE friends;

CREATE TABLE friends(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255) NOT NULL
);

INSERT INTO friends(first_name, last_name, middle_name) VALUES 
    ("wes", "trinh", "t"), 
    ("jesse", "brooks", "t");