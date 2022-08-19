// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Import the models used in these routes - DO NOT MODIFY
const { Puppy } = require('./db/models');

// Import Op to perform comparison operations in WHERE clauses - DO NOT MODIFY
const { Op } = require('sequelize');

// Express using json - DO NOT MODIFY
app.use(express.json());

// STEP 1
// All puppies in the database
// No WHERE clause
app.get('/puppies', async (req, res, next) => {
  let allPuppies;

  allPuppies = await Puppy.findAll({ order: ['name'] });
  // allPuppies = await Puppy.findAll({ order: [['name', 'ASC']] });

  res.json(allPuppies);
});

// STEP 2
// All puppies that have been microchipped
// WHERE clause with one exact value
app.get('/puppies/chipped', async (req, res, next) => {
  let chippedPuppies;

  chippedPuppies = await Puppy.findAll({
    // where: {
    //   microchipped: true,
    // },
    where: {
      microchipped: {
        // [Op.eq]: true,
        [Op.is]: true,
      },
    },
    order: [
      ['age_yrs', 'DESC'],
      ['name', 'ASC'],
    ],
  });

  res.json(chippedPuppies);
});

// STEP 3
// One puppy matching a name param
// Finding one record by attribute
// URL /puppies/name/1000/100/999
// /:age/:blueberry
app.get('/puppies/name/:name', async (req, res, next) => {
  let puppyByName;

  // puppyByName = await Puppy.findOne({ where: { name: req.params.name } });

  // const { name } = req.params;
  // puppyByName = await Puppy.findOne({ where: { name } });



  const searchedPuppyName = req.params.name;
  puppyByName = await Puppy.findOne({
    where: {
      name: searchedPuppyName,
    },
  });

  // res.json(puppyByName);
});

// BONUS STEP 5
// All puppies with breed ending in 'Shepherd'
// WHERE clause with a comparison
app.get('/puppies/shepherds', async (req, res, next) => {
  let shepherds;

  shepherds = await Puppy.findAll({
    where: {
      breed: {
        [Op.like]: '%Shepherd',
        // [Op.endsWith]: 'Shepherd',
      },
    },
    order: [['name', 'DESC']],
  });

  res.json(shepherds);
});

// BONUS STEP 6
// All puppies with age_yrs <= 1yr and weight_lbs <= 20lbs
// WHERE clause with multiple attributes and comparisons
app.get('/puppies/tinybabies', async (req, res, next) => {
  let tinyBabyPuppies = await Puppy.findAll({
    // where: {
    //   age_yrs: { [Op.lt]: 1 },
    //   weight_lbs: { [Op.lt]: 20 },
    // },
    // order: [['age_yrs'], ['weight_lbs']],
    where: {
      age_yrs: {
        [Op.lt]: 1,
      },
      weight_lbs: {
        [Op.lt]: 20,
      },
    },
    order: ['age_yrs', 'weight_lbs'],
  });

  res.json(tinyBabyPuppies);
});

// STEP 4
// One puppy matching an id param
// Finding one record by primary key
app.get('/puppies/:id', async (req, res, next) => {
  let puppyById;

  puppyById = await Puppy.findByPk(req.params.id);

  // const { id } = req.params.id;
  // puppyById = await Puppy.findOne({ where: { id } });

  // const idForPuppy = req.params.id;
  // puppyById = await Puppy.findByPk(idForPuppy);

  res.json(puppyById);
});

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
  res.json({
    message: 'API server is running',
  });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
