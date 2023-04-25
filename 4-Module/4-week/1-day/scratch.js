const express = require('express');
require('dotenv').config();
const db = require('./db/models');


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({msg:'App is Live'});
});

app.get('/dogs', async (req, res) => {
  const dogs = await db.Dog.findAll();
  res.json({ dogs });
});
app.get('/dogs/add', async (req, res) => {
  // Method 1 : SINGLE INSERT
  // const owner = await db.Owner.findByPk(3, {});
  // await owner.createDog({name: 'Toad'});

  // Method 2 : CREATE NEW OWNER AND NEW DOGS
  // IDK WHY THIS DON'T WORK
  // await db.Owner.create({
  //   name: 'Gregory',
  //   dogs: [
  //     {name: 'Toad'},
  //     {name: 'Toadette'}
  //   ]
  // });

  // Method 3 : CREATE NEW DOG AND ATTACH OWNER
  const dog = await db.Dog.create({name: 'Bowser'});
  await dog.createOwner({name: 'Peach'});

  const dogs = await db.Dog.findAll({
    include: db.Owner
  });
  res.json({ dogs });
})
app.get('/dogs/:id', async (req, res) => {
  const { id } = req.params;

  // Eager Loading
  const dog = await db.Dog.findByPk(id, {
    include: db.Owner
  });

  res.json({ dog });
});

app.get('/owners', async (req, res) => {
  const owners = await db.Owner.findAll();
  res.json({ owners });
});
app.get('/owners/:id', async (req, res) => {
  const { id } = req.params;
  // Lazy Loading
  const owner = await db.Owner.findByPk(id, {});
  const dogs = await owner.getDogs();

  res.json({ owner, dogs });
});

/*
1-1: A has one B, B belongs to A
  - ModelA.hasOne(B), ModelB.belongsTo(A)
1-M: A has many B, B belongs to A
  - ModelA.hasMany(B), ModelB.belongsTo(A)
M-M: A belongs to many B, B belongs to many A
  - Must Have Join Table
  - ModelA.belongsToMany(B), ModelB.belongsToMany(A)

  - ModelA.belongsToMany(models.ModelB, {
    through: models.ModelA_ModelB
  });
  - ModelB.belongsToMany(models.ModelA, {
    through: models.ModelA_ModelB
  });
*/

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));