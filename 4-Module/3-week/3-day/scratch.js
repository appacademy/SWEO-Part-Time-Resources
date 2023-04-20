const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Server is Live');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

/*
ORM : Object Relational Mapping => Object Relational Mapper
  A technique that allows programmers to work with relational databases by using OOP
  Work with instances of an object that is directly mapped to rows in a database.
  Can use methods to perform SQL commands on our database.

Migrations
  A JS file that defines the specific changes to a database schema.
Models
  A representation of the data in our database
  - Class Name (book) => Table Name (books)
  - attributes (title, series, author) => column (title, series, author)
  - instance of model => row of the table
Seeds
  A piece of sample or test data
  Seed data is used to populate a test database or to make changes to data already present

  npx sequelize init
*/



