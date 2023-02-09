# Practice: Selecting Data with Sequelize

In this short practice, you will be using **Sequelize** models to query for data 
in a database.

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

In this practice you will be utilizing the **Sequelize** `Puppy` model to query 
the database for specific sets of records. Each endpoint in __app.js__ 
corresponds to a different query that you will write. 

To test the query, start the development server with `npm run dev`, then
navigate to the corresponding route in your browser.


## Step 1: `SELECT` all puppies

Complete the route for `/puppies`. It should query the database for all puppies 
and store the results in the variable provided. Order the results by `name`, in 
alphabetical order.

Test the route in your browser. You should see all ten puppies returned.

> Hint: The **Sequelize** [documentation for querying][sequelize-querying] has 
> great examples of various query types. The [section on ordering][sequelize-order] 
> can also be helpful to return your results in a specific order.


## Step 2: `SELECT` all microchipped puppies

Complete the route for `/puppies/chipped`. It should query the database for all 
puppies that have a `true` value for their `microchipped` attribute. Order the 
results by `age_yrs`, with the oldest puppies first. Break any ties by `name`, 
alphabetically.

Test the route in your browser. You should see the following puppies returned:

| `id` | `name`   | `age_yrs` | `breed`             | `weight_lbs` | `microchipped` |
| ---- | -------- | --------- | ------------------- | ------------ | -------------- |
| 1    | Cooper   | 1         | Miniature Schnauzer | 18           | true           |
| 9    | Leinni   | 1         | Miniature Schnauzer | 25           | true           |
| 4    | Zoe      | 0.8       | Korean Jindo        | 32           | true           |
| 6    | Ladybird | 0.6       | Labradoodle         | 20           | true           |
| 2    | Indie    | 0.5       | Yorkshire Terrier   | 13           | true           |
| 8    | Jaxson   | 0.4       | Beagle              | 19           | true           |


## Step 3: `SELECT` one puppy by name

Complete the route for `/puppies/name/:name`. It should query the database for 
the one puppy that has a `name` that matches the `name` param in the request.

Test the route in your browser. Navigating to `/puppies/name/Cooper` should 
return only the data for Cooper, `puppies/name/Kota` should return only the data 
for Kota, etc.


## Step 4: `SELECT` one puppy by id

Complete the route for `/puppies/:id`. Notice that this route is at the bottom 
of __app.js__. Can you think of why this is necessary?

This endpoint should query the database for the one puppy that has an `id` that 
matches the `id` param in the request. Do not use `findOne` method to complete 
this query, use the method intended to for use with primary keys.

Test the route in your browser. Navigating to `/puppies/1` should return only 
the data for the puppy with `id` of 1, etc. Depending on how many times you 
seeded and unseeded the database, your records may not start at an `id` of 1. 
You can always check within `sqlite3` or by navigating to a previous route that 
you have completed.


## BONUS Step 5: `SELECT` puppies with breeds ending in 'Shepherd'

Complete the route for `/puppies/shepherds`. It should query the database for 
all puppies that have a `breed` attribute ending with `Shepherd`. Order the 
results by `name` in reverse-alphabetical order.

Test the route in your browser. You should see the following puppies returned:

| `id` | `name` | `age_yrs` | `breed`             | `weight_lbs` | `microchipped` |
| ---- | ------ | --------- | ------------------- | ------------ | -------------- |
| 10   | Max    | 1.6       | German Shepherd     | 65           | false          |
| 3    | Kota   | 0.7       | Australian Shepherd | 26           | false          |

> Hint: In order to make a comparison in the `WHERE` clause, you can utilize the 
> various `Op` operators. Take a look at the docs here for a list and examples: 
> [Sequelize Querying Basics][sequelize-operators]


## BONUS Step 6: `SELECT` all tiny baby puppies

Complete the route for `/puppies/tinybabies`. It should query the database for 
all puppies that have an `age_yrs` less than `1` as well as a `weight_lbs` less 
than `20`. Order the results by `age_yrs`, youngest-to-oldest, breaking any ties
with `weight_lbs`, lightest-to-heaviest.

Test the route in your browser. You should see the following puppies returned:

| `id` | `name` | `age_yrs` | `breed`           | `weight_lbs` | `microchipped` |
| ---- | ------ | --------- | ----------------- | ------------ | -------------- |
| 8    | Jaxson | 0.4       | Beagle            | 19           | true           |
| 2    | Indie  | 0.5       | Yorkshire Terrier | 13           | true           |
| 7    | Callie | 0.9       | Corgi             | 16           | false          |


## Congratulations!

You are now able to use **Sequelize** models to query for data.


[sequelize-querying]: https://sequelize.org/master/manual/model-querying-basics.html
[sequelize-order]: https://sequelize.org/master/manual/model-querying-basics.html#ordering-and-grouping
[sequelize-operators]: https://sequelize.org/master/manual/model-querying-basics.html#operators