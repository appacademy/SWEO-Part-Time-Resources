# Relationships

We can query for related data without associations through normal means

[`findOne` / `findAll` / `findByPk`] + `where` can find anything we need!

However, utilizing our associations makes things even easier!

## The automatic `get` method

If a `belongsTo()` or `hasOne()` association has been created, like so

```js
class Job extends Model {
  static associate(models) {
    Job.belongsTo(models.Person, { foreignKey: 'personId' });
  }
}
```

Sequelize automatically creates a `instance.getModelName()` for us!

- The ModelName will be singular

```js
// getting a Job instance by id
const job = await Job.findOne({ where: { id } });

// finding the Person instance that has that job
const personWithJob = await job.getPerson();
```

If a `hasMany()` or `belongsToMany()` association has been created

```js
class Person extends Model {
  static associate(models) {
    Person.hasMany(models.Job, {
      foreignKey: 'personId',
      onDelete: 'CASCADE',
      hooks: true,
    });
  }
}
```

Sequelize creates the same method, except the model name is plural!

- The results will be returned to us in an array

```js
// getting a Person instance by id
const person = await Person.findOne({ where: { id } });

// finding all the Job instances that the person has
const allJobsForAPerson = await Person.getJobs();
```

## `include`

When querying for an instance, we can use `include` to also receive associated data

- `belongsTo()` or `hasOne()` = singular model name
- `hasMany()` and `belongsToMany()` = plural model name

```js
// belongsTo() or hasOne()
const job = await Job.findOne({ where: { id }, include: Person });

// hasMany() or belongsToMany()
const person = await Person.findOne({ where: { id }, include: Jobs });
```

This is how the returned data could look

```js
job = {
  id,
  title,
  Person: {
    id,
    name,
  },
};

person = {
  id,
  name,
  Jobs: [
    {
      id,
      title,
    },
    {
      id,
      title,
    },
  ],
};
```

## Eager loading vs Lazy loading

Eager loading

- Loading all data at once
- Typically faster
- Would use `include`

Lazy loading

- Loading data only once it's needed
- More optimal for conditional loading
- Would use `getModelName()`

---

## Inserting Data With Associations

Sequelize also automatically creates methods for us to insert data with

## `instance.createModelName()`

Creates data with an association to the instance

```js
const person = await Person.findOne({ where: { name: 'Exa Mple' } });
// returns Person: {
// id: 1,
// name: "Exa Mple"
// }

await person.createJob({ title: 'Manager' });
```

## `instance.addModelName()`

Creates an association for data that's already been created

Particularly useful in Many-To-Many situations

```js
// Create or find instances of readers and books
const reader1 = await Reader.create({ userName: 'SuperReader109' });
const reader2 = await Reader.create({ username: 'Reader McReady' });

const book1 = await Book.create({ title: 'The Wind in the Willows' });
const book2 = await Book.create({ title: 'Where the Wild Things Are' });

// Add association between a single reader and book
reader1.addBook(book1);

// Add association between one book and multiple readers
book2.addReaders([reader1, reader2]);
```

## `Model.create()`

We also can use the `Model.create()` method we already know, with some extra options

When creating the new data, we can create any associated data at the same time

```js
await Person.create({
  name: 'Example',
  Jobs: [{ title: 'Manager', title: 'Software Engineer' }],
});
```

This will create a person, two jobs, and the appropriate association between them.
