const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is Live');
});

//*SELECT
  app.get('/cats', async (req, res) => {
    // SELECT * FROM Cats;
    const cats = await Cat.findAll()
    // SELECT name, color FROM Cats
    cats = await Cat.findAll({
      attributes: ['color', 'name']
    });
  });
  app.get('/cats/first', async (req, res) => {
    // SELECT * FROM Cats LIMIT 1;
    const cats = await Cat.findOne()
    // SELECT name, color FROM Cats LIMIT 1;
    cats = await Cat.findOne({
      attributes: ['color', 'name']
    });
  });
  app.get('/cats/:id', async (req, res) => {
    // SELECT * FROM Cats LIMIT 1;
    const id = req.params.id
    const cat = await Cat.findByPk(id);
  });
//*INSERT
  app.get('/', async (req, res) => {
    const newCat = Cat.build({name: 'Snowball', color: 'White'});
    await newCat.save();

    newCat = Cat.create({name: 'Snowball', color: 'White'});
  })
//*UPDATE
app.get('/', async (req, res) => {
  const calico = await Cat.findOne({
    where: {color: 'Calico'}
  });
  // calico.name = 'Toby';
  // calico.set({
  //   name: 'Toby',
  //   color: 'Orange'
  // });
  // await calico.save();

  calico.update({
    name: 'Toby'
  });
})
//*DELETE
app.get('/cats/delete', async (req, res) => {
  const cat = await Cat.findOne({ where: {id : 2} });
  await cat.destroy();
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));