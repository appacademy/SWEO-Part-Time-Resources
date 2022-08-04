<!-- Given the Scenario below, write out the Endpoint url-->
### Get a post from a resource of posts
- URL: /posts/:postId

### Submit a delete for an existing reviewId 
Request components:
- Method: POST
- URL: /reviews/:reviewId/delete

### Get the edit review page for a product
Request components:
- Method: GET
- URL: /reviews/:reviewsId/edit

### Get all the products for a particular category by tag of the category
Request components:
- Method: GET
- URL: /categories/:categoryTag/products
  - /categories/groceries/products
  - /categories/beauty/products

### Get all civilizations for a given century
- hint: century is singular, centuries is plural. 
Request components:
- Method: GET
- URL: /centuries/:centuryId/civilizations
  - Extra info: for above the reason why we add /civilizations is because we have to be more specific for example as other categories under centuryId might be:
    - /centuries/:centuryId/volcanicEruptions
    - /centuries/:centuryId/events
    - /centuries/:centuryId/wars