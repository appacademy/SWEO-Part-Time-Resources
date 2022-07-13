DROP TABLE IF EXISTS friends;

CREATE TABLE friends (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL
);

INSERT INTO friends (first_name, last_name)
VALUES
  ('Amy', 'Pond'),
  ('Rose', 'Tyler'),
  ('Martha', 'Jones'),
  ('Donna', 'Noble'),
  ('River', 'Song');

SELECT * FROM friends;
