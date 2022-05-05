const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'pug');

app.use(morgan('dev'));

app.disable('etag');

const categories = JSON.parse(fs.readFileSync('./seeds/categories.json'));
const users = JSON.parse(fs.readFileSync('./seeds/users.json'));
const products = JSON.parse(fs.readFileSync('./seeds/products.json'));
const reviews = JSON.parse(fs.readFileSync('./seeds/reviews.json'));

let nextProductId = 2;
let nextReviewId = 2;

class NotFoundError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, NotFoundError);
    }

    if (!this.message) this.message = 'Not Found';
    this.name = 'NotFoundError';
    this.status = 404;
    this.statusCode = 404;
  }
}

class BodyError extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, BodyError);
    }

    if (!this.message) this.message = 'Something is wrong with the body';
    this.name = 'BodyError';
    this.status = 422;
    this.statusCode = 422;
  }
}

app.get('/', function (req, res) {
  const data = {
    categories
  }

  return res.render('index', data);
});

app.get('/products', (req, res) => {
  const data = {
    products: Object.values(products),
    categories
  };

  return res.render('products', data);
});

app.get('/products/best-selling', (req, res) => {
  const product = Object.values(products)[0];

  if (!product) {
    throw new NotFoundError('Product not found');
  }

  const productCategories = product.categories.map(name => {
    return categories[name];
  });
  const productReviews = Object.values(reviews)
    .filter(review => review.productId == product.productId);

  const data = {
    title: 'Best-Selling Product: ',
    product: {
      ...product,
      categories: productCategories,
      reviews: productReviews
    },
    categories
  };

  return res.render('product-detail', data);
});

app.get('/products/new', (req, res) => {
  const data = {
    categories
  };

  return res.render('create-product', data);
});

app.get('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products[productId];

  if (!product) {
    throw new NotFoundError('Product not found');
  }

  const productCategories = product.categories.map(name => {
    return categories[name];
  });
  const productReviews = Object.values(reviews)
    .filter(review => review.productId == productId);
  
  const data = {
    product: {
      ...product,
      categories: productCategories,
      reviews: productReviews
    },
    categories
  };

  return res.render('product-detail', data);
});

app.post('/products', (req, res) => {
  let { name, description, price, categories: productCategories } = req.body;
  if (!name || !description || !price || !productCategories) {
    throw new BodyError();
  }

  if (!Array.isArray(productCategories)) {
    productCategories = [productCategories];
  }
  
  productCategories.forEach(categoryTag => {
    const category = categories[categoryTag];
    if (!category) {
      throw new BodyError('Category not found');
    }
  });

  const productId = nextProductId;

  products[productId] = {
    name,
    description,
    price: parseFloat(price),
    categories: productCategories,
    productId: productId
  }

  nextProductId++;
  res.redirect('/products/' + productId);
});

app.get('/products/:productId/edit', (req, res) => {
  const productId = req.params.productId;
  const product = products[productId];

  if (!product) {
    throw new NotFoundError('Product not found');
  }
  
  const data = {
    product,
    categories
  };

  return res.render('edit-product', data);
});

app.post('/products/:productId', (req, res) => {
  const productId = req.params.productId;
  const product = products[productId];

  if (!product) {
    throw new NotFoundError('Product not found');
  }

  let { name, description, price, categories: productCategories } = req.body;
  if (!name && !description && !price && !productCategories) {
    throw new BodyError();
  }

  if (productCategories) {
    if (!Array.isArray(productCategories)) {
      productCategories = [productCategories];
    }

    productCategories.forEach(categoryTag => {
      const category = categories[categoryTag];
      if (!category) {
        throw new BodyError('Category not found');
      }
    });
  }

  const data = {};

  if (name) data.name = name;
  if (description) data.description = description;
  if (price) data.price = parseFloat(price);
  if (productCategories) data.categories = productCategories;

  products[productId] = {
    ...product,
    ...data
  };

  res.redirect('/products/' + product.productId);
});

app.post('/products/:productId/delete', (req, res) => {
  const productId = req.params.productId;
  const product = products[productId];

  if (!product) {
    throw new NotFoundError('Product not found');
  }

  Object.values(reviews).forEach(review => {
    if (review.productId == productId) delete reviews[review.reviewId];
  });

  delete products[productId];

  res.redirect('/products');
});

app.post('/products/:productId/reviews', (req, res) => {
  const productId = req.params.productId;
  const product = products[productId];

  if (!product) {
    throw new NotFoundError('Product not found');
  }

  const { comment, starRating } = req.body;
  if (!comment || !starRating) {
    throw new BodyError();
  }

  const reviewId = nextReviewId;

  reviews[reviewId] = {
    comment,
    starRating,
    productId: productId,
    reviewId: reviewId
  };

  nextReviewId++;

  res.redirect('/products/' + productId);
});

app.get('/reviews/:reviewId/edit', (req, res) => {
  const reviewId = req.params.reviewId;
  const review = reviews[reviewId];

  if (!review) {
    throw new NotFoundError('Product not found');
  }

  const product = products[review.productId];
  
  const data = {
    review,
    product,
    categories
  };

  return res.render('edit-review', data);
});

app.post('/reviews/:reviewId', (req, res) => {
  const reviewId = req.params.reviewId;
  const review = reviews[reviewId];

  if (!review) {
    throw new NotFoundError('Review not found');
  }

  const { comment, starRating } = req.body;
  if (!comment && !starRating) {
    throw new BodyError();
  }

  const data = {};

  if (comment) data.comment = comment;
  if (starRating) data.starRating = starRating;

  reviews[reviewId] = {
    ...review,
    ...data
  };

  res.redirect('/products/' + review.productId);
});

app.post('/reviews/:reviewId/delete', (req, res) => {
  const reviewId = req.params.reviewId;
  const review = reviews[reviewId];

  if (!review) {
    throw new NotFoundError('Review not found');
  }

  delete reviews[reviewId];

  res.redirect('/products/' + review.productId);
});

app.get('/categories/:categoryTag/products', (req, res) => {
  const categoryTag = req.params.categoryTag;
  const category = categories[categoryTag];

  if (!category) {
    throw new NotFoundError('Category not found');
  }

  const categoryProducts = Object.values(products)
    .filter(product => {
      return !!product.categories.find(category => category == categoryTag);
    })
    .map(product => {
      return {
        ...product,
        categories: product.categories.map(categoryTag => categories[categoryTag])
      };
    });

  const data = {
    title: `${category.name} `,
    products: categoryProducts,
    categories
  };

  return res.render('products', data);
});

app.use("/assets", express.static("assets", {
  etag: false,
  lastModified: false
}));

app.use((req, res) => {
  res.status(404);
  
  const data = {
    title: "404 - Page Not Found",
    categories
  }
  return res.render('error', data);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  const data = {
    title: err.message,
    categories
  }
  return res.render('error', data);
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server is listening on port', port));
