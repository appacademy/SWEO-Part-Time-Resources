# Practice: Aggregate Data in Sequelize

In this short practice, you will be using several methods to get aggregate data
using Sequelize.

## Getting started

Download starter. 

Execute the __setup-commands.sh__ script from the root directory of this
practice. 

```shell
sh setup-commands.sh
```

View the contents of the script to see the commands that are executed. View the
results in the terminal to confirm that setup was successful and the `Cats`,
`Toys`, and `CatToys` tables exist in your database and you have seed data
present. These tables will be very large!

Explore the models and their associations in the __db/models__ directory. The
`Cat` and `Toy` models have a many-to-many relationship, and are joined by the
`CatToy` model.

Start your development server using `npm run dev`.

In this practice you will be implementing the endpoints in __app.js__ which will
query your database for aggregate values from the `Cats` and `Toys` tables. You
will make queries to find the aggregate data values for:

- the number of entries/records/rows in a given table
- the minimum value of all the given column values
- the maximum value of all the given column values
- the sum of all the given column values
- the average value of all the given column values

## STEP 1: Load the toys and find the count, min price, max price, and sum

You will work within the `GET /toys` route handler to load all of the toy
records. If you navigate to this endpoint, you should see a `ReferenceError`
because you have not yet defined the variables described below. To remove the
`ReferenceError`, you will need to define five variables according to the
specifications below.

- Create an `allToys` variable and set it to an array of all `Toy` records

Next, you will implement four of Sequelize's built-in methods to find the
following aggregate data values:

- Create a `toysCount` variable and set it to evaluate to the total number of toy records

- Create a `toysMinPrice` variable and set it to evaluate to the minimum price of all the
  toys

- Create a `toysMaxPrice` variable set it to evaluate to the maximum price of all the
  toys

- Create a `toysSumPrice` variable set it to evaluate to the sum of all of the toy
  prices.

You can test that your endpoint returns the correct records and aggregate data
values by navigating to the `/toys` endpoint. If you implemented the aggregate
methods correctly, the JSON should look like this:

```json
{
    "toysCount": 10056, 
    "toysMinPrice": 1,
    "toysMaxPrice": 100,
    "toysSumPrice": 543262,
    "allToys": [
        {
            "id": 1,
            "name": "String",
            "color": "Yellow",
            "price": 1,
            "createdAt": "2022-02-02T15:08:07.000Z",
            "updatedAt": "2022-02-02T15:08:07.000Z"
        },
        {
            "id": 2,
            "name": "Scream cat",
            "color": "Magenta",
            "price": 31,
            "createdAt": "2022-02-02T15:08:07.000Z",
            "updatedAt": "2022-02-02T15:08:07.000Z"
        },
        // ... the rest of the 10,056 toy records
    ]
}
```

## STEP 2: Find a cat with their associated toys, and aggregate toy data

In this step, you will work within the `GET '/cats/:id/toys'` route handler. The
goal of this step is to eager load the data for a single cat, with all of its
associated toy data, as well aggregate data about the toys.

Most of the route handler has already been created for you. If you navigate to a
cat's page, such as `/cats/7/toys`, you should already see the cat's data within
the `catDataSummary` key, as well data for each of its four toys within the
`cat` key.

This route handler includes two separate queries. The first query, which you
need to complete, will load the aggregate data values related to the cat's toys.
The second query is complete, and eager loads the cat data and the associated
data for each toy.

### Step 2a: Getting the aggregate data

You will need to implement three SQL aggregate functions to add the following
aggregate values to the first query.

- Count all of this cat's toys, and display the value with a key of `toyCount`

- Find the average price of this cat's toys, and display the value with a key of
  `averageToyPrice`

- Find the total price of this cat's toys, and display the value with a key of
  `totalToyPrice`

You can test that your endpoint returns the correct aggregate data values by
navigating to the `/cats/7/toys` endpoint. If you implemented the aggregate
methods correctly, the JSON should look like this:

```json
{
    "catToysAggregateData": {
        "toyCount": 4,
        "averageToyPrice": 23,
        "totalToyPrice": 92
    },
    "cat": {
        "id": 7,
        "name": "Keturah",
        "color": "Magenta",
        "breed": "Arabian Mau",
        "createdAt": "2022-02-02T15:08:06.000Z",
        "updatedAt": "2022-02-02T15:08:06.000Z",
        "Toys": [
            {
                "id": 4783,
                "name": "Golf",
                "color": "Fuchsia",
                "price": 53,
                "createdAt": "2022-02-02T15:08:07.000Z",
                "updatedAt": "2022-02-02T15:08:07.000Z",
                "CatToy": {
                    "catId": 7,
                    "toyId": 4783,
                    "createdAt": "2022-02-02T15:08:07.000Z",
                    "updatedAt": "2022-02-02T15:08:07.000Z",
                    "CatId": 7,
                    "ToyId": 4783
                }
            },
            // ... the rest of this cat's toys
        ]
    }
}
```

### Step 2b: Formatting the JSON

While the JSON above provides all of the necessary information, the route
handler can be refactored to include all of the aggregate data values with the
cat data (rather than creating a separate key).

In order to do this, follow the steps below:

1. Define a new variable, `catData`, and set it equal to the `cat` variable
   converted to JSON (HINT: see how to use the [`toJSON()` Sequelize method])
2. Add the `toyCount`, `averageToyPrice`, and `totalToyPrice` keys to the
   `catData` object, with their aggregate values from the `catDataSummary` query
   results.
3. Refactor the response to only display `catData` in the response.

When complete, your new JSON should look like this, with the three aggregate
values displayed at the bottom of the page:

```json
{
    "id": 7,
    "name": "Keturah",
    "color": "Magenta",
    "breed": "Arabian Mau",
    "createdAt": "2022-02-02T15:08:06.000Z",
    "updatedAt": "2022-02-02T15:08:06.000Z",
    "Toys": [
        // all 4 of the cat's toys
    ],
    "toyCount": 4, // aggregate data key and values
    "averageToyPrice": 23,
    "totalToyPrice": 92
}
```

## Congratulations!

You are now able to write Sequelize queries to get aggregate data values and
display those values in your endpoints.

[`toJSON()` Sequelize method]:
    https://sequelize.org/master/manual/model-instances.html#note--logging-instances