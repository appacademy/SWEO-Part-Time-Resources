PRAGMA foreign_keys = ON;
DROP TABLE IF EXISTS Authors;
DROP TABLE IF EXISTS Books;

DROP TABLE IF EXISTS Students;
DROP TABLE IF EXISTS StudentCourses;
DROP TABLE IF EXISTS Courses;

-- DROP TABLE IF EXISTS Books;
-- DROP TABLE IF EXISTS Authors;

-- DROP TABLE IF EXISTS StudentCourses;
-- DROP TABLE IF EXISTS Students;
-- DROP TABLE IF EXISTS Courses;


CREATE TABLE Authors (
    author_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Books (
    book_id INT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    author_id INT,
    FOREIGN KEY (author_id) REFERENCES Authors(author_id) ON DELETE CASCADE
);


CREATE TABLE Students (
    student_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE Courses (
    course_id INT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

CREATE TABLE StudentCourses (
    student_id INT,
    course_id INT,
    PRIMARY KEY (student_id, course_id),
    FOREIGN KEY (student_id) REFERENCES Students(student_id) ON DELETE CASCADE,
    FOREIGN KEY (course_id) REFERENCES Courses(course_id) ON DELETE CASCADE
);

-- SELECT * FROM StudentCourses
-- JOIN Courses ON StudentCourses.course_id = Courses.course_id
-- JOIN Students ON StudentCourses.student_id = Students.student_id;

SELECT Students.name as student_name, Courses.name as course_name FROM StudentCourses
JOIN Courses ON StudentCourses.course_id = Courses.course_id
JOIN Students ON StudentCourses.student_id = Students.student_id;


-- SELECT Books.title AS book_title, Authors.name AS author_name
-- FROM Books
-- JOIN Authors ON Books.author_id = Authors.author_id
-- WHERE book_title LIKE 'A%';

-- SELECT Books.title AS book_title, Authors.name AS author_name
-- FROM Books
-- JOIN Authors ON Books.author_id = Authors.author_id
-- LIMIT 2 OFFSET 4;

-- SELECT Books.title AS book_title, Authors.name AS author_name
-- FROM Books
-- JOIN Authors ON Books.author_id = Authors.author_id
-- ORDER BY book_title DESC;

-- limit = 5
-- offset = (page - 1 * limit)
-- page = 1 -> offset = 0
-- page = 2 -> offset = 5
-- page = 3 -> offset = 10

INSERT INTO Authors (author_id, name)
VALUES (1, 'George R. R. Martin'),
       (2, 'J.K. Rowling'),
       (3, 'Stephen King'),
       (4, 'Isaac Asimov'),
       (5, 'Arthur C. Clarke');

INSERT INTO Books (book_id, title, author_id)
VALUES (1, 'A Game of Thrones', 1),
       (2, 'Harry Potter and the Philosopher''s Stone', 2),
       (3, 'The Shining', 3),
       (4, 'Foundation', 4),
       (5, '2001: A Space Odyssey', 5);


INSERT INTO Students (student_id, name)
VALUES (1, 'Alice'),
       (2, 'Bob'),
       (3, 'Charlie'),
       (4, 'Dave'),
       (5, 'Eve');

INSERT INTO Courses (course_id, name)
VALUES (1, 'Mathematics'),
       (2, 'Physics'),
       (3, 'Chemistry'),
       (4, 'Biology'),
       (5, 'Computer Science');

INSERT INTO StudentCourses (student_id, course_id)
VALUES (1, 1),
       (1, 2),
       (2, 2),
       (2, 3),
       (3, 3),
       (3, 4),
       (4, 4),
       (4, 5),
       (5, 5),
       (5, 1);


-- SELECT Books.title, Authors.name
-- FROM Books
-- JOIN Authors ON Books.author_id = Authors.author_id
-- ORDER BY title DESC;

-- -- page 1
-- SELECT Books.title, Authors.name
-- FROM Books
-- JOIN Authors ON Books.author_id = Authors.author_id
-- LIMIT 2 OFFSET 0;

-- -- page 2
-- SELECT Books.title, Authors.name
-- FROM Books
-- JOIN Authors ON Books.author_id = Authors.author_id
-- LIMIT 2 OFFSET 2;

-- -- page 3
-- SELECT Books.title, Authors.name
-- FROM Books
-- JOIN Authors ON Books.author_id = Authors.author_id
-- LIMIT 2 OFFSET 4;
-- WHERE title LIKE 'A%';


-- SELECT Students.name AS student_name, Courses.name AS course_name
-- FROM StudentCourses
-- JOIN Students ON StudentCourses.student_id = Students.student_id
-- JOIN Courses ON StudentCourses.course_id = Courses.course_id
-- WHERE student_name LIKE 'A%';


-- SELECT Students.name AS student_name, Courses.name AS course_name
-- FROM StudentCourses
-- JOIN Students ON StudentCourses.student_id = Students.student_id
-- JOIN Courses ON StudentCourses.course_id = Courses.course_id
-- WHERE Students.name LIKE 'A%';

-- SELECT Students.name AS student_name, Courses.name AS course_name
-- FROM StudentCourses
-- JOIN Students ON StudentCourses.student_id = Students.student_id
-- JOIN Courses ON StudentCourses.course_id = Courses.course_id
-- ORDER BY student_name DESC
-- LIMIT 2 OFFSET 2;
