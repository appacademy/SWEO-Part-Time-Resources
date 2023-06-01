-- Types of Relationships in SQL

-- 1. one-to-one: each orchard can only have one kind of tree and each kind of tree can only be assigned to one orchard 
-- (can only be done with some really funky commands, so don't worry about it even relationships that you would classify as one-to-one, you will do like a one-to-many)

-- 2. one-to-many: each orchard can have only one kind of tree, but each kind of tree can belong to mulitple orchards

-- 3. many-to-many: each orchard can have mulitple kinds of trees and each kind of tree can belong to mulitple orchards

DROP TABLE IF EXISTS trees;
DROP TABLE IF EXISTS orchards;


-- One-to-Many
CREATE TABLE trees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(40) NOT NULL UNIQUE,
    height_ft INTEGER
);

CREATE TABLE orchards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    location VARCHAR(100) NOT NULL,
    tree_id INTEGER,
    FOREIGN KEY (tree_id) REFERENCES trees(id)
);


DROP TABLE IF EXISTS trees;
DROP TABLE IF EXISTS orchards;


-- Many-to-Many
CREATE TABLE trees (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(40) NOT NULL UNIQUE,
    height_ft INTEGER
);

CREATE TABLE orchards (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(100) NOT NULL UNIQUE,
    location VARCHAR(100) NOT NULL
);

CREATE TABLE orchard_tree {
    tree_id INTEGER NOT NULL,
    orchard_id INTEGER NOT NULL,
    FOREIGN KEY (tree_id) REFERENCES trees(id)
    FOREIGN KEY (orchard_id) REFERENCES orchards(id)
}



SELECT * FROM orchards WHERE id = 2;
-- syntax for including related data we'll learn later don't worry for now

{
    id: 2,
    name: "Roger's",
    location: "Maryland",
    tree_id = 3,
    trees: {
        id: 3,
        name: "Plum",
        height_ft: 30
    }
}





-- Database Normalization Rules

-- First normal form:
-- Eliminate repeating groups in individual tables.
-- Create a separate table for each set of related data.
-- Identify each set of related data with a primary key.


-- Second normal form
-- Create separate tables for sets of values that apply to multiple records.
-- Relate these tables with a foreign key.


-- Third normal form
-- Eliminate fields that do not depend on the key.

