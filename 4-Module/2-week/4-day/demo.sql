-- Either version works
-- PRAGMA foreign_keys = 1;
PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS leaves;
DROP TABLE IF EXISTS trees;
DROP TABLE IF EXISTS my_left;
DROP TABLE IF EXISTS my_right;

CREATE TABLE trees (
  id INTEGER PRIMARY KEY AUTOINCREMENT
);

CREATE TABLE leaves (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tree_id INTEGER,
  FOREIGN KEY (tree_id) REFERENCES trees(id) -- ON DELETE CASCADE
);

INSERT INTO trees DEFAULT VALUES;
INSERT INTO trees DEFAULT VALUES;


INSERT INTO leaves (tree_id)
VALUES 
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(1),
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(2),
(2);

CREATE TABLE my_right (
	id INTEGER PRIMARY KEY,
	right_val VARCHAR(50)
);

CREATE TABLE my_left (
	id INTEGER PRIMARY KEY,
	left_val VARCHAR(50),
	right_id INTEGER,
	FOREIGN KEY (right_id) REFERENCES my_right(id)
);

INSERT INTO my_right
VALUES
(1, 'a'),
(2, 'b'),
(3, 'c'),
(7, 'g'),
(8, 'h'),
(9, 'i');

INSERT INTO my_left
VALUES
(1, 'A', 1),
(2, 'B', 2),
(3, 'C', 3),
(4, 'D', null),
(5, 'E', null),
(6, 'F', null);

-- -- Inner JOIN
-- SELECT my_left.left_val, my_right.right_val FROM my_left
-- JOIN my_right ON (my_left.right_id = my_right.id);

-- -- Left JOIN
-- SELECT my_left.left_val, my_right.right_val FROM my_left
-- LEFT JOIN my_right ON (my_left.right_id = my_right.id);

-- This is our RIGHT JOIN
SELECT my_left.left_val, my_right.right_val FROM my_right
LEFT JOIN my_left ON (my_left.right_id = my_right.id);