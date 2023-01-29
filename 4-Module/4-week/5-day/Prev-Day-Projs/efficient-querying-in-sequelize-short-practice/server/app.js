// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();
require('express-async-errors');

// Import the models used in these routes - DO NOT MODIFY
const { Author, Book, Review, Reviewer, sequelize } = require('./db/models');
const { Op } = require("sequelize");


// Express using json - DO NOT MODIFY
app.use(express.json());




// STEP #Ob: Test logging behavior - DO NOT MODIFY
app.get('/test-benchmark-logging', async (req, res) => {   // > 100 ms execution time
    const books = await Book.findAll({
        include: [
            { model: Author }, 
            { model: Review },
            { model: Reviewer }
        ],
        // Uncomment the lines below to see the data structure more clearly
        // limit: 100,
        // offset: 2000
    });
    res.json(books);
});


// STEP #1: Benchmark a Frequently-Used Query
//!!ADD
// app.get('/books', async (req, res) => {

    // let books = await Book.findAll({
        // include: Author, 
    // });

    // // Filter by price if there is a maxPrice defined in the query params
    // if (req.query.maxPrice) {
        // books = books.filter(book => book.price < parseInt(req.query.maxPrice));
    // };
    // res.json(books);
// });
//!!END_ADD

    // 1a. Analyze:

        // Record Executed Query and Baseline Benchmark Below:
            //!!START SILENT
            // Executed (default): SELECT `Book`.`id`, `Book`.`authorId`, `Book`.`title`, `Book`.`description`, `Book`.`date`, `Book`.`price`, `Book`.`createdAt`, `Book`.`updatedAt`, `Book`.`AuthorId`, `Author`.`id` AS `Author.id`, `Author`.`firstName` AS `Author.firstName`, `Author`.`lastName` AS `Author.lastName`, `Author`.`email` AS `Author.email`, `Author`.`birthdate` AS `Author.birthdate`, `Author`.`createdAt` AS `Author.createdAt`, `Author`.`updatedAt` AS `Author.updatedAt` FROM `Books` AS `Book` LEFT OUTER JOIN `Authors` AS `Author` ON `Book`.`AuthorId` = `Author`.`id`; Elapsed time: 165ms
            //!!END

        // - What is happening in the code of the query itself?


        // - What exactly is happening as SQL executes this query? 
 



// 1b. Identify Opportunities to Make Query More Efficient

    // - What could make this query more efficient?


// 1c. Refactor the Query in GET /books


//!!START SILENT
app.get('/books', async (req, res) => { 

    const books = await Book.findAll({
        include: Author, 
        // Use a ternary statement to filter by price if there is a maxPrice 
        // defined in the query params, otherwise return all books
        where: req.query.maxPrice ? {
            price: { [Op.lt]: req.query.maxPrice }
        } : {}
    });

    res.json(books);
});
//!!END

// 1d. Benchmark the Query after Refactoring

    // Record Executed Query and Baseline Benchmark Below:
        //!!START SILENT
        // Executed (default): SELECT `Book`.`id`, `Book`.`authorId`, `Book`.`title`, `Book`.`description`, `Book`.`date`, `Book`.`price`, `Book`.`createdAt`, `Book`.`updatedAt`, `Book`.`AuthorId`, `Author`.`id` AS `Author.id`, `Author`.`firstName` AS `Author.firstName`, `Author`.`lastName` AS `Author.lastName`, `Author`.`email` AS `Author.email`, `Author`.`birthdate` AS `Author.birthdate`, `Author`.`createdAt` AS `Author.createdAt`, `Author`.`updatedAt` AS `Author.updatedAt` FROM `Books` AS `Book` LEFT OUTER JOIN `Authors` AS `Author` ON `Book`.`AuthorId` = `Author`.`id` WHERE `Book`.`price` < 50; Elapsed time: 65ms
        //!!END

    // Is the refactored query more efficient than the original? Why or Why Not?





// STEP #2: Benchmark and Refactor Another Query
//!!ADD
// app.patch('/authors/:authorId/books', async (req, res) => {
    // const author = await Author.findOne({
        // include: { model: Book },
        // where: {
            // id: req.params.authorId
        // }
    // });

    // if (!author) {
        // res.status(404);
        // return res.json({
            // message: 'Unable to find an author with the specified authorId'
        // });
    // }

    // for (let book of author.Books) {
        // book.price = req.body.price;
        // await book.save();
    // }

    // const books = await Book.findAll({
        // where: {
            // authorId: author.id
        // }
    // });

    // res.json({
        // message: `Successfully updated all authors.`,
        // books
    // });
// });
//!!END_ADD

//!!START SILENT
app.patch('/authors/:authorId/books', async (req, res) => {
    const author = await Author.findOne({ // ~5 ms
        where: {
            id: req.params.authorId
        }
    });

    if (!author) {
        res.status(404);
        return res.json({ message: 'Unable to find an author with the specified authorId' });
    }


    await Book.update(
        {
            price: req.body.price
        },
        {
            where: {
                authorId: author.id
            }
        }
    );

    const books = await Book.findAll({
        where: {
            authorId: author.id
        }
    });

    res.json({
        message: `Successfully updated all authors.`,
        books
    });
});

