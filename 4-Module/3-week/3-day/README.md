# Intro to Sequelize Objectives
- Below is a complete list of the introductory Sequelize learning objectives for this lesson. When you complete this lesson, you should be able to perform each of the following objectives. These objectives capture how you may be evaluated on the assessment for this lesson.

    - ✅ Justify the use of an ORM as a part of a data strategy
    - ✅ Describe a model and how it is used to interact with a database table in an object-oriented manner
    - ✅ Describe how migrations create or update tables in a database
    - ✅ Compare and contrast a migration and a model
    - ✅ Explain how migrations are used to update the features and properties of a database table that is in production
    - ✅ Customize Sequelize folder structure configuration using a .sequelizerc file
    - ✅ Use Sequelize command-line tool to perform common operations
    - ✅ Compare and contrast the sequelize and sequelize-cli node modules
    - ✅ Connect to a database using environment variables
    - ✅ Compare and contrast the naming conventions for tables and models in SQL and Sequelize
    -  Describe the difference between database-level constraints and model-level validations
    - Identify when to use a database-level constraint and/or a model-level validation to restrict column values
    - Construct migrations to create a table and apply database-level constraints
    - Construct a model for a table and apply model-level validations
    - Construct a seeder file to seed a table in the database
    - Commit and roll back migrations and seeders
    - Evaluate the history of migrations or seeders in their respective tables in the database
    - Construct different kinds of migrations using the Sequelize documentation as a reference

## What is an ORM?
- Object Relational Mapping (ORM) is a technique that allows programmers to work with data in a relational database (such as a SQL database) using an object-oriented approach. Using an ORM, you can work with instances of an object in your code which are mapped directly to rows of data in the database table. Using an ORM approach, you can manipulate the instance of the object in your code (using a language such as JavaScript), and then call methods on the instance or the class itself which will trigger SQL commands to manipulate the data in the database. Using this approach, you are able to complete all of the CRUD actions on your data in the database without directly writing any SQL.


# Main components of a Sequelize Database
#### [Sequelize Documentation](https://sequelize.org/docs/v6/)

<br/>

## Models
- Sequelize models represent the tables in your database in an object-oriented way. Each Sequelize model is a class in JavaScript that provides an intuitive interface for manipulating and reading data in the table that it models.

- The models class represents the entire table that it models, and an instance of that model class can represent a single record in the table. The model tells Sequelize information about the entity it represents such as the table name in the database and the different data types that it consists of.
#### [Models Reading](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/what-are-sequelize-models-)

### Models NPX command (also creates migration file)
```
npx sequelize model:generate --name User --attributes name:string
```

<br/>

## Migrations
- A migration is a JavaScript file that includes code to change the database schema. It includes code for an up function as well as a down function. The up code defines the specific change that should be made to the existing database schema (for example, adding a new column), while the down function includes code that will undo the change in the up function.

- The code defined in the up function could define a schema change as significant as creating a new table, or as minor as just adding a column or updating a data type or constraint on an existing column. Since you can accomplish these tasks with raw SQL commands, you may wonder why it is necessary to use migrations to accomplish the same task.

#### [Migrations Reading](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/why-migrations-are-important)
### Migrations NPX command (you should not need to use this on creation of models/migrations)
```
npx sequelize migration:generate --name create-color
```

<br/>

## Seeders
- Seeder files are files that contain instructions on how to seed the database. In short, to seed a database means to insert an initial set of data to populate the database with something.

- When setting up your database, seeding happens after all the models and initial migrations are created and performed, as it wouldn't make sense to insert data without having the database set up.
#### [Seeders Reading](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/what-are-sequelize-seeders-)
### Seeders NPX command
```
npx sequelize seed:generate --name <name of seed>
```

<br/>

## Refer to HelpSequilize Folder for more resources

<br/>

# Short Solo Practice 10 min [Sequelize Seeders](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/practice--sequelize-seeders)
- Short practice Q/A
# Short Solo Practice 10 min [Validations and Constraints](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/practice--validations-and-constraints)
- Short practice Q/A
# Short Solo Practice 30 min [Research Add/Remove/Modify](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/practice--research-add-remove-modify-columns-migrations)
- Short practice Q/A
# Short Solo Practice 20 min [Sequelize SELECT Queries](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/practice--sequelize-select-queries)
#### [READING](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/select-queries-in-sequelize)
- Short practice Q/A
# Short Solo Practice 20 min [Sequelize INSERT Data](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/practice--sequelize-insert-data)
#### [READING](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/insert-data-in-sequelize)
- Short practice Q/A
# Short Solo Practice 20 min [Sequelize UPDATE and DELETE](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/practice--sequelize-update-and-delete-singular-records)
#### [UPDATE READING](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/update-data-in-sequelize)
#### [DELETE READING](https://open.appacademy.io/learn/js-py---pt-aug-2022-online/week-21---express-and-sequelize/delete-data-in-sequelize)
- Short practice Q/A


# EOD
