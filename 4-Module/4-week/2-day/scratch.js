const express = require('express');
require('dotenv').config();
const { User, Dog } = require('./db/models');


const app = express();
app.use(express.json());

app.get('/dogs', async (req, res) => {
  const dogs = await Dog.findAll({
    order: [['name', 'DESC'], ['microchipped', 'ASC']]
  });
})

app.post('/musicians/:musicianId/instruments', async (req, res) => {
  musicianId = req.params.musicianId;
  instrumentIds = req.body.instrumentIds

  instrumentIds.forEach(id => {
    MusicianInstrument.create({musicianId, id})
  })

  let musician = Musician.findByPk(musicianId);

  res.json({message: `Associated ${musician.name} with instruments ${instrumentIds}.`})
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));