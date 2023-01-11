# Intro to SQL Objectives
## Below is a complete list of the introductory SQL learning objectives for this lesson. When you complete this lesson, you should be able to perform each of the following objectives. These objectives capture how you may be evaluated on the assessment for this lesson.

- Define a database and explain the uses for a database
- Compare and contrast SQL vs NoSQL
- Describe the unusual power and danger of SQL commands
- Use constraints to shape the rules for data in the database
- Manipulate a database with SQL commands in a sqlite3 shell
- Create a table
- Insert data into a table
- Select all the entries from a single table
- Select a single or multiple entries from a table using the WHERE clause
- Delete a single or multiple entries from a table
- Update a single or multiple entries from a table
- Destroy a table
- Execute SQL files in a sqlite3 shell

## What are aggregate functions in SQL?
Simply put, aggregate functions allow developers to run basic mathematical calculations within a query. The most common options include
## Helpful Aggregate functions
- COUNT - The number of entries
- MIN - The lowest value
- MAX - The highest value
- SUM or TOTAL - Adds up the values
- AVG - The average of the values
# [Aggregate Reading](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-20---sql/sql-aggregates)

## Helpful sqlite3 Commands
- sqlite3
    - will open your sqlite shell
- sqlite3 filename.db
    - will open your db under that file name, or create one if it does not exist
- .open filename
    - when in the sqlite3 terminal this will connect you to your existing database at the filename. if one is not there, it will create one
- .read filename
    - using .read read followed by file name while in your sqlite3 shell will run the sql code from that file
- .tables
    - will show you all the tables inside of your database
- .schema
    - will show you your connected databse schema

## Helpful SQL statements

### CREATE a table
```
CREATE TABLE table_name (
column_name DATATYPE CONSTRAINTS/OPTIONS,
column_name DATATYPE CONSTRAINTS/OPTIONS,
column_name DATATYPE CONSTRAINTS/OPTIONS,
);
```

### DROP A TABLE
```
DROP TABLE IF EXISTS table_name;
```

### INSERT INTO a table/create an instance(row) of this table
```
INSERT INTO table_name (column_name1, column_name2, column_name3)
VALUES
("INPUT for column 1", "INPUT for column 2", INPUT for column 3");
```

### SELECT all columns for each instance(row) from a table
```
SELECT * FROM table_name;
```

### SELECT WHERE all columns for each instance(row) from a table where a column matches your input
```
SELECT * FROM table_name WHERE id = 1;
```

### UPDATE WHERE update an instance(row) where a column match your input
```
UPDATE table_name
SET column_ = 'What you want it to change to'
WHERE column_name = 'The columns value you want to match in order to update that instance(row)';
```
### DELETE all instances(rows) on a table
```
DELETE * FROM table_name;
```

### DELETE WHERE delete an instance(row) from a table where a column's value matches your input
```
DELETE * FROM table_name WHERE column_name = 'The columns value youre trying to match';
```


###
- ### Common Data Types below
        - BOOLEAN	Equal to BOOLEAN value
        - CHAR(size)	A FIXED length string (can contain letters, numbers, and special characters). The size parameter specifies the column length in characters - can be from 0 to 255. Default is 1
        - VARCHAR(size)	A VARIABLE length string (can contain letters, numbers, and special characters). The size parameter specifies the maximum string length in characters - can be from 0 to 65535
        - TEXT(size)	Holds a string with a maximum length of 65,535 bytes
        - SMALLINT(size)	A small integer. Signed range is from -32768 to 32767. Unsigned range is from 0 to 65535. The size parameter specifies the maximum display width (which is 255)
        - BIGINT(size)	A large integer. Signed range is from -9223372036854775808 to 9223372036854775807. Unsigned range is from 0 to 18446744073709551615. The size parameter specifies the maximum display width (which is 255)
        - FLOAT(size, d)	A floating point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter. This syntax is deprecated in MySQL 8.0.17, and it will be removed in future MySQL versions
        - DECIMAL(size, d)	An exact fixed-point number. The total number of digits is specified in size. The number of digits after the decimal point is specified in the d parameter. The maximum number for size is 65. The maximum number for d is 30. The default value for size is 10. The default value for d is 0.
        - DATE	A date. Format: YYYY-MM-DD. The supported range is from '1000-01-01' to '9999-12-31'
        - DATETIME(fsp)	A date and time combination. Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1000-01-01 00:00:00' to '9999-12-31 23:59:59'. Adding DEFAULT and ON UPDATE in the column definition to get automatic initialization and updating to the current date and time
        - TIMESTAMP(fsp)	A timestamp. TIMESTAMP values are stored as the number of seconds since the Unix epoch ('1970-01-01 00:00:00' UTC). Format: YYYY-MM-DD hh:mm:ss. The supported range is from '1970-01-01 00:00:01' UTC to '2038-01-09 03:14:07' UTC. Automatic initialization and updating to the current date and time can be specified using DEFAULT CURRENT_TIMESTAMP and ON UPDATE CURRENT_TIMESTAMP in the column definition
        - TIME(fsp)	A time. Format: hh:mm:ss. The supported range is from '-838:59:59' to '838:59:59'
        - YEAR	A year in four-digit format. Values allowed in four-digit format: 1901 to 2155, and 0000.
- ### Common SQL Constraints below
        - PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
        - AUTOINCREMENT - Will insure you do not have to include and id on instance creationg, and will autoincrement the id on each instance that is created
        -NOT NULL - Ensures that a column cannot have a NULL value
        - UNIQUE - Ensures that all values in a column are different
        - FOREIGN KEY - Prevents actions that would destroy links between tables
        - CHECK - Ensures that the values in a column satisfies a specific condition
        - DEFAULT - Sets a default value for a column if no value is specified
        - CREATE INDEX - Used to create and retrieve data from the database very quickly

# Short Solo Practice 1  5 min [SQL Aggregates](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-20---sql/practice--sql-aggregates)

# Short Solo Practice 25 min [SQL Subqueries](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-20---sql/practice--sql-subqueries)
- Short Practice Q/A 10 min

# Long Paired Practice: Rest of Class [Intermediate SQL](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-20---sql/long-practice--intermediate-sql)

# EOD
