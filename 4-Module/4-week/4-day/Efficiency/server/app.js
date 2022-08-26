// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();
require('express-async-errors');

// Import the models used in these routes - DO NOT MODIFY
const { Author, Book, Review, Reviewer, sequelize } = require('./db/models');
const { Op } = require('sequelize');

// Express using json - DO NOT MODIFY
app.use(express.json());

// STEP #Ob: Test logging behavior - DO NOT MODIFY
app.get('/test-benchmark-logging', async (req, res) => {
  // > 100 ms execution time
  const books = await Book.findAll({
    include: [{ model: Author }, { model: Review }, { model: Reviewer }],
    // Uncomment the lines below to see the data structure more clearly
    // limit: 100,
    // offset: 2000
  });
  res.json(books);
});

// STEP #1: Benchmark a Frequently-Used Query
app.get('/books', async (req, res) => {
  const { maxPrice } = req.query;

  let books = await Book.findAll({
    include: Author,
    where: {
      price: {
        [Op.lt]: maxPrice ? Number(maxPrice) : Infinity,
      },
    },
  });

  res.json(books);
  //! Old
  // let books = await Book.findAll({
  //   include: Author,
  // });
  // // Filter by price if there is a maxPrice defined in the query params
  // if (req.query.maxPrice) {
  //   books = books.filter((book) => book.price < parseInt(req.query.maxPrice));
  // }
  // res.json(books);
});

// 1a. Analyze:

// Record Executed Query and Baseline Benchmark Below:
// Executed (default): SELECT `Book`.`id`, `Book`.`authorId`, `Book`.`title`, `Book`.`description`, `Book`.`date`, `Book`.`price`, `Book`.`createdAt`, `Book`.`updatedAt`, `Book`.`AuthorId`, `Author`.`id` AS `Author.id`, `Author`.`firstName` AS `Author.firstName`, `Author`.`lastName` AS `Author.lastName`, `Author`.`email` AS `Author.email`, `Author`.`birthdate` AS `Author.birthdate`, `Author`.`createdAt` AS `Author.createdAt`, `Author`.`updatedAt` AS `Author.updatedAt` FROM `Books` AS `Book` LEFT OUTER JOIN `Authors` AS `Author` ON `Book`.`AuthorId` = `Author`.`id`;
// Elapsed time: 147ms
// - What is happening in the code of the query itself?

// - What exactly is happening as SQL executes this query?

// 1b. Identify Opportunities to Make Query More Efficient

// - What could make this query more efficient?

// 1c. Refactor the Query in GET /books

// 1d. Benchmark the Query after Refactoring

// Record Executed Query and Baseline Benchmark Below:
// Executed (default): SELECT `Book`.`id`, `Book`.`authorId`, `Book`.`title`, `Book`.`description`, `Book`.`date`, `Book`.`price`, `Book`.`createdAt`, `Book`.`updatedAt`, `Book`.`AuthorId`, `Author`.`id` AS `Author.id`, `Author`.`firstName` AS `Author.firstName`, `Author`.`lastName` AS `Author.lastName`, `Author`.`email` AS `Author.email`, `Author`.`birthdate` AS `Author.birthdate`, `Author`.`createdAt` AS `Author.createdAt`, `Author`.`updatedAt` AS `Author.updatedAt` FROM `Books` AS `Book` LEFT OUTER JOIN `Authors` AS `Author` ON `Book`.`AuthorId` = `Author`.`id` WHERE `Book`.`price` <= 50;
// Elapsed time: 39ms
// Is the refactored query more efficient than the original? Why or Why Not?
// Yes

// STEP #2: Benchmark and Refactor Another Query
app.patch('/authors/:authorId/books', async (req, res) => {
  const author = await Author.findOne({
    include: { model: Book },
    where: {
      id: req.params.authorId,
    },
  });

  if (!author) {
    res.status(404);
    return res.json({
      message: 'Unable to find an author with the specified authorId',
    });
  }

  // for (let book of author.Books) {
  //   book.price = req.body.price;
  //   await book.save();
  // }

  Book.update(
    {
      price: req.body.price,
    },
    {
      where: {
        authorId: author.id,
      },
    }
  );

  const books = await Book.findAll({
    where: {
      authorId: author.id,
    },
  });

  res.json({
    message: `Successfully updated all authors.`,
    books,
  });
});

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
      attributes: ['firstName', 'lastName'],
    },
  });

  res.json(reviews);
});

//! BONUS Step: Possible Solution: 
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

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
  res.json({
    message: 'API server is running',
  });
});

// GET /authors/:authorId/books (test route) - DO NOT MODIFY
app.get('/authors/:authorId/books', async (req, res) => {
  const author = await Author.findOne({
    where: {
      id: req.params.authorId,
    },
  });

  if (!author) {
    res.status(404);
    return res.json({
      message: 'Unable to find an author with the specified authorId',
    });
  }

  const books = await Book.findAll({
    where: { authorId: author.id },
  });

  res.json(books);
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
