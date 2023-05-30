# Practice: Serving Static Files in Express

In this practice, you will serve static files inside the folder of an Express
application.

## Set up

`npm install` the dependencies.

Run `npm run dev` to start the server at [http://localhost:5000] in
development.

## Part 1: File paths appended to root URL

In your `server` folder, there is a folder called `assets` that holds CSS
stylesheets, images, and JavaScript scripts. Serve all the files in the `assets`
folder so that if you append the relative file path to the end of the root URL
of the server, it will send the file to the client.

If done correctly, you should see the following assets at the respective URL
paths:

- `assets/css/application.css` - [http://localhost:5000/css/application.css]
- `assets/scripts/hello-world.js` - [http://localhost:5000/scripts/hello-world.js]
- `assets/images/hello.png` - [http://localhost:5000/images/hello.png]

## Part 2: File paths appended to root URL II

Comment out the code that you wrote previously.

Serve only the files in the `assets/scripts` folder at the root URL.

If done correctly, you should see the following assets at the respective URL
paths:

- `assets/scripts/hello-world.js` - [http://localhost:5000/hello-world.js]

You should **NOT** see the following assets at the respective URL paths:

- `assets/css/application.css` - [http://localhost:5000/application.css]

## Part 3: File paths appended to a resource

Serve the files in the `assets/css` folder under a route resource called
`stylesheets`.

If done correctly, you should see the following assets at the respective URL
paths:

- `assets/css/application.css` - [http://localhost:5000/stylesheets/application.css]

You should **NOT** see the following assets at the respective URL paths:

- `assets/css/application.css` - [http://localhost:5000/css/application.css]
- `assets/scripts/hello-world.js` - [http://localhost:5000/scripts/hello-world.js]

[http://localhost:5000]: http://localhost:5000
[http://localhost:5000/css/application.css]: http://localhost:5000/css/application.css
[http://localhost:5000/scripts/hello-world.js]: http://localhost:5000/scripts/hello-world.js
[http://localhost:5000/images/hello.png]: http://localhost:5000/images/hello.png


[http://localhost:5000/hello-world.js]: http://localhost:5000/hello-world.js
[http://localhost:5000/application.css]: http://localhost:5000/application.css

[http://localhost:5000/stylesheets/application.css]: http://localhost:5000/stylesheets/application.css