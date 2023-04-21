const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is Live');
});

//*SELECT
// select all cats
// SELECT * FROM Cats;
app.get('/cats/', async (req, res) => {
  const cats = await Cat.findAll()
})
// select the first cat
// SELECT * FROM Cats LIMIT 1;
app.get('/cats/first', async (req, res) => {
  const cats = await Cat.findOne()
})
// select cats info as specified
// SELECT color FROM Cats;
app.get('/cats/color', async (req, res) => {
  const cats = await Cat.findAll({
    attributes: ['color']
  });
})
// select cat by pk
app.get('/cats/:id', async (req, res) => {
  let id = req.params.id;
  const cats = await Cat.findByPk(id);
})
//*INSERT
//! Method 1
app.post('/cats', async (req, res) => {
  const newCat = Cat.build({ name: 'Snowball', color: 'white' });
  await newCat.save();
});
//! Method 2
app.post('/cats', async (req, res) => {
  const newCat = Cat.create({ name: 'Snowball', color: 'white' });
});

// insert multiple
app.post('/cats/multi', async (req, res) => {
  const newCats = await bulkCreate([
    { name: 'Snowball', color: 'White' },
    { name: 'Diva', color: 'Black' },
    { name: 'Toby', color: 'Orange' }
  ])
});
// check if new build meets validation
app.post('/cats/validate', async (req, res) => {
  const newCat = Cat.build({ name: 'Snowball', color: 'white' });
  await newCat.validate();
  await newCat.save();
});

//*UPDATE
// change one attribute
app.put('/cats/calico', async (req, res) => {
  const calico = await Cat.findOne({
    where: { color: 'Calico' }
  });
  calico.name = 'Toby';
  await calico.save()
});
// change multiple attributes
app.put('/cats/calico', async (req, res) => {
  const calico = await Cat.findOne({
    where: { color: 'Calico' }
  });
  calico.set({
    name: 'Toby',
    color: 'Orange'
  })
  await calico.save();
});
// change and save at same time
app.put('/cats/:id', async (req, res) => {
  const calico = await Cat.findOne({
    where: { color: 'Calico' }
  });
  calico.update({
    name: 'Toby',
    color: 'Orange'
  });
});
//*DELETE
app.delete('/cats/:id', async (req, res) => {
  const id = req.params.id;
  const cat = await Cat.findOne({ where: { id } });
  await cat.destroy();
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));