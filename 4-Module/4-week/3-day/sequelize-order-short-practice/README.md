# Practice: Ordering Queries

In this short practice, you will be ordering results of **Sequelize** queries.


## Getting started

Download starter.

Execute the __setup-commands.sh__ script from the root directory of this
practice. 

```shell
sh setup-commands.sh
```

View the contents of the script to see the commands that are executed. View the
results in the terminal to confirm that setup was successful and the `Bands`,
`Instruments`, `Musicians`, and `MusicianInstruments` tables exists in your
database and you have seed data present. The tables created follow the following
schema:



![band-musician-instrument-db-schema]

In this practice you will be implementing the endpoints in __app.js__ which will
query your database for `Bands` and their associated `Musicians`. You will 
order results by singular attributes, multiple attributes, and by associated 
models.


## Step 1: Order by one attribute

The first route handler that you will work with in __app.js__ is for 
`GET /bands/latest`. It currently fetches all `Bands` and returns the results as 
a JSON response. You would like to order these results by the records' `createdAt` in 
descending order.

Complete the route handler by adding in the appropriate key to the query.

> Take a look at the [Sequelize ordering docs][ordering-basics] for examples on 
> ordering query results.

Test that the endpoint returns records in the correct order by navigating to the 
`/bands/latest` route in your browser. You should see results in the 
same order as the following. The `id`, `createdAt`, and `updatedAt`attributes 
have been stripped for brevity:

```json
[
  {
    "name": "The King River"
  },
  {
    "name": "Playin Sound"
  },
  {
    "name": "Loved Autumn"
  },
  {
    "name": "America The Piano"
  },
  {
    "name": "The Falling Box"
  }
]
```


## Step 2: Order by multiple attributes

The next route handler that you will work with is `GET /musicians/alphabetic`. 
This route fetches all `Musicians` and returns the results as a JSON response. 
You would like to order these results by `lastName`, then by `firstName`, both 
in alphabetic order.

Complete the route handler by adding in the appropriate key to the query.

Test that the endpoint returns records in the correct order by navigating to the 
`/musicians/alphabetic` route in your browser. You should see results in the 
same order as the following. The `id`, `createdAt`, `updatedAt`, and `bandId` 
attributes have been stripped for brevity:

```json
[
  {
    "firstName": "Rosemarie",
    "lastName": "Affini",
  },
  {
    "firstName": "Adam",
    "lastName": "Appleby",
  },
  {
    "firstName": "Victoria",
    "lastName": "Cremonesi",
  },
  {
    "firstName": "Aurora",
    "lastName": "Hase",
  },
  {
    "firstName": "Wilson",
    "lastName": "Holt",
  },
  {
    "firstName": "Georgette",
    "lastName": "Kubo",
  },
  {
    "firstName": "Trenton",
    "lastName": "Lesley",
  },
  {
    "firstName": "Anton",
    "lastName": "Martinovic",
  },
  {
    "firstName": "Camila",
    "lastName": "Nenci",
  },
  {
    "firstName": "Marine",
    "lastName": "Sweet",
  }
]
```


## Step 3: Order by multiple nested attributes

The final route handler that you will work with is 
`GET /bands/alphabetic-musicians`. This route fetches all `Bands` as well as 
their associated `Musicians` and returns the results as a JSON response. You 
would like to order these results first by `Band` `name`, then by the `lastName` 
of the `Musician`, then by the `firstName` of the `Musician`, all alphabetically.

Complete the route handler by adding in the appropriate key to the query.

> Take a look at the **Sequelize** eager loading docs, particularly the 
> [ordering section][order-eager-docs] for examples on how to order the nested 
> data.

Test that the endpoint returns records in the correct order by navigating to the 
`/bands/alphabetic-musicians` route in your browser. You should see results in 
the same order as the following. The `id`, `createdAt`, `updatedAt`, and 
`bandId` attributes have been stripped for brevity:

```json
[
  {
    "name": "America The Piano",
    "Musicians": [
      {
        "firstName": "Georgette",
        "lastName": "Kubo",
      },
      {
        "firstName": "Marine",
        "lastName": "Sweet",
      }
    ]
  },
  {
    "name": "Loved Autumn",
    "Musicians": [
      {
        "firstName": "Aurora",
        "lastName": "Hase",
      }
    ]
  },
  {
    "name": "Playin Sound",
    "Musicians": [
      {
        "firstName": "Trenton",
        "lastName": "Lesley",
      },
      {
        "firstName": "Camila",
        "lastName": "Nenci",
      }
    ]
  },
  {
    "name": "The Falling Box",
    "Musicians": [
      {
        "firstName": "Adam",
        "lastName": "Appleby",
      },
      {
        "firstName": "Wilson",
        "lastName": "Holt",
      },
      {
        "firstName": "Anton",
        "lastName": "Martinovic",
      }
    ]
  },
  {
    "name": "The King River",
    "Musicians": [
      {
        "firstName": "Rosemarie",
        "lastName": "Affini",
      },
      {
        "firstName": "Victoria",
        "lastName": "Cremonesi",
      }
    ]
  }
]
```


## Congratulations!

You are now able to order the results of **Sequelize** queries by singular, 
multiple, and nested attributes.


[band-musician-instrument-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/band-musician-instrument-db-schema.png
[band-musician-instrument-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/band-musician-instrument-db-diagram-info.txt
[ordering-basics]: https://sequelize.org/master/manual/model-querying-basics.html#ordering
[order-eager-docs]: https://sequelize.org/master/manual/eager-loading.html#ordering-eager-loaded-associations