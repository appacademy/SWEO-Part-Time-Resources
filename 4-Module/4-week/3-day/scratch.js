//* AGGREGATES
// {name:'Poppy', age:'0.5'}
// {name:'Patches', age:'1.0'}
// {name:'Lula', age:'7.0'}
// {name:'Jimbo', age:'2.5'}

//* LAZY LOADING
await Dog.count()    // 4
await Dog.min('age') // 0.5
await Dog.max('age') // 7.0
await Dog.sum('age') // 11.0

await Dog.findAll({
  attributes: [
    [ sequelize.fn('COUNT', sequelize.col('microchipped')), 'countMicrochipped' ]
  //[ sequelize.fn('function name', sequelize.col('column name')), 'aggData name']
  //SELECT COUNT(microchipped) AS countMicrochipped FROM dogs;
  ]
})
//* EAGER LOADING
await Owner.findAll({
  include: {
    model: Dogs,
    attributes: []
  },
  attributes: [
    'id', 'firstName', 'lastName',
    [ sequelize.fn('COUNT', sequelize.col('Dogs.id')), 'dogCount' ],
    [ sequelize.fn('AVG', sequelize.col('Dogs.age')), 'avgDogAge']
  ]
})

//* PAGINATION
// GET /dogs?page=5
app.get('/dogs', async (req, res) => {
  const { page } = req.query;
  const size = 5;

  const dogs = await Dog.findAll({
    limit: size,              // show 5
    offset: (page - 1) * size // show dogs 21-25
  })
});

//* SEARCH FILTERS
// GET /dogs?minAge=0&maxAge=4
app.get('/dogs', async (req, res) => {
  const {minAge, maxAge} = req.query;

  const dogs = await Dog.findAll({
    where: {
      [Op.and] : [
        {age: {[Op.gte]: minAge}},
        {age: {[Op.lte]: maxAge}}
      ]
    }
  })
});
// GET /dogs?color=red
app.get('/dogs', async (req, res) => {
  const { color } = req.query;

  const dogs = await Dog.findAll({
    where: {
      color: color
    }
  });
});

//* ADDING INDEXES
  //! IN MIGRATION FILE
  // Add Index
  await queryInterface.addIndex('Dogs', ['color', 'age'], {});
  // Remove Index
  await queryInterface.removeIndex('Dogs', ['color', 'age']);