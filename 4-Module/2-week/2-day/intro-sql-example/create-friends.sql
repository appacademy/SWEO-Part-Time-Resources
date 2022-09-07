-- this is a file to write SQL syntax that we can then use sqlite to run and inject data

-- initially drop table from database of friends
DROP TABLE friends;

-- creates the structure or schema of our database
CREATE TABLE friends(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

-- actually affecting the content and adding content to the database
INSERT INTO friends VALUES 
    (1, "wes", "trinh"), 
    (2, "jesse", "brooks"),
    (3, "Christopher", "Dobson"),
    (4, "Natalia", "Miller")
    ;