// Baseline Benchmark and SQL:
    // 1. Query: ~ 5 sec
        // Executed (default): SELECT `id`, `firstName`, `lastName`, `email`, `birthdate`, `createdAt`, `updatedAt` FROM `Authors` AS `Author` WHERE `Author`.`id` = '1'; Elapsed time: 2ms
    // 2. Updates: Runs an UPDATE command 10 times, similar to command below:
        // ~ 5 sec each UPDATE
        // Executed (default): UPDATE `Books` SET `price`=$1,`updatedAt`=$2 WHERE `authorId` = $3; {"$1":20,"$2":"2022-02-25 20:56:42.188 +00:00","$3":"1"} Elapsed time: 6ms
    // 3. Query: ~ 5 sec
        // Executed (default): SELECT `Author`.`id`, `Author`.`firstName`, `Author`.`lastName`, `Author`.`email`, `Author`.`birthdate`, `Author`.`createdAt`, `Author`.`updatedAt`, `Books`.`id` AS `Books.id`, `Books`.`authorId` AS `Books.authorId`, `Books`.`title` AS `Books.title`, `Books`.`description` AS `Books.description`, `Books`.`date` AS `Books.date`, `Books`.`price` AS `Books.price`, `Books`.`createdAt` AS `Books.createdAt`, `Books`.`updatedAt` AS `Books.updatedAt`, `Books`.`AuthorId` AS `Books.AuthorId` FROM `Authors` AS `Author` LEFT OUTER JOIN `Books` AS `Books` ON `Author`.`id` = `Books`.`AuthorId` WHERE `Author`.`id` = 1; Elapsed time: 2ms

// Solution Benchmark and SQL:
    // 1. Query: ~ 5 sec
        // Executed (default): SELECT `id`, `firstName`, `lastName`, `email`, `birthdate`, `createdAt`, `updatedAt` FROM `Authors` AS `Author` WHERE `Author`.`id` = '1'; Elapsed time: 2ms
    // 2. Single Update: ~ 5 sec
        // Executed (default): UPDATE `Books` SET `price`=$1,`updatedAt`=$2 WHERE `authorId` = $3; {"$1":20,"$2":"2022-02-25 20:56:42.188 +00:00","$3":"1"} Elapsed time: 6ms
    // 3 Query: ~ 5 sec
        // Executed (default): SELECT `Author`.`id`, `Author`.`firstName`, `Author`.`lastName`, `Author`.`email`, `Author`.`birthdate`, `Author`.`createdAt`, `Author`.`updatedAt`, `Books`.`id` AS `Books.id`, `Books`.`authorId` AS `Books.authorId`, `Books`.`title` AS `Books.title`, `Books`.`description` AS `Books.description`, `Books`.`date` AS `Books.date`, `Books`.`price` AS `Books.price`, `Books`.`createdAt` AS `Books.createdAt`, `Books`.`updatedAt` AS `Books.updatedAt`, `Books`.`AuthorId` AS `Books.AuthorId` FROM `Authors` AS `Author` LEFT OUTER JOIN `Books` AS `Books` ON `Author`.`id` = `Books`.`AuthorId` WHERE `Author`.`id` = 1; Elapsed time: 2ms
//!!END



// BONUS Step: Benchmark and Add Index
// Examples:
    // GET /reviews?firstName=Daisy&lastName=Herzog
    // GET /reviews?firstName=Daisy
    // GET /reviews?lastName=Herzog
app.get('/reviews', async (req, res) => {
    const { firstName, lastName } = req.query;

    // Check values in query parameters to define where conditions of the query
    const whereClause = {};
    if (firstName) whereClause.firstName = firstName;
    if (lastName) whereClause.lastName = lastName;

    const reviews = await Review.findAll({
        include: {
            model: Reviewer, 
            where: whereClause,
            attributes: ['firstName', 'lastName']
        },
    });

    res.json(reviews);
});

//!!START SILENT
// BONUS Step: Possible Solution: 
    // Baseline benchmark: ~5s
        // Executed (default): SELECT `Review`.`bookId`, `Review`.`reviewerId`,
        // `Review`.`content`, `Review`.`date`, `Review`.`createdAt`,
        // `Review`.`updatedAt`, `Review`.`BookId`, `Review`.`ReviewerId` FROM
        // `Reviews` AS `Review` INNER JOIN `Reviewers` AS `Reviewer` ON
        // `Review`.`ReviewerId` = `Reviewer`.`id` AND (`Reviewer`.`firstName` =
        // 'Daisy' AND `Reviewer`.`lastName` = 'Herzog'); Elapsed time: 4ms
        
    // Add an index on the Reviewer Table across the firstName and
    // lastName columns
        // npx sequelize-cli migration:generate --name add-reviewer-name-index

    // New benchmark: ~ 5s
        // Executed (default): SELECT `Review`.`bookId`, `Review`.`reviewerId`,
        // `Review`.`content`, `Review`.`date`, `Review`.`createdAt`,
        // `Review`.`updatedAt`, `Review`.`BookId`, `Review`.`ReviewerId` FROM
        // `Reviews` AS `Review` INNER JOIN `Reviewers` AS `Reviewer` ON
        // `Review`.`ReviewerId` = `Reviewer`.`id` AND (`Reviewer`.`firstName` =
        // 'Daisy' AND `Reviewer`.`lastName` = 'Herzog'); Elapsed time: 5ms
        
    // Remove the index: It did not change the executed SQL or benchmark time
//!!END


// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
    res.json({
        message: "API server is running"
    });
});

// GET /authors/:authorId/books (test route) - DO NOT MODIFY
app.get('/authors/:authorId/books', async (req, res) => {
    const author = await Author.findOne({
        where: {
            id: req.params.authorId
        }
    });

    if (!author) {
        res.status(404);
        return res.json({ message: 'Unable to find an author with the specified authorId' });
    }

    const books = await Book.findAll({
        where: { authorId: author.id }
    });

    res.json(books);
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
