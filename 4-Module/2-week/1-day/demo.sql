-- SQL : Structured Query Language
-- RDBMS : Relational DataBase Management System
-- Table is like a spreadsheet that contains your data
-- Schema is like the blueprints of the Table.

-- Contraints
/*
data type
  Numeric Data Types
    INTEGER : numbers without decimal points
    DECIMAL : floating-point numbers
      DECIMAL(X, Y) : X is the number of digits, Y the number of digits behind the decimal
      DECIMAL(4,2) : 12.34, 11.55, 01.10
    BIGINT : -9.2quint to 9.2quint (9,200,000,000,000,000,000);
  String Data Types
    VARCHAR : varchar(50),
    TEXT : stores 'unlimited' characters but is much slower than varchar
  Boolean Data Type
    BOOLEAN : true - 1, false - 0

NOT NULL : value cannot be null
DEFAULT : specifies the value if one is not provided
PRIMARY KEY : a unique identier on each entry
AUTOINCREMENT : causes the default value of the next value to be next in series
*/
.mode box
.headers on

DROP TABLE dogs;

CREATE TABLE dogs (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name VARCHAR(25) NOT NULL,
age INTEGER,
is_chipped BOOLEAN,
sex VARCHAR(6) NOT NULL,
breed VARCHAR(50)
);

INSERT INTO dogs
('name','age','is_chipped','sex','breed')
VALUES
('Bowser', 2, 1,'MALE', 'chihuaha'),
('Beau',10,1,'MALE','Mixed'),
('Yoshi', 10,1,'FEMALE','Mixed'),
('Butters',4,0,'ASEXUAL','Poodle'),
('Dino', 10, 0, 'FEMALE', 'Mixed'),
('Felix', 12, 1, 'MALE', 'Cat');