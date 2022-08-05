<!-- Given the Scenario below, write out the Endpoint url and fill in the missing fields-->
### Get a specific post information from a collection of posts 
- hint: postId is good to help identify a singular post.
- Method: GET
- URL: /posts/:postId

### Submit a delete for an existing reviewId 
Request components:
- Method: POST
- URL: /reviews/:reviewId/delete

### Submit an edit for an existing reviewId 
Request components:
- Method: POST
- URL: /reviews/:reviewId
  - take existing record and make an edit to it (wouldn't make sense to create a new record on an existing one, so this route would be for editing)

### Get the edit review page for a product
Request components:
- Method: GET
- URL: /reviews/:reviewId/edit
  
### Get all civilizations for a given century (i.e. 21st century)
- hint: century is singular, centuries is plural. 
Request components:
- Method: GET
- URL: /centuries/:century/civilizations