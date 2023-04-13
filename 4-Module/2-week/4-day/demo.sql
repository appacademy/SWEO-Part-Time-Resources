.mode box
.headers on

PRAGMA foreign_keys = ON;

DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS juice_boxes;

CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(20)
);
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
('Greg');
INSERT INTO juice_boxes
(juice, student_id)
VALUES
('apple',1),
('grape',2),
('apple',2),
('cranberry',2);

SELECT * FROM juice_boxes;

DELETE FROM students
WHERE id = 2;

SELECT * FROM juice_boxes;

INSERT INTO students
(name)
VALUES
('Tristan A'),
('Christine'),
('Albert');
INSERT INTO juice_boxes
(juice, student_id)
VALUES
('apple',5),
('grape',4),
('apple',5),
('cranberry',1);

SELECT * FROM juice_boxes
WHERE student_id IN (1, 3);
SELECT * FROM juice_boxes
WHERE student_id BETWEEN 2 AND 4;

SELECT * FROM juice_boxes
LIMIT 2
OFFSET 2;

SELECT * FROM juice_boxes
ORDER BY student_id DESC;

-- WHERE weight_lbs > 25
-- =, !=, <>, >, <, >=, <=, !<, !>

-- JOINS
SELECT students.name, juice_boxes.juice FROM students
LEFT JOIN juice_boxes ON student_id = students.id
ORDER BY name;

-- inner join : returns only rows from left table that match in the right table
-- left  join : return rows from left table that match in the right table
-- right join : return rows from right table that match in the left table
-- full outer join : return all rows from both right and left