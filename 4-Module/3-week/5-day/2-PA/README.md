# Sequelize-2 Practice Assessment

**Note:** To read this in a rendered view, open your VS Code Command Palette
(using Control+Shift+P on Windows, Command+Shift+P on macOS) and choose
"Markdown: Open Preview" or "Markdown: Open Preview to Side".

In this assessment, you are asked to add Sequelize onto an existing Express
application. You will be asked to:

* Create a Sequelize seeder that allows you to seed the `Superheros` table

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

Run `npm test` to run the all the test specs at any given time.

Create a **.env** file at root-level of your project and copy the contents of
the **.env.example** file into the newly created **.env** file.

## Instructions

Take a look at all the files in the **db/models** and **db/migrations** folders.

Use the information in those files to add seed data in the
**db/seeders/20220413205503-valid-superheros.js** file. This file has a
`validSuperheros` array. Each object in the array should be valid data for a
creating a single `Superhero` when the seeder file is committed. Here's an
example of how the data should be formatted for books instead of superheros:

```js
// example of valid data formatting:
const validBooks = [
  // first book seed data:
  {
    title: 'Pride and Prejudice', // title attribute
    year: 1813,
    genre: 'ROMANCE',
    author: 'Jane Austen',
  }
];
```

Fill out the `validSuperheros` array so that the seeder file will successfully
seed **at least** `5` valid superheros. Use the information in the migration and
model files to guide you on determining the attributes and valid attribute
values for a superhero.

**Note**:  You do not need to use real superhero data as values! The data values
just need to pass the constraints and validations in the migration and model
files.

Run `npm test` to make sure you pass all the tests.

Feel free to make edits to the migration and model files. All edits you make to
the migration and model files will be reset when you submit your project. So,
make sure the test specs still pass even after those files are reset.

You can reset your edits to the migration and model files by running the
following command:

```bash
npm run reset-files
```

## Submission

1. Delete the **node_modules** directory from your project
2. Zip your project
3. Submit the zip folder