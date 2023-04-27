# HTTP Basics Long Practice

In this practice, you will document the request and response components for
RESTful endpoints of an e-commerce web site.

## Set up

Clone the practice from the [starter].

To set up the server that you will test endpoints on, `cd` inside of the
**server** folder and run `npm install` inside of the **server** folder. **Do
not to look at the contents of the server folder until you finish this
exercise.**

To start the server, run `npm start` inside of the **server** folder. This will
allow you to make requests to [http://localhost:5000] using any client, such as
your browser.

To stop the server from listening to requests, press `CTRL + c` for
Windows/Linux or `CMD + c` for MacOS in the terminal that you started the server
(wherever you ran `npm start`). To restart a stopped server, run `npm start`
again.

> Note: Make sure to stop the server in the practice/exercise if there is one.
> Leaving a server running may prevent servers in other practices/exercises
> from starting properly.

## Resources

Below is a list of all the resources for this e-commerce site.

- user:
  - username: unique identifier
- category:
  - tag: unique identifier
  - name
- product:
  - productId: unique identifier
  - name
  - description
  - price
  - categories: an array of category tags that the product is under
- review: a review for a single product
  - reviewId: unique identifier
  - comment
  - starRating
  - productId: of the product that the review is for

## Documentation

Below is a list of operations on the e-commerce server that you can perform.
For each operation, document what the components of the request should be and
what you should expect from the response. Document all of the important components
of the request and the response. You can use a Google doc, VSCode for editing
a text/markdown file, or whatever text editor you want for creating the
RESTful routes documentation for this e-commerce site.

Here's how to approach creating the documentation for the e-commerce server
operations:

1. Make a prediction based off of your knowledge of HTTP request and response
   components and RESTful routes to determine what the request and response
   components of the given operation should be.
2. Perform the request in your browser. Navigating to the links
   provided will help you fill out the documentation below. The e-commerce site 
   is located at [http://localhost:5000].
4. If the request or response is not what you predicted it to be, then update
   your documentation.

If you don't see the response you want, or if you see an error status code, then
the components of the request are wrong. Try playing around with the request
components to get closer to the response you expect.

If you get stuck, make sure to ask for help!

The request and response components to ask for the home page of the site is
filled out for you as an example.

[http://localhost:5000]: http://localhost:5000
[starter]: https://github.com/appacademy/practice-for-week-08-http-basics-long-practice