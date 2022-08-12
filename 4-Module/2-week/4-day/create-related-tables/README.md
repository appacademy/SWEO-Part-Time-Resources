# Practice: Create Related Tables

In this practice, you will create tables having a one-to-many as well as a
many-to-many relationship.

## Getting Started

Download the starter. `cd` into the __sql-practice__ folder.

Run SQLite on a database called __practice.db__.

In this practice, you will be creating a one-to-many relationship between the
table for `bands` and the table for `musicians`. You will also be creating a
many-to-many relationship between the table for `musicians` and the table for
`instruments`.

You will work directly on the __music.sql__ file throughout this practice. Use
`.read music.sql` whenever the updated file needs to be reread.

## Step 1: One-to-Many

Add an attribute to the `musicians` table to be used as a foreign key for
`bands`. Be sure to define the attribute and assign it as a `FOREIGN KEY`.

> Try inserting a record into the `musicians` table before and after your
> additions. You should not be able to add a `musician` to a nonexistent `band`
> after you've set up your table relationship.

## Step 2: Many-to-Many

Create a join table to connect `musicians` with `instruments`. Create the
necessary attributes and `FOREIGN KEY`s to make this relationship work.

## Congratulations!

You are now able to create one-to-many and many-to-many relationships in SQL!