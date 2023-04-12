/*
foreign key : a key that references the pk of another table.
student_id, car_vin, person_ssn

one-to-one   : one row in table A reference only one row in table B
one-to-many  : one row in table A reference many rows in table B
many-to-many : one row in table A reference many rows in table B
--             one row in table B reference many rows in table A
*/
.mode box
.headers on

DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS preferences;
DROP TABLE IF EXISTS juice_boxes;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS student_class;

-- 1-1
CREATE TABLE students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50)
);
CREATE TABLE preferences (
  student_id INTEGER PRIMARY KEY,
  language VARCHAR(50),
  dark_mode BOOLEAN DEFAULT 0,
  FOREIGN KEY (student_id) REFERENCES students(id)
);

INSERT INTO students
(name)
VALUES
('Tristan'),
('Sarah'),
('Harry'),
('Bulma');

INSERT INTO preferences
(language, dark_mode)
VALUES
('English-US',1),
('English-US',1),
('English-UK',0),
('Japanese',1);

-- 1-M
CREATE TABLE juice_boxes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  juice VARCHAR(25),
  student_id INTEGER,
  FOREIGN KEY (student_id) REFERENCES students(id)
);

INSERT INTO juice_boxes
(juice, student_id)
VALUES
('Apple',1),
('Grape',2),
('Pumpkin',3),
('Orange',4),
('Pumpkin',2),
('Apple',1);

-- M-M
CREATE TABLE classes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50)
);
CREATE TABLE student_class (
  student_id INTEGER,
  class_id INTEGER,
  FOREIGN KEY (student_id) REFERENCES students(id),
  FOREIGN KEY (class_id) REFERENCES classes(id)
);
INSERT INTO classes
(name)
VALUES
('Reading'),
('Math'),
('Art'),
('Science');
INSERT INTO student_class
(student_id, class_id)
VALUES
(1,1),(2,1),(3,1),(4,2),
(4,4),(4,1),(3,2),(1,2),
(2,4),(1,3),(4,3),(2,2),
(3,3);

SELECT id, name, language, dark_mode FROM students
JOIN preferences ON id = student_id;

SELECT students.id AS student_id, name, juice FROM students
JOIN juice_boxes ON student_id = students.id;

SELECT students.name, classes.name AS class_name FROM students
JOIN student_class ON students.id = student_class.student_id
JOIN classes ON classes.id = student_class.class_id;