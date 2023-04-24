const express = require('express');
require('dotenv').config();
const { User, Dog } = require('./db/models');


const app = express();
app.use(express.json());

app.get('/', async (req, res) => {
  // const user = await User.findOne({
  //   where: { id: [1] },
  //   attributes: ['name', 'id']
  // });
  // // const dogs = await user.getDogs({
  // //   attributes: ['name', 'id']
  // // });
  // await user.createDog({ name: 'Junior' });



  const dog = await Dog.create({name:'Starbucks'});
  await dog.createUser({name:'James'});
  
  const dogs = await Dog.findAll({
    attributes: ['name', 'id', 'user_id']
  });

  // let user = await User.findOne({
  //   where : {id: 1},
  //   attributes: ['name', 'id'],
  //   include: Dogs
  // })
  // EXAMPLES
  // const preference = await user.getPreferences();
  // const books = await user.getBooks();

  res.json({ dogs });
});

/*
1-1 : A has one B, B belongs to A
  - hasOne, belongsTo
1-M : A has many B, B belongs to A
  - hasMany, belongsTo
M-M : A belongs to many B, B belongs to many A
  - requires a Join Table
  - belongsToMany
*/

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));