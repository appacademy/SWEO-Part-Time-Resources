# M4W1D1

## RDMS

- program that allows you to create, update, and administer a relational
  database
- can contain any number of databases
- ex: PostgreSQL (what we will be using)

## Database

- collection of interrelated tables with relevant data for a given application
  or service
- ex: twitter_lite_dev

## Table

- Made up of a specific set of columns which specify the type of data, and rows
  which hold the actual data
- ex: users

## helpful psql commands

- \l - list out all databases
- \du - list out all users
- \dt -list tables for current database
- \d _tableName -_ list table columns

## Create User

1. Type this in your terminal: `psql postgres`

2. Then type in the PSQL shell:

```sql
CREATE USER app_academy
WITH
PASSWORD 'strong_password'
SUPERUSER;

```

- In step 1 you don't type something after psql then it will try to go into a
  database with the same name as your user. if there isn't a database is
  postgres that has the same name as your user then you will receive an error.
- When you are a super user you can do whatever you want! YOU HAVE THE POWER
- You already have or should create a super user with the same name as your
  computer's username. This will allow you to login into your psql shell with
  just the command `psql`

## drop user

```sql
drop user app_academy;
```

## create database

```sql
create database app_academy_test;
```

## create database with an owner

- First create a new user

- now create a new database with an owner

```sql
create database banana with owner banana
```

- If you don't put an owner then you then it will default to whoever you're
  currently signed in as

## creating a table

```sql
create table people (
 id serial primary key,
 first_name varchar(30),
 last_name varchar(30),
 age smallint
);
```

## creating a table with a foreign key

```sql
create table pets (
 id serial primary key,
 name varchar(255),
 age smallint,
 person_id integer references people (id)
);
```
