Below are some examples of how to verify if you completed your api correctly.

We're going to look at made-up examples below.  This is what you should do for every spec in postman!


First, in the api documentation, identify the correct route that corresponds to the route you're testing in postman.  In this example, I am testing "Get Spots of Current User".


Get all Spots owned by the Current User

  * URL: /api/spots/current
  * Body: // The below is what we should see displayed in postman
```json
   {
      "Spots": [
        {
          "id": 1,
          "ownerId": 1,
          "address": "123 Disney Lane",
          "city": "San Francisco",
          "state": "California",
          "country": "United States of America",
          "lat": 37.7645358,
          "lng": -122.4730327,
          "name": "App Academy",
          "description": "Place where web developers are created",
          "price": 123,
          "createdAt": "2021-11-19 20:39:36",
          "updatedAt": "2021-11-19 20:39:36",
          "avgRating": 4.5,
          "previewImage": "image url"
        }
      ]
    }
```

Next, run your postman test by clicking the "send" button, and compare your response in postman to the expected response body in the API.  In the below example, I have added comments next to items that don't match the API -- these are the updates I need to make.

```json
 [  //The array should be the value of the key "Spots"
    {
        "id": 1,
        "ownerId": 2,
        "someWrongKey": "some val" //Here we have an extra key/val pair in our response that should be removed
        "address": "test",
        "city": "Some City",
        "state": "CoolState",
        "country": "United States of America",
        "lat": "37.7645358", //the number should be an integer
        "lng": "-122.4730327", //the number should be an integer
        "name": "App Academy",
        "description": "Where I work",
        "price": "123", //the number should be an integer
        "createdAt": "2023-03-26T01:13:03.117Z",
        "updatedAt": "2023-03-26T01:13:03.117Z",
        "averageRating": null,
        "preview_image": null //the key should be previewImage
    }
]
```

Once I have identified all of the updates I need to make, I will update my route handler for this route.  Then, I'll run through my tests again and perform the same steps above until I am certain that my response body in postman matches the format of the response body in the api documentation.

Here is an additional example for an error handler:

API response body:

```json
    {
      "message": "Validation Error",
      "statusCode": 400,
      "errors": {
        "address": "Street address is required",
        "city": "City is required",
        "state": "State is required",
        "country": "Country is required",
        "lat": "Latitude is not valid",
        "lng": "Longitude is not valid",
        "name": "Name must be less than 50 characters",
        "description": "Description is required",
        "price": "Price per day is required"
      }
    }
```

My postman response body with comments for what I need to update:

```json
    {
      "title": "Error", //"title" should be removed.
        //We are missing a "message" property with it's corresponding value from the api docs (i.e. "Validation Error")
      "statusCode": "400", //400 should be an integer instead of a string.
      "errors": {
        "address": "Street address is required",
        "city": "City is required",
      },
      "stack": "", //stack should be removed.
    }
```
