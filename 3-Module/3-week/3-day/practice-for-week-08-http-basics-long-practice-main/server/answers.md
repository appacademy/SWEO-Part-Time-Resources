
request

home page /

- Method: GET
- URL: /
- Headers: none
- Body: none

response

- Status Code: 200
- Headers:
	Content-Type: text/html
- Body: true


request

products page /products

- Method: GET
- URL: /products
- Headers: none
- Body: none


response

- Status Code: 200
- Headers:
	Content-Type: text/html
- Body: true

request

products best selling page

- Method: GET
- URL: /products/best-selling
- Headers: none
- Body: none

response

- Status Code: 200
- Headers:
	Content-Type: text/html
- Body: true

request

products new page

- Method: GET
- URL: /products/new
- Headers: none
- Body: none

response

- Status Code: 200
- Headers:
	Content-Type: text/html
- Body: true


request

specific product page

- Method: GET
- URL: /products/:productId
- Headers: none
- Body: none

response

- Status Code: 200
- Headers:
	Content-Type: text/html
- Body: true

request

create a new product

- Method: POST
- URL: /products
- Headers:
	Content-Type: x-www-form-urlencoded
- Body: true

response

- Status Code: 302
- Headers: none
- Body: none/false

request

product edit page

- Method: GET
- URL: /products/:productId/edit
- Headers: none
- Body: none

response

- Status Code: 200
- Headers:
	Content-Type: text/html
- Body: true

request

editing a specific product

- Method: POST
- URL: /products/:productId
- Headers:
	Content-Type: x-www-form-urlencoded
- Body: true

response

- Status Code: 302
- Headers: none
- Body: none


request

deleting a specific product

- Method: POST
- URL: /products/:productId/delete
- Headers: none
- Body: none

response

- Status Code: 302
- Headers: none
- Body: none

request

create a review for a product

- Method: POST
- URL: /products/:productId/reviews
- Headers:
	Content-Type: x-www-form-urlencoded
- Body: true

response

- Status Code: 302
- Headers: none
- Body: none

request

get edit page for reviews

- Method: GET
- URL: /reviews/:reviewId/edit
- Headers: none
- Body: none

response

- Status Code: 200
- Headers:
	Content-Type: text/html
- Body: true

request

editing a review

- Method: POST
- URL: /reviews/:reviewId
- Headers:
	Content-Type: x-www-form-urlencoded
- Body: true

response

- Status Code: 302
- Headers: none
- Body: none


request

deleting a specific review

- Method: POST
- URL: /reviews/:reviewId/delete
- Headers: none
- Body: none

response

- Status Code: 302
- Headers: none
- Body: none

request

get all products from the category

- Method: GET
- URL: /categories/:categoryTag/products
- Headers: none
- Body: none

response

- Status Code: 200
- Headers:
	Content-Type: text/html
- Body: true
