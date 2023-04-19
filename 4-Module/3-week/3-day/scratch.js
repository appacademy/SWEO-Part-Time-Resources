const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Server is Live');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

/*
ORM : Object Relational Mapping or Object Relation Mapper
  A technique that allows programmers to work with data in a relational database by using an object-oriented approach.
  We can manipulate instances of an object in our code that directly correlate to the rows of our database.
  We can use methods to trigger specific SQL commands on our database.

Migrations
  A JS file in Sequelize that defines the database at specific stage.
  - A new project, the migration would create the database
  - An existing project, the migration would track changes to the database
Models
  A representation of data in a table
  - Class Name (User) => Table Name (Users)
  - Attributes (firstName, Last) => Columns (first_name, last_name)
  - Instance of Class => Row of Table
Seeds
  A piece of sample or test data
  Data used to populate a test database

1. CREATE .sequelizerc
2. `npx sequelize init`
*/

