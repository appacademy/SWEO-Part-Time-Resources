# Practice: Inserting Data via Sequelize Associations

In this short practice, you will create records utilizing **Sequelize**
associations.

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

In this practice you will be implementing the `POST` route handlers in
__app.js__ which will create musicians for an existing band as well as associate
musicians with multiple instruments.

## Step 1: Creating an associated model (One-to-Many)

You would like to be able to have an endpoint for your API that allows the user
to create a new `Musician` for an already-existing `Band`. The endpoint should
accept `POST` requests to `/bands/:bandId/musicians` and the body of the request
should follow the following format:

```json
{
  "firstName": "string",
  "lastName": "string"
}
```

Both the `firstName` and `lastName` keys are required on the body of the
request, as they will be used to create the new `Musician`.

Complete the route handler by finding the `Band` indicated by the route param,
extracting the `firstName` and `lastName` from the body of the request, and
utilizing the `Band` association's creator method.

> Hint: Take a look at the [hasMany association docs][hasMany-docs] for more
> details and examples of the methods provided by **Sequelize** associations.

With the `Musician` created, send a JSON response with a `message` key to
indicate that the `Musician` was successfully created for the given band, as
well as a `musician` key with the new record's data.

Test the endpoint in Postman. Assuming no reseeding has taken place, send a
`POST` request to `/bands/1/musicians` with the following body:

```json
{
  "firstName": "YOUR FIRST NAME",
  "lastName": "YOUR LAST NAME"
}
```

The response you receive should look similar to the following:

```json
{
  "message": "Created new musician for band The Falling Box.",
  "musician": {
    "id": 11,
    "firstName": "YOUR FIRST NAME",
    "lastName": "YOUR LAST NAME",
    "bandId": 1,
    "updatedAt": "2021-10-22T03:00:05.031Z",
    "createdAt": "2021-10-22T03:00:05.031Z"
  }
}
```

You can also now see that your record shows up when you make a `GET` request to
either the index `/bands` or the specific `Band` endpoint `/bands/1`.


## Step 2: Connecting two existing records (Many-to-Many)

In addition to adding new `Musicians` to existing `Bands`, you would like an
endpoint to be able to connect a `Musician` with existing `Instrument`s. In
order to make this association, you will need to `INSERT` into the
`MusicianInstruments` join table. Luckily, **Sequelize** also provides helpful
association methods for this scenario.

The `POST` route handler to `/musicians/:musicianId/instruments` should
accept a request body with the following structure:

```json
{
  "instrumentIds": [1, 2, etc.]
}
```

The `instrumentIds` key of the request body is required and should point to an
array of integers. These integers correspond to the `ids` of the `Instruments`
that the user is adding as an association for `Musician` with `:musicianId`
matching their `id`.

Complete the route handler by finding the `Musician` indicated by the route
param, extracting the `instrumentIds` from the body of the request, and
utilizing the `Musician` association's add method.

> Hint: Take a look at the [belongsToMany association docs][belongsToMany-docs]
> for more details and examples of the methods provided by **Sequelize**
> associations.

With the connection between the `Musician` and `Instrument(s)` created, send a
JSON response with a `message` key to indicate that the `Musician` was
successfully associated with the given `instrumentIds`.

Test the endpoint in Postman. Assuming no reseeding has taken place, send a
`POST` request to `/musicians/1/instruments` with the following body:

```json
{
  "instrumentIds": [3, 5]
}
```

The response you receive should look similar to the following:

```json
{
  "message": "Associated Adam with instruments [3,5]."
}
```

You can also now see that your association shows up when you make a `GET`
request to either the index `/musicians` or the specific `Musician` endpoint
`/musicians/1`.


## Congratulations!

You are now able to create records for associated data with **Sequelize**
models.


[band-musician-instrument-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/band-musician-instrument-db-schema.png
[band-musician-instrument-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/band-musician-instrument-db-diagram-info.txt
[hasMany-docs]: https://sequelize.org/master/class/src/associations/has-many.js~HasMany.html
[belongsToMany-docs]: https://sequelize.org/master/class/src/associations/belongs-to-many.js~BelongsToMany.html#instance-method-add