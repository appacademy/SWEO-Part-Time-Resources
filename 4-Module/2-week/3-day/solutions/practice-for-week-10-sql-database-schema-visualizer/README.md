# Practice: SQL Relational Database Schema Visualizer

In this practice, you will use an online tool to create a diagram for a simple
relational database.

## Getting started

Before you begin, go to [dbdiagram.io]. Click "Create a diagram" (or the
equivalent button to open the application). Find the "Sign in" button (upper
right), and login using your *GitHub* account. (If this is your first time using
this tool, you will need to create an account.)

Next, click the "? Help" button in the upper right of the diagram application.

Read through the instructions to learn how to

* Specify a table
* Define a relationship

## Make your first diagram

Type code into the left panel to create a "kids" table with three fields

* `id` - number and the primary key
* `name` - string
* `age` - number

Next, create the table "toys" containing

* `id` - number and the primary key
* `name` - string
* `kid_id` - number (so it matches the `id` in the `kids` table)

Then, set up a relationship reference so the `kid_id` field in the `toys`
table connects to the `id` field in the `kids` table.

Finally, drag the tables around in the diagram area to make them easy to read
and understand the relationship.

## Check your work

The result should look something like this:

![result]

[dbdiagram.io]: https://dbdiagram.io/
[result]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/module-04/week-10/practices/sql-diagram-practice-kids-toys.png