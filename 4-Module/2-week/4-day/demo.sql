.mode box
.headers on


PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS juice_boxes;

CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(20)
);
-- CREATE TABLE departments()
-- CREATE TABLE student_department (
--   student_id
--   department_id
-- )

CREATE TABLE juice_boxes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  juice VARCHAR(50) NOT NULL,
  student_id INTEGER,
  FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE
);

INSERT INTO students
(name)
VALUES
('Tristan'),
('Greg'),
('Mike'),
('Jamie'),
('Chris');
INSERT INTO juice_boxes
(juice, student_id)
VALUES
('apple',1),
('grape',2),
('apple',2),
('cranberry',1),
('grape',3),
('apple',4),
('grape',2),
('cranberry',4),
('cranberry',3);

-- SELECT * FROM juice_boxes;

-- DELETE FROM students
-- WHERE id = 2;

-- SELECT * FROM juice_boxes;

-- SELECT * FROM juice_boxes
-- WHERE student_id IN (3, 4);
-- SELECT * FROM juice_boxes
-- WHERE student_id BETWEEN 3 AND 22;
SELECT * FROM juice_boxes
WHERE student_id IN (3,4)
AND student_id BETWEEN 3 AND 22;

SELECT * FROM juice_boxes
ORDER BY juice DESC, student_id ASC;

SELECT * FROM juice_boxes
ORDER BY id DESC
LIMIT 1;

SELECT * FROM juice_boxes
ORDER BY id DESC
OFFSET 20;

-- WHERE weight_lbs > 25;
-- =, !=, <>, >, <, >=, <=, !<, !>

SELECT name, juice FROM students
LEFT JOIN juice_boxes ON student_id = students.id;
SELECT name, juice FROM students
INNER JOIN juice_boxes ON student_id = students.id;

-- inner join: rows from left that match in right
-- left join: rows from left
-- right join: rows from right
-- full outer join: all rows from both right and left

-- default join is an inner JOIN