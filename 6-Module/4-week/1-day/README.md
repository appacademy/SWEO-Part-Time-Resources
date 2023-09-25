# SQLAlchemy

## What is Flask-SQLAlchemy?

- Flask-SQLAlchemy is a Flask extension that integrates SQLAlchemy into Flask applications. It simplifies the use of SQLAlchemy by providing useful defaults and helpers.

## How is SQLAlchemy different from raw SQL?

- SQLAlchemy provides a high-level, Pythonic interface to SQL databases, as opposed to writing raw SQL queries. This allows developers to benefit from the abstraction of Python classes while still having the full power and flexibility of SQL if needed.

## What is an ORM (Object-Relational Mapping)?

- ORM is a programming technique for converting data between incompatible type systems using object-oriented programming languages. SQLAlchemy is an example of an ORM system, which maps Python classes to tables in SQL databases.



## DB Setup

The readings often reference setting up your database through PostgreSQL

Since we're using SQLite3, the setup is slightly different, mostly similar

If you ever see instructions that look like this

```zsh
create user user_name with password 'some_password';
create database db_project_name with owner user_name;
```

You can safely skip that step

-   skip JUST that step, don't skip anything else!

In our `.env` file, we set our db url to be our local sqlite file

-   The filename should match the filename in your application!

```zsh
DATABASE_URL=sqlite:///dev.db
```

## Using SQLAlchemy

Don't **_completely_** follow the instructions from the first few readings

-   We start off showing you older, more explicit syntax

The final reading today (Using SQLAlchemy with Flask) and the 2 lecture videos showcase the newer syntax

-   This is the syntax you'll be using in your projects
