// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();
 const { Book } = require('./db/models');
const { ForeignKeyConstraintError, Association } = require('sequelize');
const user = require('./db/models/user');
const job = require('./db/models/job');
const person = require('./db/models/person');

// Express using json - DO NOT MODIFY
app.use(express.json());

// List of all colors in the database - DO NOT MODIFY
app.get('/books/:genre/readers', async (req, res, next) => {
    const { genre } = req.params;

    // Lazy two steps
    // const book = await Book.findOne({ where: { genre: genre, id: 2 }});

    // const bookReaders = await book.getReaders();






    // Eager one step
    const books = await Book.findAll({ where: { genre: genre}, include: Readers });

    // returned from res.json = [
    //     {
    //         id: 1,
    //         title: 'Anne of Green Gables',
    //         genre: fiction,
    //         Reader: [{
    //             id: 1,
    //             name: 'Layla',
    //             location: 'England'
    //         }]
    //     },
    //     {
    //         id: 2,
    //         title: 'Anne of Green Gables 2',
    //         genre: fiction,
    //         Reader: [{
    //             id: 2,
    //             name: 'John'
    //             location: 'England'
    //         }]
    //     }
    // ];

    res.json(books);
});

app.post('/books/:author_name', async (req, res, next) => {
    const { author_name } = req.params;
    const {title, genre} = req.body;


    // manually and define assocaition
    // const author = await Reader.findOne({where: { name : author_name, author: true}});

    // const newBook = await Book.create({ title, genre, author_id: author.id});

    // dynamically creating association and new record at the same time
    // option 1
    // await author.createBook({ title, genre})

    // option 2
    const author = await Reader.findOne({where: { name : author_name, author: true}});

    const newBook = await Book.create({ title, genre});

    author.addBook(newBook);

    // author.addBooks([newBook, book2]);
});

// Set port and listen for incoming requests - DO NOT MODIFY
if (require.main === module) {
    const port = 8000;
    app.listen(port, () => console.log('Server is listening on port', port));
} else {
    module.exports = app;
}
