# W19D2 - Tuesday
- These resources below are great to look around and reference 
- [express docs](https://expressjs.com/en/4x/api.html)
- [mdn express tutorial](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs)

## Code-it-out
- Open `http-to-express` folder and your task is to convert the image in `http-server.png` to an express server from scratch

- These links will be helpful
  - [express starter example](https://expressjs.com/en/starter/hello-world.html)
  - [working with req.body](https://expressjs.com/en/4x/api.html#req.body)
  - [basic routing](https://expressjs.com/en/starter/basic-routing.html)

- To start:
  - inside of folder run `npm init -y`
  - then run `npm install express`
  - use the file called `app.js`
  - should look something like this: 
    - ![](https://i.imgur.com/7hwiMj1.png)
  - now in `app.js` create a simple server using the express docs
  - now add your express server, convert the `http-server.png` to express logic
  - run your server: `node app.js`
  - bonus: 
    - add and use `nodemon` package:
      - execute: `npm install nodemon -D` 
      - change the `package.json` to have a script of `dev` that runs `nodemon app.js`.
      - now execute: `npm run dev` and you should have hot reload
    - add a .gitignore file
## EXPRESS ROUTE HANDLERS
- Practice: Express Route Handlers

## Express Route Order
- Practice: Route Order Matters!

## HTTP Server vs. Express (revisit)
- Practice: HTTP Server to Express Server


## Express Request/Response Objects
- reading: Express Request/Response Objects 
- quiz + video
- Practice: Express Request/Response Objects