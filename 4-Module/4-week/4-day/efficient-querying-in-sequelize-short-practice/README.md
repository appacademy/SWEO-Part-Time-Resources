# Practice: Efficient Querying in Sequelize

In this guided practice, you will be using Sequelize's benchmarking functionality
to analyze the efficiency of provided queries. You will then refactor the queries to
try to make them more efficient.

## Getting started

Download starter. 

Execute the __setup-commands.sh__ script from the root directory of this
practice. 

```shell
sh setup-commands.sh
```

View the contents of the script to see the commands that are executed. View the
results in the terminal to confirm that setup was successful and the `Books`,
`Authors`, `Reviews`, and `Reviewers` tables exists in your database and you
have seed data present. These tables will be very large!

Explore the models and their associations in the __db/models__ directory.

Start your development server using `npm run dev`, and navigate to
`localhost:5000`.

## Step #0: Configure and Test Benchmarking and Logging

To begin, you will need to configure benchmarking, and then run a test query to
make sure that your benchmarking and logging configuration is working as
expected.

### 0a: Configure Benchmarking

Set up benchmarking functionality in the __config/database.js__ file.

- Add the `benchmark` option

Refer to the Benchmark Sequelize reading or the Sequelize documentation for help
with this configuration.

### 0b: Test Logging Behavior

In __app.js__, you will see a route handler for the
`GET /test-benchmark-logging` endpoint. Navigate to that endpoint, and check
the console to see the data that is logged.

If your configuration was correct, you should see something like this in the
terminal console. At the end of the executed SQL command, you should see the
benchmark time value.

```shell
Server is listening on port 5000
Executed (default): SELECT `Book`.*, `Author`.`id` AS `Author.id`,
`Author`.`firstName` AS `Author.firstName`, `Author`.`lastName` AS
`Author.lastName`, `Author`.`email` AS `Author.email`, `Author`.`birthdate`
AS `Author.birthdate`, `Author`.`createdAt` AS `Author.createdAt`,
`Author`.`updatedAt` AS `Author.updatedAt`, `Reviews`.`id` AS `Reviews.id`,
`Reviews`.`bookId` AS `Reviews.bookId`, `Reviews`.`reviewerId` AS
`Reviews.reviewerId`, `Reviews`.`content` AS `Reviews.content`, `Reviews`.`date`
AS `Reviews.date`, `Reviews`.`createdAt` AS `Reviews.createdAt`,
`Reviews`.`updatedAt` AS `Reviews.updatedAt`, `Reviews`.`BookId` AS
`Reviews.BookId`, `Reviews`.`ReviewerId` AS `Reviews.ReviewerId` FROM
(SELECT `Book`.`id`, `Book`.`authorId`, `Book`.`title`, `Book`.`description`,
`Book`.`date`, `Book`.`price`, `Book`.`createdAt`, `Book`.`updatedAt`,
`Book`.`AuthorId` FROM `Books` AS `Book` LIMIT 9000, 10) AS `Book`
LEFT OUTER JOIN `Authors` AS `Author` ON `Book`.`AuthorId` = `Author`.`id`
LEFT OUTER JOIN `Reviews` AS `Reviews` ON `Book`.`id` =
`Reviews`.`BookId`; Elapsed time: 100ms # <---This is the timing benchmark
```

_If you only see the executed SQL command in the console, check to make sure
that the `benchmark` option is set up correctly in Step #0a._

> __Important Note:__ When you use the benchmarking functionality in Sequelize,
> you will see a range of execution times as you run each query. When completing
> the exercises below, run each query at least 5-10 times (by refreshing the
> browser) and estimate the _average_ execution time.

## Step #1: Benchmark a Frequently-Used Query

In __app.js__, you are given a route handler for the `GET /books` endpoint. This
endpoint is frequently accessed, and the most common query to this database is
finding all of the books that are under a specific price point, `maxPrice`. When
the `maxPrice` query parameter is included, the results for this query should
display all of the associated data for each book that meets this price criteria,
including the book's author, all reviews, and information about each reviewer.

### 1a: Benchmark and Analyze the Original Query

- Navigate to `/books?maxPrice=50`, and look at what is logged to the console
- Record the executed SQL commands and the benchmark time in __app.js__ as a
  comment

Next, analyze the query and the executed SQL command.

- What is happening in the query?
- What exactly is happening as SQL executes this query?

Jot down a few notes for your analysis.

### 1b: Identify Opportunities to Make Query More Efficient

Look at your notes from Step #1a. Do you see any opportunities for making this
query more efficient?

> **Pro Tip**: When working in Sequelize, you still have all of the `sqlite3`
> tools available to you that you used when working with raw SQL. If it is
> helpful, you can execute `EXPLAIN QUERY PLAN` in the `sqlite3` CLI to
> further evaluate the raw SQL query that you can see in your console.

```bash
sqlite3 db/dev.db
```

In __app.js__, record your notes on what could be done to help improve the
efficiency of the query.

### 1c: Refactor the Query

Based on your ideas from Step #1b, refactor the query in step #1a to make it
more efficient.

### 1d: Benchmark the Query after Refactoring

How long did it take for the new query to execute? Is it more efficient than the
original? Why or Why not?

If the new query is not more efficient, try another refactoring approach until
you have reduced the execution time.

## STEP #2: Benchmark and Refactor Another Query

Follow the same benchmarking and refactoring process to refactor the
`PATCH /authors/:authorId/books` route handler.

Imagine that the some of the authors wanted to sell all their books at the same
set price. Since many authors wanted this feature, you decided to replace all of
the `price` values on all the books of a single author with a specified price.
The goal of the `PATCH` request is to replace the `price` of every book of a
single author (specified the `:authorId` route parameter) with the `price` in
the body of the request.

Use Postman to execute the provided `PATCH /authors/1/books` request with a body
of `{"price": 19.99}` (JSON syntax). Get a baseline benchmark time. Re-run the
request multiple times with each time using a different `:authorId` route
parameter to get a better baseline benchmark time.

Then, refactor the query to be more efficient, and compare your new benchmark
time to the original.

You can verify that the `PATCH` request was successful by navigating to
`GET /authors/:authorId/books` to see the updated prices on an author's books.

## Congratulations!

You are now able to refactor code to increase efficiency and optimize
performance. You are able to use a benchmarking process to analyze the
efficiency of your queries, and then use the benchmark data to make them more
efficient.
