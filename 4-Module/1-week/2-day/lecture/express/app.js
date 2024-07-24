
//*psuedo DB of dogs
const dogs = [
    {
        dogId: 1,
        name: "Fluffy",
        age: 2
    }
];

let nextDogId = 2;

function getNewDogId() {
    const newDogId = nextDogId;
    nextDogId++;
    return newDogId;
}

//! intialize the express server
const express = require('express');

const app = express();

//! initialize json middleware, this is where the server will handle parsing and requests that have a json body and convert it into useable javascript.
app.use(express.json());


//! server routes will go here, remember order does matter! generally you want to keep the more specific routes towards the top.


//* Get specific dog by id
// app.get('/dogs/:id', (req, res) => {
//     //! can easily get data from req URL from express req obj
//     const { id } = req.params;

//     const dog = dogs.find(el => el.dogId === Number(id));
//     res.status(200);
//     res.json(dog);
// })

// app.put('/dogs/:id', (req, res) => {
//     const { id } = req.params;
//     const { name, age } = req.body;
//     const dog = dogs.find(el => el.dogId === Number(id));

//     dog.name = name || dog.name;
//     dog.age = age || dog.age;

//     res.status(202);

//     res.json(dog);
// })

// app.delete('/dogs/:id', (req, res) => {
//     const { id } = req.params;
//     const dogIndex = dogs.findIndex(el => el.dogId === Number(id));
//     dogs.splice(dogIndex, 1);

//     res.status(200);
//     res.json({ "message": "Successfully deleted" });
// })

//? using app.route

app.route('/dogs/:id')
    .get((req, res) => {
            const { id } = req.params;

            const dog = dogs.find(el => el.dogId === Number(id));
            res.status(200);
            res.json(dog);
    })
    .put((req, res) => {
            const { id } = req.params;
            const { name, age } = req.body;
            const dog = dogs.find(el => el.dogId === Number(id));

            dog.name = name || dog.name;
            dog.age = age || dog.age;

            res.status(202);

            res.json(dog);
    })
    .delete((req, res) => {
            const { id } = req.params;
            const dogIndex = dogs.findIndex(el => el.dogId === Number(id));
            dogs.splice(dogIndex, 1);

            res.status(200);
            res.json({ "message": "Successfully deleted" });
    })


//* Get all dogs route
app.get('/dogs', (req, res) => {
    //! set status code of response.
    res.status(200);

    //! respond using .json and pass the dogs array in.
    res.json(dogs);
})

app.post('/dogs', (req, res) => {
    const { name, age } = req.body;
    const newDog = {
        name,
        age,
        dogId: getNewDogId()
    }
    dogs.push(newDog);
    res.status(201);

    res.json(newDog);

})

//! Error handling in express

app.use((_req, _res, next) => {
    console.log('TEST');
    const err = new Error('Resource not found');
    //! pass error to the next error handler
    next(err);
})

//! number of params of cb in the .use method will determine what kind of middleware it is.
app.use((err, _req, res, _next) => {
    console.log(err);
    res.status(404);

    res.json(err.message);
})


//! set up port and tell express app to listen on port. litsen takes a port num and a cb function to run when it starts listening.
const port = 5000;

app.listen(port, () => console.log('Server is listening on port', port));
