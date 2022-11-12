require('express-async-errors');
require('dotenv').config();
const { WarehouseItem } = require('./db/models');
const db = require('./db/models');

const express = require('express');
const app = express();

app.use(express.json());


app.get('/items', async (req, res) => {
  const items = await db.WarehouseItem.findAll({
    where: {
      isUsed: false
    }
  })
  res.status(200)
  res.json(items)
})

app.get('/items/:name', async (req, res) => {
  const { name } = req.params
  const item = await db.WarehouseItem.findOne({
    where: {
      name: name
    }
  })
  if (item) {
    res.status(200)
    res.json(item)
  } else {
    res.status(404)
    res.json({ "message": "Warehouse Item not found" })
  }
})

app.put('/items/:id', async (req, res) => {
  const { id } = req.params
  const { name, price, quantity, isUsed } = req.body

  // const item = await WarehouseItem.findOne({
  //   where: {
  //     id: id
  //   }
  // })
  const item = await db.WarehouseItem.findByPk(id)
  if (item) {
    item.name = name
    item.price = price
    item.quantity = quantity
    item.isUsed = isUsed
    item.save()
    res.status(200)
    res.json(item)
  } else {
    res.status(404)
    res.json({ "message": "Warehouse Item not found" })
  }
})

app.delete('/items/:id', async (req, res) => {
  const { id } = req.params
  // const item = await WarehouseItem.findOne({
  //   where: {
  //     id: id
  //   }
  // })
  const item = await db.WarehouseItem.findByPk(id)
  if (item) {
    item.destroy()
    res.status(200)
    res.json({ "message": "Successfully deleted" })
  } else {
    res.status(404)
    res.json({ "message": "Warehouse Item not found" })
  }
})

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}