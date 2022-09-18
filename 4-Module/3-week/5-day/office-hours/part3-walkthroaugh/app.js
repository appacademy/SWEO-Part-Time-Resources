require('express-async-errors');
require('dotenv').config();
const { application } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

const {WarehouseItem} = require("./db/models")

app.get("/items", async (req,res)=>{
  // console.log(WarehouseItem);
  const items = await WarehouseItem.findAll({
    where:{
      isUsed: false
    }
  });
  return res.json(items)
})

app.get('/items/:name', async (req,res)=>{
  // console.log(req.params)
  const name = req.params.name
  // console.log("name:", name);
  const itemFound = await WarehouseItem.findOne({
    where:{
      name: name
    }
  })
  console.log("itemFound:", itemFound);
  if(!itemFound){
    res.status(404);
    return res.json({
      message:"Warehouse Item not found"
    })
  }
  console.log("hello world this is after res.json");
  return res.json(itemFound);
})

// update
app.put("/items/:id", async (req,res)=>{
  const id = req.params.id;
  const {name, price, quantity, isUsed} = req.body;

  const itemFoundById = await WarehouseItem.findByPk(id)
  // console.log(itemFoundById);

  // if no match found, return an error message
  if(!itemFoundById){
    res.status(404);
    return res.json({
      message:"Warehouse Item not found"
    })
    
  }
  // update the items from the body
  itemFoundById.set({
    name: name,
    price: price,
    quantity: quantity,
    isUsed: isUsed
  })
  await itemFoundById.save();
  return res.json(itemFoundById)
})


// delete
app.delete("/items/:id", async(req,res)=>{
  const id = req.params.id;
  // find if this item exists first
  const recordFound = await WarehouseItem.findByPk(id);
  console.log("recordFound:", recordFound);

  // if it doesn't exist, return an error message to w/ 404 status
  if(!recordFound){
    res.status(404);
    return res.json({
      "message": "Warehouse Item not found"
    })
  }
  
  //if it exists, delete and return the successful delete response
  await recordFound.destroy();
  return res.json({
    "message": "Successfully deleted"
  })
})

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}