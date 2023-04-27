// Aggregate Data
// lazy loading
let dogs;
dogs = await Dog.findAll();

await dogs.count();
await dogs.min('age');
await dogs.max('age');
await dogs.sum('age');
// ---------------------------------------

dogs = await Dog.findAll({
  attributes: {
    include : [
      [
        sequelize.fn('COUNT', sequelize.col('age')), 'count_age'
      ]
    ]
  }
});
// eager loading
await Dog.findAll({
include: {
  model: Owner,
  attributes: []
},
attributes: {
  include: [
    'name', 'age', 
    [
      sequelize.fn('SUM', sequelize.col('Owner.age')), 'count_owner_ages'
    ]
  ]
},
});

// PAGINATION
// SELECT * FROM dogs LIMIT 50 OFFSET 50;

// GET /dogs?page=5&results=20
app.get('/dogs', async (req, res) => {
const {page, results} = req.query;
// req.query.page
// req.query.results

let dogs = await Dog.findAll({
  limit: results,  //20
  offset: results * (page - 1) //20 * ()
});

});

// SEARCH FILTERS

// GET /dogs?minAge=0&maxAge=4
// GET /dogs?name=Davie
app.get('/dogs', async (req, res) => {
const {minAge, maxAge} = req.query;
const {name} = req.query;

// let dogs = await Dog.findAll({
//   where: {
//     [Op.and]: [
//       { age: {[Op.gte]: minAge} },
//       { age: {[Op.lte]: maxAge} }
//     ]
//   }
// });
let dogs = await Dog.findAll({
  where: {
    name: name
  }
});

});

// {id, name, age, color, microchipped}

// ADDING INDEX TO COLUMN
// IN A MIGRATION FILE
await queryInterface.addIndex('Dogs', ['age', 'color'], {}); // dogs_age_color
await queryInterface.removeIndex('Dogs', ['age', 'color']);