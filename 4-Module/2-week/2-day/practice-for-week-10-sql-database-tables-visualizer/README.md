# Exercise: SQL Database Tables Visualizer

In this exercise, you will use an online tool to create a diagram for a small
set of database tables.

## Getting started

Before you begin, go to [dbdiagram.io]. Click "Create a diagram" (or the
equivalent button to open the application). Find the "Sign in" button (upper
right), and login using your *GitHub* account. (If this is your first time using
this tool, you will need to create an account.)

Next, click the "? Help" button in the upper right of the diagram application.

Read through the instructions to learn how to "Specify a table".

## Make your first diagram

Type code into the left panel to create a "colors" table with two columns

* `id` - integer and the primary key
* `name` - text

Next, create the table "music" containing

* `id` - integer and the primary key
* `name` - text
* `type_of_work` - text (e.g. song, symphony, opera, etc.)
* `instrumental` - boolean
* `composition_year` - integer
* `composer` - text
* `sample` - blob

Finally, drag the tables around in the diagram area to make them easy to read
and understand the relationship.

## Check your work

The result should look something like this:

![result]

[dbdiagram.io]: https://dbdiagram.io/
[result]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/module-04/week-10/practices/sql-diagram-practice-colors-music.png