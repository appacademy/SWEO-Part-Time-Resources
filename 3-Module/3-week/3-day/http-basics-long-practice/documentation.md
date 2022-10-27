# HTTP Basics Solution

## Endpoints

### Ask for a page that doesn't exist

Request components:

- Method: GET
- URL: /does-not-exist
- Headers: none
- Body: none

Response components:

- Status code: 404
- Headers:
  - Content-Type: text/html
- Body: HTML page containing "Page Not Found"

### Ask for the products list page

Request components:

- Method: GET
- URL: /products
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing links to details of each product listed

### Ask for the product detail page

Request components:

- Method: GET
- URL: /products/:productId
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing the details of the product with the specified id

### Ask for the create new product page

Request components:

- Method: GET
- URL: /products/new
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing form for creating a new product

### Submit a new product

Request components:

- Method: POST
- URL: /products
- Headers:
  - Content-Type: application/x-www-form-urlencoded
- Body: information about the product
  - name
  - description
  - price
  - categories

Response components:

- Status code: 302
- Headers:
  - Location: /products/:productId
- Body: none

### Ask for the edit product page

Request components:

- Method: GET
- URL: /products/:productId/edit
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing form for editing an existing product

### Submit an edit for an existing product

Request components:

- Method: POST
- URL: /products/:productId
- Headers:
  - Content-Type: application/x-www-form-urlencoded
- Body: information about the product
  - name
  - description
  - price
  - categories

Response components:

- Status code: 302
- Headers:
  - Location: /products/:productId
- Body: none

### Submit a delete for an existing product

Request components:

- Method: POST
- URL: /products/:productId/delete
- Headers: none
- Body: none

Response components:

- Status code: 302
- Headers:
  - Location: /products
- Body: none

### Submit a new review for a product

Request components:

- Method: POST
- URL: /products/:productId/reviews
- Headers:
  - Content-Type: application/x-www-form-urlencoded
- Body: information about the review
  - comment
  - starRating

Response components:

- Status code: 302
- Headers:
  - Location: /products/:productId
- Body: none

### Ask for the edit review page for a product

Request components:

- Method: GET
- URL: /reviews/:reviewId/edit
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing form for editing an existing review

### Submit an edit for an existing review

Request components:

- Method: POST
- URL: /reviews/:reviewId
- Headers:
  - Content-Type: application/x-www-form-urlencoded
- Body: information about the review
  - comment
  - starRating

Response components:

- Status code: 302
- Headers:
  - Location: /products/:productId
- Body: none

### Submit a delete for an existing review

Request components:

- Method: POST
- URL: /reviews/:reviewId/delete
- Headers: none
- Body: none

Response components:

- Status code: 302
- Headers:
  - Location: /products/:productId
- Body: none

### Ask for all the products in a particular category by tag of the category

Request components:

- Method: GET
- URL: /categories/:categoryTag/products
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page containing a list of products that have the category's tag
  specified

### Ask for the best-selling product

Request components:

- Method: GET
- URL: /products/best-selling
- Headers: none
- Body: none

Response components:

- Status code: 200
- Headers:
  - Content-Type: text/html
- Body: HTML page highlighting the best-selling product on the site
