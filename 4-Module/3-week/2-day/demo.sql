.mode box
.headers on

PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS toys;

CREATE TABLE cats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  color VARCHAR(30),
  name VARCHAR(30)
);
CREATE TABLE toys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(30),
  cat_id INTEGER,
  FOREIGN KEY (cat_id) REFERENCES cats(id) ON DELETE CASCADE
);

INSERT INTO cats
(name, color)
VALUES
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Bingo','orange'),
('Mittens','black'),
('Omally','orange'),
('Pepper','calico'),
('Fluffy','white');
INSERT INTO toys
(name, cat_id)
VALUES
('Mouse Bell Thing',1),
('Feather',2),
('Bell Ball',1),
('Feather',3),
('Scratching Post',4);

-- N+1 Query : A set of queries that are used to first get a set of data and then additional queries to get additional data
-- SELECT * FROM cats;
-- SELECT * FROM toys WHERE cat_id =1;
-- SELECT * FROM toys WHERE cat_id =2;
-- SELECT * FROM toys WHERE cat_id =3;
-- SELECT * FROM toys WHERE cat_id =4;

-- SELECT toys.*, cats.name FROM cats
-- JOIN toys ON toys.cat_id = cats.id;

EXPLAIN QUERY PLAN SELECT * FROM cats
WHERE color = 'orange';
.timer on
SELECT * FROM cats
WHERE color = 'orange';
.timer off

CREATE INDEX cat_color_index
ON cats(color);

.timer on
SELECT * FROM cats
WHERE color = 'orange';
SELECT * FROM cats
WHERE color = 'orange';
SELECT * FROM cats
WHERE color = 'orange';
SELECT * FROM cats
WHERE color = 'orange';
.timer off
-- only use indexes for columns that will have more lookups than insertion or deletions