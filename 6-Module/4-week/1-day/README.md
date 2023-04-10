# SQLAlchemy

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

The final reading today and the 2 lecture videos showcase the newer syntax

-   This is the syntax you'll be using in your projects