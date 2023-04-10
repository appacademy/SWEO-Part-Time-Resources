-- SQL : Structured Query Language
-- RDBMS : Relational DataBase Management System
-- Table is like a spreadsheet that contains your data
-- Schema is the blueprint of the spreadsheet

-- CONSTRAINTS
/*
  data types
  Numeric Data Types
    INTEGER - numbers without decimal points
    DECIMAL - floating-point numbers
      DECIMAL(X,Y) : X is the number of spaces, Y is how many are behind a decimal point (DECIMAL(4,2) => 22.40)
    BIGINT - store numbers between -9.2quint : 9.2quint
  String Data Types
    VARCHAR - VARCHAR(50)
    TEXT - stores 'unlimited' character but is much slower
  Booleans
    BOOLEAN : true - 1, false - 0;

    NOT NULL - value cannot be NULL
    DEFAULT - value if one is not specified
    PRIMARY KEY - unique identifier on each entry
    AUTOINCREMENT - causes the default value of the next value to be 
      next in series
*/
DROP TABLE dogs;

-- CREATE OUR dogs TABLE
CREATE TABLE dogs (
  id INTEGER PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  age INTEGER,
  isChipped BOOLEAN DEFAULT false,
  sex VARCHAR(6) NOT NULL,
  breed VARCHAR(50)
);

-- INSERT SOME VALUES INTO THE dogs TABLE
INSERT INTO dogs
VALUES
-- (id, name, age, isChipped, sex, breed)
(1,'Gojo',2,TRUE,'male','Corgi'),
(2,'Hank',3,FALSE,'female', 'NULL'),
(3,'Poutine',1,TRUE,'female','Doberman'),
(4,'Peanuts',1,TRUE,'male', 'Pitbull'),
(5,'Bowser',13,TRUE,'male','Bulldog');

UPDATE dogs
SET breed = 'Mixed'
WHERE breed = 'NULL';

DELETE FROM dogs
WHERE id = 2;
