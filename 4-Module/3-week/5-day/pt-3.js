require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const { WarehouseItem } = require('./db/models')

app.get('/items', async (req, res) =>{
  // console.log("AM I IN THE ROUTE")

  let items = await WarehouseItem.findAll({where: {isUsed: false}})
  // console.log("ITEMS DEBUGGGG", items)
  // let items = await WarehouseItem.findAll()
  // console.log("DEBUGGING", items)
  res.json(items)

})

app.put('/items/:id', async (req, res) =>{
  // console.log("AM I IN THE ROUTE")
const {name, price, quantity, isUsed} = req.body
// let name1 = req.body.name
// console.log("NAME1 DEBUGGER", name1)
// console.log("DEBUGGER", name, price, quantity, isUsed)
// console.log(req.params.id)
  let item = await WarehouseItem.findByPk(req.params.id)
// console.log("DEBUGGGG", item)
if(!item){
  res.status(404)
  res.json({ message: 'Warehouse Item not found' })
}
  // console.log("ITEM", item.name)
  item.name = name;
  item.price = price;
  item.quantity = quantity;
  item.isUsed = isUsed;
  await item.save()
  // console.log("ITEMS DEBUGGGG", items)
  // let items = await WarehouseItem.findAll()
  // console.log("DEBUGGING", items)
  res.json(item)

})

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}
