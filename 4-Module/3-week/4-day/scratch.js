const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Server is Live');
});

//* Change a single attribute
// const calico = await Cat.findOne({
//   where: {color: 'Calico'}
// });
// calico.name = 'Toby';
// await calico.save()
//* changing multiple attributes
// const calico = await Cat.findOne({
//   where: {color: 'Calico'}
// });
// calico.set({
//   name: 'Toby',
//   color: 'Orange'
// })
// await calico.save();

// merge set and save
// const calico = await Cat.findOne({
//   where: {color: 'Calico'}
// });
// calico.update({
//   name: 'Toby',
//   color: 'Orange'
// })

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));