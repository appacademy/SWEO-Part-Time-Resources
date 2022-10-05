# SQL basics
The commands below are in no way static and can be modified to fit your needs.

## Creating a table
```
CREATE TABLE «table name» (
  «column name» «data type» «constraints»,
  «column name» «data type» «constraints»,
  ...
  «column name» «data type» «constraints»
);
```

## Dropping a table
Keep in mind that deleting a table erases all data inserted into the table. This cannot be undone.
```
DROP TABLE «table name»;
```

## Inserting data
```
INSERT INTO table_name
VALUES
    (column1_value, column2_value, column3_value);
```
The columns must match the columns from when the table was created

## Selecting data
To select all rows and columns from a table:
```
SELECT * FROM «table name»;
```
To select specific columns from a table:
```
SELECT «column name», «column name» FROM «table name»;
```
To select specific rows from a table using a where statement:
```
SELECT * FROM «table name»
    WHERE «column name» = «value»;
```

## Deleting data
```
DELETE FROM «table name»
    WHERE «column name» = «value»
```

## Updating data
```
UPDATE «table name»
SET «column name»
WHERE «column name» = «value» AND «column name» = «value»
```