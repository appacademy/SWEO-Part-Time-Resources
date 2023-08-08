// pretend we have all the biolderplate code and require lines written out at the top

app.get('/books', async (req, res, next) => {
    // query example looks like this '/books?genre=fairytale&page=1&size=5'

    const { genre, page, size } = req.query;

    const where = {};

    if (genre && genre !== '') {
      where.genre = genre; // where = { genre: fairytale }
    } else if (genre === '') {
      res.status(400);
      return res.json({
      errors: [
        { message: 'genre filter should not be empty' }
      ]
    });
    }


    const pagination = {};

    page = parseInt(page);
    size = parseInt(size);  

    if(Number.isNaN(page)) page = 1;
    if(Number.isNaN(size)) size = 5;
    if(size > 5) size = 5;

    pagination.limit = size;
    pagination.offset = size * (page - 1);



    const books = await Book.findAll({
      where,
      ...pagination
    });

    return res.json({
      books,
      "page": page,
      "size": size
    });
});

app.get('/books/:bookId/reviews', async (req, res, next) => {

    // Review model looks like: 
    // Review {
    //     id: 1,
    //     stars: 4,
    //     text: 'Decent book, would read again'
    // }


    const { bookId } = req.params;

    // Sequelize
    const totalBookReviews1 = await Review.count({ where: {book_id: bookId}});

    const maxReview = await Review.max('stars');

    // Calculate with JS
    const bookReviews = await Review.findAll({ where: {book_id: bookId}});

    const totalBookReview2 = bookReviews.length;


    // Average with JS
    let count = 0;

    bookReviews.forEach(review => {
        count += review.stars
    });

    const averageBookReview = count / totalBookReviews1;
});




















