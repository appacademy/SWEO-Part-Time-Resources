require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const { WarehouseItem } = require('./db/models');

app.get('/items', async (req, res) => {
  const items = await WarehouseItem.findAll({ where: { isUsed: false } });
  return res.json(items);
});

app.get('/items/:name', async (req, res) => {
  const item = await WarehouseItem.findOne({
    where: { name: req.params.name }
  });
  if (!item) {
    res.status(404);
    return res.json({ message: 'Warehouse Item not found' });
  }
  return res.json(item);
});

app.put('/items/:id', async (req, res) => {
  const { name, price, quantity, isUsed } = req.body;
  const item = await WarehouseItem.findByPk(req.params.id);
  if (!item) {
    res.status(404);
    return res.json({ message: 'Warehouse Item not found' });
  }
  item.name = name;
  item.price = price;
  item.quantity = quantity;
  item.isUsed = isUsed;
  await item.save();
  return res.json(item);
});

app.delete('/items/:id', async (req, res) => {
  const item = await WarehouseItem.findByPk(req.params.id);
  if (!item) {
    res.status(404);
    return res.json({ message: 'Warehouse Item not found' });
  }
  await item.destroy();
  return res.json({ message: 'Successfully deleted' });
});

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}