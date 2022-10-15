# Practice: Inserting Data with Sequelize

In this short practice, you will be using **Sequelize** models to insert data 
into a database.

## Getting started

Download starter. 

Execute the __setup-commands.sh__ script from the root directory of this
practice. 

```shell
sh setup-commands.sh
```

View the contents of the script to see the commands that are executed. View the results in the terminal to confirm that setup was successful in creating the following `Puppies` table in your database:

| `id` | `name`   | `age_yrs` | `breed`             | `weight_lbs` | `microchipped` |
| ---- | -------- | --------- | ------------------- | ------------ | -------------- |
| 1    | Cooper   | 1         | Miniature Schnauzer | 18           | true           |
| 2    | Indie    | 0.5       | Yorkshire Terrier   | 13           | true           |
| 3    | Kota     | 0.7       | Australian Shepherd | 26           | false          |
| 4    | Zoe      | 0.8       | Korean Jindo        | 32           | true           |
| 5    | Charley  | 1.5       | Basset Hound        | 25           | false          |
| 6    | Ladybird | 0.6       | Labradoodle         | 20           | true           |
| 7    | Callie   | 0.9       | Corgi               | 16           | false          |
| 8    | Jaxson   | 0.4       | Beagle              | 19           | true           |
| 9    | Leinni   | 1         | Miniature Schnauzer | 25           | true           |
| 10   | Max      | 1.6       | German Shepherd     | 65           | false          |


Start the development server with `npm run dev` and navigate to `/puppies` to
ensure that application has been initialized correctly. You should see all ten 
puppies from the seeder file displayed in the browser.

In this practice you will be utilizing the **Sequelize** `Puppy` to create new 
records in the `Puppies` table of the database. The first two steps work solely 
with **Sequelize** in the __test.js__ file. The last step will have you 
implement a `POST` route, combining your **Express** and **Sequelize** 
knowledge.


## Step 1: Build a new puppy

In __test.js__, implement the following code in the first `try/catch` block.
This block of code should utilize the `build` method of your model in order
to create a new instance of a `Puppy`. Use the following attributes for this
instance:

| `name` | `age_yrs` | `weigth_lbs` | `breed`          | `microchipped` |
| ------ | --------- | ------------ | ---------------- | -------------- |
| Trudy  | 2         | 38           | Brittany Spaniel | false          |

Remember to `save` the instance of the `Puppy` model to the database after it 
has been built.

When run, the __test.js__ file will rebuild, migrate, and seed your database. Do 
so with `npm test` after you implement the code. After running the file, check
that the new puppy has been inserted into the database. Use either `sqlite3`
and a SQL query to directly view the contents, or navigate to `/puppies` in your
browser.

## Step 2: Create a new puppy

In __test.js__, implement the following code in the second `try/catch` block.
This block of code should utilize the `create` method of your model in order to
create a new instance of a `Puppy`. Use the following attributes for this instance:

| `name` | `age_yrs` | `weigth_lbs` | `breed` | `microchipped` |
| ------ | --------- | ------------ | ------- | -------------- |
| Beans  | 1.6       | 42           | Bulldog | true           |

Comment out the code in the first `try/catch` block before running
__test.js__ again.

When run, the __test.js__ file will rebuild, migrate, and seed your database. Do 
so with `npm test` after you implement the code. After running the file, check
that the new puppy has been inserted into the database. Use either `sqlite3`
and a SQL query to directly view the contents, or navigate to `/puppies` in your
browser.

Compare the two methods of inserting a new record that you utilized in these 
first two steps.


## Step 3: Create a `POST` route

In __app.js__ there are two endpoints associated with `/puppies`. The `GET` 
route has been completed for you. This endpoint allows you to navigate to 
`/puppies` in your browser to see the contents of the `Puppies` table. In this 
step, you will complete the `POST` route. This endpoint will accept attributes 
from the body of a request and create a new `Puppies` record.

Capture the `name`, `age_yrs`, `breed`, `weight_lbs`, and `microchipped` 
attributes from the body of the request (`req.body`), and use those
values to create a new instance of a `Puppy`. Utilize either of the methods
from the two previous steps.

After the record has been saved to the database, create a JSON response, with a 
`message` key indicating that the record was successfully saved, as well as a 
`data` key with the newly created `Puppy` as its value.

Test that this route is working as intended by utilizing Postman. Make a `POST` 
request to `/puppies` with the following JSON request body:

```json
{
  "name": "George",
  "age_yrs": 1.2,
  "breed": "Bulldog",
  "weight_lbs": 40,
  "microchipped": true
}
```

You should get a successful response from making this request. You should also 
double-check that the record was saved by making a `GET` request to `/puppies`, 
navigating to this route in your browser, or checking `sqlite3` directly.


## Congratulations!

You are now able to use **Sequelize** models to insert data into a database.