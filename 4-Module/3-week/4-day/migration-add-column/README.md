# Practice: Database-Level Constraints and Model-Level Validations

In this short practice, you will be exploring the differences between 
database-level constraints and model-level validations in **Sequelize**. You 
will also be writing some intermediate and custom validations.

## Getting started

Download starter. 

Execute the __setup-commands.sh__ script from the root directory of this
practice. View the contents of the script to see the commands that are executed,
and view the results in the terminal to confirm that setup was successful.

```shell
sh setup-commands.sh
```

The Express endpoints for this practice will not yield results from a database 
but are included in order to demonstrate how to initialize Sequelize with an 
existing server. This can be seen from the plaintext responses given by these 
endpoints.

In future practices you will utilize routes in order to interact with a 
connected database.

## Motivation

In this practice, you will be modifying a migration and model for the `Colors` 
table. Ultimately, you would like the `name` attribute of `Colors` to obey the 
following rules:

  * No `NULL` values should be allowed
  * No duplicate values should be allowed
  * The length of `name` should be between 2 and 20 characters
  * The `name` must not end in the character `y`

Some of these restrictions will be appropriately implemented using 
database-level constraints, while some will utilize model-level validations. By 
the end of this exercise you should be more comfortable with determining when it 
is appropriate to use each as well as how these constraints and validations 
affect your interaction with the **Sequelize** model and the database.


## Step 1: Test the migration without changes

Use `sequelize-cli` to run the migration as is, creating the `Colors` table. 
You'll notice that the migration currently only indicates a `type` for the 
`name` column, with no other constraints.

Use `sqlite3` to make the following insertion statements.

```sql
-- First statement
INSERT INTO Colors (name) VALUES ('red');
-- Second statement
INSERT INTO Colors (name) VALUES ('red');
-- Third statement
INSERT INTO Colors (name) VALUES (NULL);
-- Fourth statement
INSERT INTO Colors (name) VALUES ('a');
-- Fifth statement
INSERT INTO Colors (name) VALUES ('orangey');
```

These statements should all execute without error. Selecting for all entries on 
the `Colors` table should yield all five values as results.

Think about the requirements that were laid out above. Which of these can be
implemented on the database-level? How will these constraints affect the results 
of the insertion statements above?


## Step 2: Modify the migration file

Use `sequelize-cli` to undo the migration.

The first two requirements that were described above can be accomplished with 
database-level constraints. Add constraints to `name` in the migration file that 
disallow `NULL` values and that require uniqueness.

Rerun the migration with `sequelize-cli`. Try to do the same insertions with 
`sqlite3` as in the previous step. The second and third insertion statements 
should result in an error due to the database-level constraints you created. The 
fourth and fifth insertion statements should still be accepted by the database.


## Step 3: Test the model without changes

In the following step you will be writing validations on the **Sequelize** 
`Color` model.

In the __models/color.js__ file, notice the current validations on the `Color` 
model's `name` attribute. It currently checks that the data is a `string` and it 
disallows `NULL` values. 

In the __test.js__ file, five test cases are created. When run, the file will 
attempt to create instances of `Color` that have names of: `NULL`, `[]`, `a`, 
`orangey`, and `orange`. Run these tests with `npm test`. The test file will 
create its own test database, run the migration, and delete the database 
afterwards.

With the current validations, the first two scenarios will not be allowed by the 
`Color` model. The database will not be interacted with and no SQL should be 
output for these cases. The last three cases do not violate any validations, so 
you should see SQL printed for inserting these values.


## Step 4: Modify the model file

Modify the `init` function to add the following model-level validations to the 
`name` attribute:

  * The length should be between 2 and 20 characters. Include a custom error 
    message, `name must be between 2 and 20 characters`, or similar.
  * A custom function should throw an error if the `name` ends in the letter 
    `'y'`. The error should indicate `name must not end in 'y'`, or similar.
  
> Hint: In order to add additional validations, a `validate` key will need to be 
> added to the `name` object. Take a look at the 
> [Sequelize validation docs][validate-docs] for more examples of built-in and 
> custom validators.

An example implementation of the custom function is given below. It is up to you 
to determine how best to incorporate this function into your validations:

```js
function noEndingInY(value) {
  if(value.slice(-1) === 'y') {
    throw new Error('name must not end in \'y\'');
  }
}
```

When these validations have been created, run the test file again with 
`npm test`. These validations should now prevent the third and fourth test cases 
from interacting with the database since `a` and `orangey` are no longer valid 
`names`. You should only see SQL generated for the final test case, `orange`, 
since it is the only one that does not violate a model-level validation.


## Bonus Step 5: Insert directly into the database

Open up `sqlite3` again and try inserting the values `a` and `orangey` directly 
into the database. You should not see any errors with these insertion 
statements.

Can you explain why these statements are accepted in the database but result in 
errors when the model is used to create them?


## Congratulations!

You are now able to generate **Sequelize** models and migrations, as well as 
implement database constraints and model-level validations.


[validate-docs]: https://sequelize.org/master/manual/validations-and-constraints.html#validators