// Instantiate Express and the application - DO NOT MODIFY
const express = require('express');
const app = express();

// Import environment variables in order to connect to database - DO NOT MODIFY
require('dotenv').config();
require('express-async-errors');

// Import the models used in these routes - DO NOT MODIFY
const { Musician, Band, Instrument } = require('./db/models');

// Express using json - DO NOT MODIFY
app.use(express.json());

// ADVANCED BONUS: Reduce Pagination Repetition
//! Start by giving the func a default value for size and page.
//! If you don't provide one, 5 & 1 are used instead
const paginator = ({ defaultSize = 5, defaultPage = 1 }) => {
  //! now we return a middleware function for our routes to use
  return (req, res, next) => {
    let { page, size } = req.query;

    if (!page) page = 1;
    if (!size) size = 3;

    page = Number(page);
    size = Number(size);

    const pagination = {};
    if (page >= 1 && size >= 1) {
      pagination.limit = size;
      pagination.offset = size * (page - 1);
    }
    //! Save the pagination object as a key on the request so we can use it
    //! wherever we want!
    req.pagination = pagination;
    next();
  };
};
//! I use this in the instruments route

app.get('/musicians', async (req, res, next) => {
  // Parse the query params, set default values, and create appropriate
  // offset and limit values if necessary.
  let { page, size } = req.query;

  let limit, offset;

  if (!page) page = 1;
  if (!size) size = 5;

  page = Number(page);
  size = Number(size);

  if (page >= 1 && size >= 1) {
    limit = size;
    offset = size * (page - 1);
  }

  console.log(page, size, limit, offset);

  // Query for all musicians
  // Include attributes for `id`, `firstName`, and `lastName`
  // Include associated bands and their `id` and `name`
  // Order by musician `lastName` then `firstName`
  const musicians = await Musician.findAll({
    order: [['lastName'], ['firstName']],
    attributes: ['id', 'firstName', 'lastName'],
    include: [
      {
        model: Band,
        attributes: ['id', 'name'],
      },
    ],
    limit,
    offset,
  });

  res.json(musicians);
});

// BONUS: Pagination with bands
app.get('/bands', async (req, res, next) => {
  // Parse the query params, set default values, and create appropriate
  // offset and limit values if necessary.

  let { page, size } = req.query;

  if (!page) page = 1;
  if (!size) size = 3;

  page = Number(page);
  size = Number(size);

  const pagination = {};
  if (page >= 1 && size >= 1) {
    pagination.limit = size;
    pagination.offset = size * (page - 1);
  }

  // Query for all bands
  // Include attributes for `id` and `name`
  // Include associated musicians and their `id`, `firstName`, and `lastName`
  // Order by band `name` then musician `lastName`
  const bands = await Band.findAll({
    order: [['name'], [Musician, 'lastName']],
    attributes: ['id', 'name'],
    include: [
      {
        model: Musician,
        attributes: ['id', 'firstName', 'lastName'],
      },
    ],
    // add limit key-value to query
    // add offset key-value to query
    // Your code here
  });

  res.json(bands);
});

// BONUS: Pagination with instruments
// I'm choosing a default size of 4 but no default page, so my default page will be 1
app.get(
  '/instruments',
  paginator({ defaultSize: 4 }),
  async (req, res, next) => {
    // Query for all instruments
    // Include attributes for `id` and `type`
    // Include associated musicians and their `id`, `firstName` and `lastName`
    // Omit the MusicianInstruments join table attributes from the results
    // Include each musician's associated band and their `id` and `name`
    // Order by instrument `type`, then band `name`, then musician `lastName`
    const instruments = await Instrument.findAll({
      order: [['type'], [Musician, Band, 'name'], [Musician, 'lastName']],
      attributes: ['id', 'type'],
      include: [
        {
          model: Musician,
          attributes: ['id', 'firstName', 'lastName'],
          // Omit the join table (MusicianInstruments) attributes
          through: { attributes: [] },
          include: [
            {
              model: Band,
              attributes: ['id', 'name'],
            },
          ],
        },
      ],
      //! This is all I have to do in each route, thanks to the paginator
      ...req.pagination,
    });

    res.json(instruments);
  }
);

// Root route - DO NOT MODIFY
app.get('/', (req, res) => {
  res.json({
    message: 'API server is running',
  });
});

// Set port and listen for incoming requests - DO NOT MODIFY
const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
