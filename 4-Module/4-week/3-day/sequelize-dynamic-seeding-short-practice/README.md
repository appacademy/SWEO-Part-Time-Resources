# Practice: Dynamic Seeding

In this short practice, you will dynamically seed a database with **Sequelize**
models.

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
database and you have seed data present for the `Bands` and `Instruments`. The
tables created follow the following schema:

![band-musician-instrument-db-schema]

In this practice you will be creating seeder files that will add `Musicians` to
your database as well as connect `Musicians` to `Instruments`.

## Step 1: Seed Musicians (One-to-Many Association)

You would like to insert the following data into your `Musicians` table:

| `firstName` | `lastName` | *band             |
| ----------- | ---------- | ----------------- |
| Adam        | Appleby    | The Falling Box   |
| Anton       | Martinovic | The Falling Box   |
| Wilson      | Holt       | The Falling Box   |
| Marine      | Sweet      | America The Piano |
| Georgette   | Kubo       | America The Piano |
| Aurora      | Hase       | Loved Autumn      |
| Trenton     | Lesley     | Playin Sound      |
| Camila      | Nenci      | Playin Sound      |
| Rosemarie   | Affini     | The King River    |
| Victoria    | Cremonesi  | The King River    |

> *Note: `band` is not a column name of the `Musicians` table, rather the `name`
> of the `Band` that they are associated with.

Use `sequelize-cli` to generate a new seeder. Name this seeder
`starter-musicians`.

In order make sure each newly created `Musician` is connected to the correct
`Band`, it is important to dynamically seed the table. Providing a hard-coded
`bandId` can cause problems in many different scenarios, such as reseeding,
migrating to a new database, or just not knowing an exact value.

When creating seeder files, you will often need to refer to the same set of data
in both the `up` and `down` functions. Instead of repeating the data in both
locations and potentially having discrepancies, it is a better to create
a single data source at the beginning of the file that will be referenced
in both `up` and `down` functions.

In the seeder file that you've created, create a `bandMusicians` variable. It
should keep track of an array of objects, each object representing a band that
you are attempting to create musicians for. The object should have a key for the
`name` of the band as well as a key for the `musicians`. The `musicians` should
be an array with objects representing each `Musician` that is to be created.

Using the data from the provided `Musicians` table above, your data source
can look something like this:

```js
const bandMusicians = [
  {
    name: 'The Falling Box',
    musicians: [
      { firstName: 'Adam', lastName: 'Appleby' },
      { firstName: 'Anton', lastName: 'Martinovic' },
      { firstName: 'Wilson', lastName: 'Holt' }
    ]
  },
  {
    name: 'America The Piano',
    musicians: [
      { firstName: 'Marine', lastName: 'Sweet' },
      { firstName: 'Georgette', lastName: 'Kubo' }
    ]
  },
  {
    name: 'Loved Autumn',
    musicians: [
      { firstName: 'Aurora', lastName: 'Hase' }
    ]
  },
  {
    name: 'Playin Sound',
    musicians: [
      { firstName: 'Trenton', lastName: 'Lesley' },
      { firstName: 'Camila', lastName: 'Nenci' }
    ]
  },
  {
    name: 'The King River',
    musicians: [
      { firstName: 'Rosemarie', lastName: 'Affini' },
      { firstName: 'Victoria', lastName: 'Cremonesi' }
    ]
  }
]
```

With your data source created, there are many different approaches to creating
records. Ultimately, as long as you are querying for the `Band` to rather than
hard-coding `ids`, any approach that you take is acceptable. Since seeders are
only run once, or whenever data needs to be restored, efficiency is often less
of a priority as opposed to clarity.

