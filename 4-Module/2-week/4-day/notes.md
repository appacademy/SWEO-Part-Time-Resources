# Joining Tables

## Creating related tables
Creating a related table requires the use of a foreign key.
To define a column with a foreign key you can use the following syntax:

```
«foreign id column» «data type» FOREIGN KEY
```

OR

```
«foreign id column» «data type» FOREIGN KEY REFERENCES «other table»(«other column»)
```

In a create table it would look something like:
```
CREATE TABLE car (
    id INTEGER PRIMARY KEY,
    model VARCHAR NOT NULL,
    year INTEGER NOT NULL,
    owner_id INTERGER FOREIGN KEY NOT NULL
);
```

OR

```
CREATE TABLE car (
    id INTEGER PRIMARY KEY,
    model VARCHAR NOT NULL,
    year INTEGER NOT NULL,
    owner_id INTERGER FOREIGN KEY REFERENCES drivers(id) NOT NULL
);
```


## Delete cascade
Delete cascade is an attribute put on a foreign key column that allows the child records to be deleted when the parents records are. 
```
«foreign id column» «data type» FOREIGN KEY ON DELETE CASCADE
```

## Query using join
You can join tables together when querying after creating a foreign key. A select using join follows the syntax:
```
SELECT «columns» FROM «table 1»
    JOIN «table 2» ON («column-table 2» = «column-table 2»)
```
Note: By default join uses an inner join.

## Types of join
The most commonly used join operations are:

**Inner Join** -- Returns a result set containing rows in the left table that match rows in the right table.

**Left Join** -- Returns a result set containing all rows from the left table with the matching rows from the right table. If there is no match, the right side will have null values.
**Right Join** -- Returns a result set containing all rows from the right table with matching rows from the left table. If there is no match, the left side will have null values.
**Full Outer Join** -- Returns a result set containing all rows from both the left and right tables, with the matching rows from both sides where available. If there is no match, the missing side contains null values.
