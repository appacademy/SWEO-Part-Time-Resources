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


# Live Lecture 40 min

## What is a Database, and Why?
- Databases are an essential part of many Web applications. There are lots of things you could store in a database and use in a Web app, including user information, product information, review information, and more. Learning how to create databases and retrieve information stored in a database to display in a Web app is a foundational development skill.

- Previously, all data that your server works was declared right in the server and would be reset every time you restarted your server. The data was only alive as long as the server was running. As you can imagine, this would not hold up in any sort of production environment where data needs to persist. If your server went down for your application, all your data changes would be lost!

# What is SQL?
- SQL (pronounced "sequel" or "s-q-l") stands for "Structured Query Language". It is not a programming language like JavaScript. JavaScript, as you well know, has control flow, with for loops and if statements. Most SQL that you write doesn't have all that. Instead, it is a declarative programming language. You tell the database what computation you want it to do, and it does it. In that way, SQL is more like CSS than JavaScript.
### [Practice SQL](https://pg-sql.com/)

# RDBMS: [SQLite3](https://www.sqlite.org/index.html)
- The RDBMS is a software application that you run that your programs can connect to that they can store, modify, and retrieve data from a relational database. The RDBMS that you will use is called SQLite3, or just simply SQLite. It is an "open-source" RDBMS which means that you can go read the source code for it, copy it, modify it, and make your own specialized version of an RDBMS. A single running RDBMS can have hundreds of databases in it that it manages.
- Commonly refferred to as our Database.
- You will notice that within a/A curriculum, SQLite3 is only ever used for our development environment and never our production.
- Another RDBMS we will interact but not necessarily learn is PostgreSQL.

# Live Lecture => Project
## Create Table
- SQLite Datatypes
    - INTEGER - A number without decimals
    - REAL - A number with decimals (floating-point)
    - TEXT - A string
    - BLOB - Data stored exactly as it was input (good for images, really long text, and other big "blobs" of stuff)
    - NUMERIC - Special case for numbers which auto-converts between the other types, depending on the value


# Short Solo Practice 10 min [SQLite3 CLI](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-20---sql/exercise--sqlite3-cli)

# Short Solo Practice 15 min [CREATE/DROP TABLES](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-20---sql/practice--create-drop-tables)

# Short Solo Practice 10 min [INSERT Data](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-20---sql/practice--insert-data)

- Short Practice's Q&A 15 min

# Short Solo Practice 10 min [SELECT Data](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-20---sql/practice--select-data)

# Short Solo Practice 10 min [DELETE Data](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-20---sql/practice--delete-data)

# Short Solo Practice 10 min [UPDATE Data](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-20---sql/practice--update-data)

- Short Practice's Q&A 15 min

# EOD/Office Hours