Within the `up` function, you will need to iterate over the data source
(`bandMusicians`), query for a reference to the associated `Band` record,
then utilize this reference to create a `Musician` for each object in the
nested `musicians` key of your data source. Viable options for creating
these records include:

  1. The [`hasMany` association's create method][hasMany] on each `Band`
     instance
  2. The `Musician` model's `create` method, combining the data source's first
     and last name data with a `bandId` attribute from the queried `Band`
  3. Compiling a list of `Musician` objects that need to be created, with their
     `firstName`, `lastName`, and `bandId` attributes, then passing that list to
     the `bulkInsert` function
  4. Many alternative approaches!

For this practice, take the first approach. Iterate over each band in the
`bandMusicians` array. For each object, destructure the `name` of the band and
the `musicians` array. Query for a reference to the `Band` instance with a
matching `name` (remember to import a reference to the `Band` model into your
seeder file). Iterate over each object in the `musicians` array and use the
`createMusician` method to create a new `Musicians` record for each object.

> Hint: `forEach` may not perform as you are expecting with an `async/await`
> callback. In this case, you are probably better off using a standard `for`
> loop to ensure each asynchronous function executes before continuing.

Within the `down` function, you will need to delete each `Musician` that was
created from the `up` function. Again, there are many approaches to
accomplishing this goal. Viable options include:

  1. Iterate over the `bandMusicians` array and execute a `DELETE` query for
     each `Musician` in the nested `musicians` arrays.
  2. Manipulate the `bandMusicians` array's structure, perhaps with a `reduce`
     function, to combine each nested `musicians` array and utilize this data in a `bulkDelete` function call to the `Musicians` table.
  3. Many alternative approaches!

For this practice, take the first approach. Iterate over each band in the
`bandMusicians` array. Destructure the `musicians` array from each object.
Iterate over each object of this array and use the `destroy` method to delete
the corresponding record from the `Musicians` table.

> Hint: Remember to avoid using `forEach` with `async/await` callback functions.

Test that your seeder is functioning as expected. Run the seed file and check
the contents of the `Musicians` table with `sqlite3` or by navigating to an
appropriate route defined in __app.js__. Unseed the table and check again.
Reseed to see the content return.


## BONUS Step 2: Seed MusicianInstruments (Many-to-Many Join Table)

Now that you have `Musicians` and `Instruments` in your database, you would like
to be able to seed which `Instrument` each `Musician` plays. The following table
shows the `Musician` and `Instruments` that you would like to connect within
this seeder:

| Musician Name        | Instrument Types                |
| -------------------- | ------------------------------- |
| `Adam Appleby`       | `piano`, `guitar`               |
| `Anton Martinovic`   | `piano`, `bass`                 |
| `Wilson Holt`        | `cello`                         |
| `Marine Sweet`       | `saxophone`                     |
| `Georgette Kubo`     | `drums`, `trumpet`, `saxophone` |
| `Aurora Hase`        | `violin`, `cello`               |
| `Trenton Lesley`     | `piano`                         |
| `Camila Nenci`       | `piano`                         |
| `Rosemarie Affini`   | `piano`, `violin`               |
| `Victoria Cremonesi` | `violin`                        |

Create a new seeder named `starter-musician-instruments`. Since you want to make
sure you are referencing the correct records by content rather than hard-coded
`ids`, you will want to dynamically seed the `MusicianInstruments` table by
first querying for references to the `Musicians` and `Instruments` that will be
used.

Follow a similar approach to the `Musician` seeder file by creating a single
data source near the top of your file. In this `musicianInstruments` variable,
set up an array of objects that define the `Musician` and `Instruments` that you
will be connecting. A `musician` key should define the attributes needed to
query for the specific `Musician` (the `firstName` and `lastName` attributes).
An `instruments` key should point to an array of objects that define the
attributes needed to query for specific `Instruments` (the `type` attribute).

Using the data from the table above, your data source can look something like
this:

```js
const musicianInstruments = [
  {
    musician: { firstName: 'Adam', lastName: 'Appleby' },
    instruments: [{ type: 'piano' }, { type: 'guitar' }]
  },
  {
    musician: { firstName: 'Anton', lastName: 'Martinovic' },
    instruments: [{ type: 'piano' }, { type: 'bass' }]
  },
  {
    musician: { firstName: 'Wilson', lastName: 'Holt' },
    instruments: [{ type: 'cello' }]
  },
  {
    musician: { firstName: 'Marine', lastName: 'Sweet' },
    instruments: [{ type: 'saxophone' }]
  },
  {
    musician: { firstName: 'Georgette', lastName: 'Kubo' },
    instruments: [{ type: 'drums' }, { type: 'trumpet' }, { type: 'saxophone' }]
  },
  {
    musician: { firstName: 'Aurora', lastName: 'Hase' },
    instruments: [{ type: 'violin' }, { type: 'cello' }]
  },
  {
    musician: { firstName: 'Trenton', lastName: 'Lesley' },
    instruments: [{ type: 'piano' }]
  },
  {
    musician: { firstName: 'Camila', lastName: 'Nenci' },
    instruments: [{ type: 'piano' }]
  },
  {
    musician: { firstName: 'Rosemarie', lastName: 'Affini' },
    instruments: [{ type: 'piano' }, { type: 'violin' }]
  },
  {
    musician: { firstName: 'Victoria', lastName: 'Cremonesi' },
    instruments: [{ type: 'violin' }]
  },
];
```

With your data source created, there are again many different approaches to
creating records within the `MusicianInstruments` table. The important thing to
keep in mind is that whenever you are referencing a record, a query should be
performed instead of hard-coding `ids`.

Within the `up` function, you will need to iterate over the data source
(`musicianInstruments`), query for references to both the `Musician`
and the `Instruments` that you are attempting to connect, then utilize
these references to create new records. Viable options for creating
these records include:

  1. The [`belongsToMany` association's add method][belongsToMany] on each
     `Musician` instance
  2. The `belongsToMany` association's add method on each `Instrument` instance
     (perhaps with restructuring the data source to be grouped by `Instrument`
     rather than by `Musician`)
  3. Compiling a list of `MusicianInstrument` objects that need to be created,
     with their `musicianId` and `instrumentId` attributes coming from the
     queried instances, then passing that list to the `bulkInsert` function
  4. Many alternative approaches!

For this practice, take the first approach. Iterate over each musician in the
`musicianInstruments` array. For each object, destructure the `musician` and
`instruments` keys. Query for a reference to the `Musician` instance with
matching attributes, as well as the collection of `Instrument` instances with
corresponding matching records. With these references, use the `addInstruments`
method provided by the `belongsToMany` association to create the necessary
records.

> Hint: The [Op.or comparison operator][Op.or] may come in handy when trying to
> `findAll` `Instruments` that match the structure of your data source.

Within the `down` function, you will need to delete each `MusicianInstrument`
that was created from the `up` function. Again, there are many approaches to
accomplishing this goal. Viable options include:

  1. The `belongsToMany` association's remove method on either the `Musician` or
     `Instrument` instances
  2. Compiling a list of `MusicianInstrument` objects that need to be deleted,
     with their `musicianId` and `instrumentId` attributes coming from the
     queried instances, then passing that list to the `bulkDelete` function
  3. Many alternative approaches!

For this practice, take the first approach. You will need to use the same method
of iterating and querying for `Musicians` and `Instruments` as you implemented
in the `up` function. With references to each, use the `removeInstruments`
method provided by the `belongsToMany` association to delete the necessary
records.

Test that your seeder is functioning as expected. Run the seed file and check
the contents of the `MusicianInstruments` table with `sqlite3` or by navigating
to an appropriate route defined in __app.js__. Unseed the table and check again.
Reseed to see the content return.


## Congratulations!

You are now able to seed associated models dynamically in **Sequelize** rather
than hard-coding foreign keys.


[band-musician-instrument-db-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/band-musician-instrument-db-schema.png
[band-musician-instrument-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-11/practices/band-musician-instrument-db-diagram-info.txt
[Op.or]: https://sequelize.org/master/manual/model-querying-basics.html#examples-with--code-op-and--code--and--code-op-or--code-
[hasMany]: https://sequelize.org/master/class/src/associations/has-many.js~HasMany.html
[belongsToMany]: https://sequelize.org/master/class/src/associations/belongs-to-many.js~BelongsToMany.html
