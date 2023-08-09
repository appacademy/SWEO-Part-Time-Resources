// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

const { Tree } = require('../db/models');
const { Sequelize } = require('sequelize');
const UpdateTrees = require('./db/migrations/5-update-trees');
const tree = require('./db/models/tree');

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();

// Express using json - DO NOT MODIFY
app.use(express.json());


// app.get('/trees', async (req, res, next) => {
//     // SELECT * FROM trees;

//     const trees = await Tree.findAll();

    res.json(trees)
    const trees = await Tree.findAll({attributes: ['location', 'age']});

    res.json(trees);

    // res returns this to the backend
    // {
    //     species: 'Apple',
    //     location: 'Vermont',
    //     age: 40
    //   }
// });

app.get('/trees/apple', async (req, res, next) => {
    // SELECT * FROM trees WHERE species='Apple';

    const appleTrees = await Tree.findAll({
        where: {species: 'Apple'},
        order: [['age', DESC]],
        limit: 5
    });

    res.json(appleTrees);

    // res returns this to the backend
    // {
    //     species: 'Apple',
    //     location: 'Vermont',
    //     age: 40
    //   }
});

app.post('/trees', async (req, res, next) => {
    // SELECT * FROM trees WHERE species='Apple';

    // need to save for it to update the database
    // const plumTree = await Tree.build({species: 'Plum', location: 'maryland', age: 10});

    
    // await plumTree.save();
    
    // saves automatically
    const plumTree = await Tree.create({species: 'Plum', location: 'maryland', age: 10});
    await Tree.findOne({where: {species: 'Plum'}});

    plumTree.location = 'New Zealand';

    await plumTree.validate();

    await plumTree.save();

    res.json(plumTree);
});

app.put('/trees/:tree_id', async (req, res, next) => {
    const tree = await Tree.findOne({where: {id: `${tree_id}`}});
    const { location, age } = req.body;

    // need to save for it to update the database
    tree.set({
        location,
        age
    });

    await tree.save()


    // --------------------------
    tree.location = 'New Zealand';

    await tree.validate();

    await tree.save();

    // -------------------------
    tree.update({
        location,
        age
    });
   
});

app.put('/trees/:species', async (req, res, next) => {
   await Tree.update({
        location,
        age
   }, {
    where: { species: { [Sequelize.Op.startsWith]: 'Pl'}}
   })
});

app.delete('/trees', async (req, res, next) => {
    await Tree.destory();
});

app.delete('/trees/:tree_id', async (req, res, next) => {
    const { tree_id } = req.params;
    const tree = await Tree.findOne({where: {id: `${tree_id}`}});

    tree.destory();
});





// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
