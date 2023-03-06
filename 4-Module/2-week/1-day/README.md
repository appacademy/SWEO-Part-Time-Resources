# M4-W2-D1

## Assessment

Time: 1h

- MC: 17 points
- Total: 17 points
- Passing: 13 points

---

## Intro to Databases

- Reading
- Quiz

---

## Discussion: Intro to Databases

### What is a database?

A database serves as a persistent container for data. For web applications this
means that the your data doesn't disapear when the server restarts.

---

### Relational Databases

This type of database is defined by strict rules controlling how different data
relates to one another. Data is stored in tables which have rows and columns.

users table

| id  | first_name | last_name | email          | hashed_password |
| :-: | :--------- | :-------- | :------------- | :-------------- |
|  1  | William    | Vincent   | w@vincent.com  | 1234sdfg        |
|  2  | Edward     | Felipe    | e@felipe.com   | 3456dfgh        |
|  3  | Kristen    | Chauncey  | k@chauncey.com | 4567hjkl        |

posts table

| id  | user_id | content                      |
| :-: | :-----: | :--------------------------- |
|  1  |    1    | Hello World                  |
|  2  |    1    | Heya                         |
|  3  |    1    | test                         |
|  4  |    2    | test2                        |
|  5  |    1    | Haskell is cool              |
|  6  |    3    | functional programming rules |
|  7  |    2    | SQL                          |
|  8  |    1    | I <3 Linux                   |

---

### SQL, RDBMS, SQLite

_Structured Query Language (SQL):_ A declarative programming language for
interacting with databses. SQL is used across relational databases, so it will
be useful across many different database management systems.

_Relational Database Management System (RDBMS):_ A software application for connecting
to, modifying, and retrieving data from a relational database.

_SQLite:_ An open-source relational database management system. SQLite is
different than most RDBMS applications in that most RDBMS rely on a
client-server relationship whereas SQLite manages its data via a local file.
SQLite is super easy to set up and is very popular due to its simplicity.
SQLite should be used only in testing and development and never in production,
due to the lack of security due to file access being the only authorization
needed for a database change.

---

## CREATE/DROP, INSERT, SELECT, DELETE, UPDATE Practices

---

## Basic SQL Demo

---
