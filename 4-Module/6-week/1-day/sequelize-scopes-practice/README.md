# Practice: Sequelize Scopes

In this practice, you will take what you learned about Sequelize scopes and
apply them to a **Sequelize** model. You will implement scopes using the given
models of `Instruments` and `Stores`. There are three stores: Instruments r Us,
Bay Area Sounds, and East Coast Beats. Between these three stores, you will be
utilizing scopes to query the available instruments from each store.

## Getting started

Download starter. `cd` into __server__ folder, and install dependencies using
`npm install`.

Create a __.env__ file modeled after __.env.example__, specifying the location
of the database to be created.

Use `sequelize-cli` to run the existing migration and seeder files provided. Use
`sqlite3` to check that the `Stores` and `Instruments` tables exist in your
database along with the present seed data. The tables created should follow
this schema:

![stores-instruments-db-schema]

In this practice you will be implementing Sequelize scopes onto the
__instrument.js__ and __store.js__ models, as well as various route handlers
in the __app.js__ file. This will query your database for all of the
`Instruments` using various scope parameters applied on to multiple routes.

## Step 1: Apply a default scope onto the searches

Take a look at the route handler in __app.js__ for `GET /instruments`. It
It returns records for each `Instrument` in your database, ordered by `id`,
`name`, `type`, `storeId`, `createdAt` and `updatedAt`. Apply a default scope
onto the __instrument.js__ model that **excludes** the `createdAt` and `updatedAt`
data.

Once that default scope is applied to the __instrument.js__ model apply the
same default scope to the __store.js__ model. Once this is complete run the
`GET /instruments` and `GET /stores` routes to ensure that the information has
be queried to exclude the `createdAt` and `updatedAt` data.

The `GET /instruments` endpoint should return something like this:

```json
[{"id":1,"name":"piano","type":"keyboard","storeId":1},
{"id":2,"name":"organ","type":"keyboard","storeId":1},
{"id":3,"name":"accordion","type":"keyboard","storeId":1},
{"id":4,"name":"drums","type":"percussion","storeId":1},
{"id":5,"name":"xylophone","type":"percussion","storeId":1},
{"id":6,"name":"cymbal","type":"percussion","storeId":1},....
....{"id":38,"name":"saxophone","type":"woodwind","storeId":3},
{"id":39,"name":"flute","type":"woodwind","storeId":3}]
```

The `GET /stores` endpoint should return this:

```json
[{"id":1,"name":"Instruments r Us","location":"LA"},
{"id":2,"name":"Bay Area Sounds","location":"SF"},
{"id":3,"name":"East Coast Beats","location":"NY"}]
```

## Step 2: Implement named scopes to their respective routes

In __app.js__ there are routes that leads to the keyboard, string, and
woodwind instruments. Implement named scopes onto the __instrument.js__ model
where it will return the specified type of instrument for each respective route.

Once the named scopes have been applied make sure the correct scopes are applied
to the route handlers in __app,js__. Make sure that the query excludes the
`createdAt` and `updatedAt` data.

The `GET /instruments/keyboard` endpoint should return this:

```json
[{"id":1,"name":"piano","type":"keyboard","storeId":1},
{"id":2,"name":"organ","type":"keyboard","storeId":1},
{"id":3,"name":"accordion","type":"keyboard","storeId":1},
{"id":17,"name":"piano","type":"keyboard","storeId":2},
{"id":27,"name":"piano","type":"keyboard","storeId":3},
{"id":28,"name":"organ","type":"keyboard","storeId":3}]
```

## STEP 3: Implement a named function scope to a dynamic route

Take a look at the dynamic route handlers in __app.js__ for
`GET /stores/:storeId/instruments`.

`GET /stores/:storeId/instruments` is meant to return all the instruments within
the given `storeId` ordered by `name` alphabetically.

Implement a named function scope in __instrument.js__ to return the `storeId`
in association to each store. Once the named function scope is implemented make
sure the route handler takes in the required params and is sorted to return the
list in order by the names of the instruments alphabetically for each respective
store.

This route should exclude the `createdAt` and `updatedAt` data.

The `GET /stores/2/instruments` endpoint should return:

```json
[{"id":21,"name":"bass","type":"string","storeId":2,
"Store":{"id":2,"name":"Bay Area Sounds","location":"SF"}},
{"id":23,"name":"cello","type":"string","storeId":2,
"Store":{"id":2,"name":"Bay Area Sounds","location":"SF"}},
{"id":18,"name":"drums","type":"percussion","storeId":2,
"Store":{"id":2,"name":"Bay Area Sounds","location":"SF"}},
{"id":26,"name":"flute","type":"woodwind","storeId":2,...
...,{"id":22,"name":"violin","type":"string","storeId":2,
"Store":{"id":2,"name":"Bay Area Sounds","location":"SF"}},
{"id":19,"name":"xylophone","type":"percussion","storeId":2,
"Store":{"id":2,"name":"Bay Area Sounds","location":"SF"}}]
```

## Congratulations!

You are now able to use default scopes and named scopes in **Sequelize** with
your models. Hoorayy!!

[stores-instruments-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-12/stores-instruments-db-schema.png