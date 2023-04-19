.mode box
.headers on

DROP TABLE IF EXISTS cats;
DROP TABLE IF EXISTS toys;
DROP INDEX IF EXISTS cats_color_index;

CREATE TABLE cats (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  color VARCHAR(30),
  name VARCHAR(30)
);
CREATE TABLE toys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(30),
  cat_id INTEGER,
  FOREIGN KEY (cat_id) REFERENCES cats(id)
);

INSERT INTO cats
(name, color)
VALUES
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

-- N+1 Query : A set of queries that are used to first get a set of data and then perform additional queries from the data of the original query
-- SELECT * FROM cats;
-- SELECT * FROM toys WHERE cat_id = 1;
-- SELECT * FROM toys WHERE cat_id = 3;
-- SELECT * FROM toys WHERE cat_id = 4;
-- SELECT * FROM toys WHERE cat_id = 5;

SELECT cats.* FROM cats
JOIN toys ON toys.cat_id = cats.id;

-- Time O(n)
EXPLAIN QUERY PLAN
SELECT * FROM cats
WHERE color = 'orange';

.timer on
SELECT * FROM cats
WHERE color = 'orange';
.timer off

CREATE INDEX cats_color_index
ON cats(color);

-- Time O(log n) because of Index on Colors
EXPLAIN QUERY PLAN
SELECT * FROM cats
WHERE color = 'orange';

SELECT * FROM cats
WHERE color = 'orange';

-- As a general rule, only use indexes for columns that will have more lookup operations than insertions and deletion operations

-- 1 : constant
-- nlogn : very slightly worse than constant
-- logn : very slightly better than linear
-- n : linear
-- n^2 : quadratic
-- n^3 : cubic
-- n^+ : exponential