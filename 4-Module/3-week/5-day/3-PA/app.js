require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

const { WarehouseItem } = require('./db/models');

const { Op } = require('sequelize');

app.use(express.json());

app.get('/items', async (req, res) => {
  let newItems = await WarehouseItem.findAll({
    where: {
      isUsed: false,
    },
  });

  res.json(newItems);
});

app.get('/items/:name', async (req, res) => {
  // const { name } = req.params;
  // let namedItem = await WarehouseItem.findOne({ where: { name } });

  let namedItem = await WarehouseItem.findOne({
    where: {
      name: req.params.name,
    },
  });

  if (!namedItem) {
    res.status(404).json({
      message: 'Warehouse Item not found',
    });
  }

  res.json(namedItem);
});

app.put('/items/:id', async (req, res) => {
  const { id } = req.params; // these are the same
  // const id = req.params.id; // these are the same

  const { name, price, quantity, isUsed } = req.body;

  const itemToUpdate = await WarehouseItem.findOne({ where: { id } });
  // const itemToUpdate = await WarehouseItem.findOne({ where: { id: id } });

  if (!itemToUpdate) {
    res.status(404).json({
      message: 'Warehouse Item not found',
    });
  }
  //! // Version 1
  // itemToUpdate.name = name;
  // itemToUpdate.price = price;
  // itemToUpdate.quantity = quantity;
  // itemToUpdate.isUsed = isUsed;
  // await itemToUpdate.save();

  //! // Version 2
  await itemToUpdate.update({ name, price, quantity, isUsed });

  //! //  Version 3
  // await itemToUpdate.update({
  //   name: name,
  //   price: price,
  //   quantity: quantity,
  //   isUsed: isUsed,
  // });
  res.json(itemToUpdate);
});

//! Using find by PK
// app.put('/items/:id', async (req, res) => {
//   const { name, price, quantity, isUsed } = req.body;

//   const updatedItem = await WarehouseItem.findByPk(req.params.id);

//   if (!updatedItem) {
//     res.status(404);
//     return res.json({
//       message: 'Warehouse Item not found',
//     });
//   }
//   await updatedItem.update({
//     name: name,
//     price: price,
//     quantity: quantity,
//     isUsed: isUsed,
//   });
//   return res.json(updatedItem);
// });

app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;

  const itemToDelete = await WarehouseItem.findByPk(id);
  // const itemToDelete = await WarehouseItem.findOne({ where: { id } });

  if (!itemToDelete) {
    res.status(404).json({
      message: 'Warehouse Item not found',
    });
  }

  await itemToDelete.destroy();

  res.json({
    message: 'Successfully deleted',
  });
});

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}
