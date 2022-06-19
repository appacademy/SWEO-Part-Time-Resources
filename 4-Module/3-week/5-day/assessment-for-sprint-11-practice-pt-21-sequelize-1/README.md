# Sequelize-1 Practice Assessment

**Note:** To read this in a rendered view, open your VS Code Command Palette
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to add Sequelize onto an existing Express
application. You will be asked to:

* Create one or more Sequelize migration that allows you to create a
  `Airplanes` table
* Implement the appropriate database-level constraints to the `Airplanes` table
* Create a Sequelize model that allows you to create a `Airplane` model
* Implement the appropriate model-level validations to the `Airplane` model

Use the technologies you have used up to this point. They are all listed in
the **package.json** for your convenience.

* Express.js
* Sequelize
* Sequelize CLI
* SQLite3
* DotENV
* nodemon (for development purposes)

Do not add or remove any dependencies already listed in the **package.json**.

You **DO NOT** need to run `npx sequelize-cli init` to initialize Sequelize as
it is already done for you. The **.sequelizerc** file describes the Sequelize
configuration for this application.

## Getting started

Download the starter from the Download link at the bottom of this page.

Run `npm install` to install the dependencies listed in the last section.

Create a **.env** file at root-level of your project and copy the contents of
the **.env.example** file into the newly created **.env** file.

## Instructions

Your employer wants you to create a feature for your users to track the status
and data of airplanes. An airplane should have the following attributes:

* `flightNumber`
* `model` (type of airplane)
* `inService` (flag indicating if this airplane is operating or not)
* `homeBase` (airport code)
* `maxNumPassengers` (maximum number of passengers that the airplane can hold)
* `currentNumPassengers` (current number of passengers on the airplane)
* `cruisingAltitudeFt` (altitude in feet)
* `maxRangeKm` (range in kilometers)
* `firstFlightDate` (date of the first official flight with passengers)

Your job is to create a database schema as well as a Sequelize model for this
feature.

### Valid/Invalid Data

Here is some **important** information you should know about how the data in the
schema should be represented:

* **no two airplanes** should have the same `flightNumber`
* `currentNumPassengers` cannot be greater than `maxNumPassengers`
* `currentNumPassengers` should be `null` if an airplane is `inService`
* the combination of `homeBase` and `cruisingAltitudeFt` **cannot be repeated**
* the table name should be `Airplanes`
* the model name should be `Airplane`

Take a look at the **test/data/airplane-values.js** file.

This file holds examples for both valid and invalid example values for all the
attributes.

### Create Migration(s) and a Model

Based on the example attribute values for every column in the
**test/data/airplane-values.js** file, you should be able to determine the
database-level constraints and model-level validations necessary to represent
this data well.

You should create:

* one or more migration files with the proper database-level constraints
* a model file with the proper model-level validations

To check your constraints and validations, run the tests:

```bash
npm test
```

## Submission

1. Delete the **node_modules** directory from your project
2. Zip your project
3. Submit the zip folder