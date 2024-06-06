const express = require('express');

require('dotenv').config()

const app = express();

app.use(express.json());

// 1 - route function 2 parameters (req, res)
// 2 - helper functions 3 parameters (req, res, next)
// 3 - error handler 4 parameters (err, req, res, next)

// shoes -> sneakers, heels, sandals
// shirts -> dress shirts, t-shirts, blouses
// hats - > ball caps, sun hats, beanies

const hatsRouter = require('./routes/hats')

app.use('/hats', hatsRouter);

const validation = (req, res, next) => {
    if(req.body.name.length < 3){
        const err = new Error()
        err.statusCode = 400
    } else {
        next();
    }
}

const errorHandler = (err, req, res, next) => {
    if(err.statusCode === 400){
        res.send("Name must be more than 3 characters");
    } 
    if(err.statusCode !== 400 || err.statusCode  !== 404){
        res.statusCode = 500;
        res.json({'message': "Error occured"})
    } 
    // next(res);
}

app.get('/trees/:id', (req, res) => {
    const { id } = req.params;

    res.send(`Tree at id: ${id} exists`);
})

app.post('/trees', validation, (req, res) => {
    const { name, type, zone } = req.body
    // const treeName = req.body.name;

    const tree = {
        id: 1235,
        name, 
        type,
        zone
    }

    res.json(tree)
});

app.use(errorHandler);


const port = process.env.port;
app.listen(port, () => console.log("Server is listening on port ", port));
