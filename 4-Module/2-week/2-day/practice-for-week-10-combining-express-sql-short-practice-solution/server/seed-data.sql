DROP TABLE IF EXISTS colors;

CREATE TABLE colors (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(32) UNIQUE
);

INSERT INTO colors (name)
VALUES
  ('Red'),
  ('White'),
  ('Blue');
