# Part 1
# without environment variables set:
node index.js
# will print `undefined` to the terminal

# with environment variables set:
NODE_ENV="production" node index.js
# or `NODE_ENV=production node index.js` works too
# will print `production` to the terminal




# Part 2
# Run server after loading dotenv into `app.js`: `require('dotenv').config()`
node app.js
# Navigate to localhost:5000 to see secret message
# Should see "Hello from .env"