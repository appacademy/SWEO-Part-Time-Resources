const express = require("express");
const app = express();
const port = 5000;


app.use(express.json()) // for parsing application/json

app.use((req, res, next)=>{
    console.log(" 0) this is our 0 middleware that will throw an error (not handling one, but throwing one)")
    const error = new Error("0) error from 0 middleware")
    throw error;
})


// when we use app.use this middleware will be mounted on the application level meaning that it will be executed if we reach this point. Order matters, if we add this after a route has been matched, it will not execute.
app.use((req, res, next)=>{
    console.log(" 1) this is our first custom middleware")
    next()
})

// --------------/fruits route-----------
const routeHandlerMiddlware = (req, res, next)=>{
    console.log("---routeHandlerMiddleware---")
    next();
}

// if we hit the /fruits route, our routeHAndlerMiddleware will be executed first, then it will got next(), next() is our route handler .get("/fruits")...
app.get("/fruits", routeHandlerMiddlware, (req,res)=>{
    res.json(["apple", "watermelon", "cherry", "banana", "grape"])
})

// if /fruits is hit skip over this middleware (the machine in the conveyer belt) because it RETURNS A RESPONSE to the client.
app.use((req, res, next)=>{
    console.log("2) this will not execute for /fruits")
    next();
})

// if the path starts with "/" then go ahead and execute it
app.use("/", (req, res, next)=>{
    console.log("3) the path started with / and so this was hit")
    next();
})

app.use("/app-academy", (req, res, next)=>{
    console.log("4) the path started with /app-academy and so this was hit")
    next(); 
})


app.get("/users/:userId", (req, res)=>{
    console.log("req.params:", req.params); //follow the data, determine what data we are working with here //{ userId: '50' }
    const userId = req.params.userId;

    // our status code we want to send back
    res.status(200);
    res.send(`User details for userId: ${userId}`)

})

app.get("/", (req,res)=>{
    console.log("hello from root using nodemon");
    // res.send("this was sent using `send`"); //.send will send a response with data that matches the data that we are sending

    res.json("this is json data")
    //.json will send a response in json
})

app.post("/", (req,res)=>{
    console.log("POST / request");
    const reqBodyData = req.body;
    console.log("reqBodyData:", req.body);
    // explicitly tell what data to "send", we need to set a header with content type of our desire.
    res.set("Content-Type", "text/plain")
    res.send("we received your POST request w/ JSON data")
})

// after / ":" denotes to TAKE IN ANY VALUE INTO THE PARAMETER
// if we want to hit the actual /fruits route, we want to move this one down below (most specific to least specific)
app.get("/:page", (req,res)=>{
    const page = req.params.page
    res.send(page)
})

// any path that doesn't match the route path above, will then hit this one here
app.get("*", (req, res)=>{
    res.status(404);
    res.set("content-type", "text/plain");
    res.set("random-header", "random header value");
    res.send("Not Found");
})

// error handler that will catch and not have the default one ran.
app.use((err, req, res, next)=>{
    console.log("error1:", err);
    next(err); //if we do not have something that can handle the error after doing next(err), then the default error handler will be executed.
})

app.use((err, req,res,next)=>{
    console.log("error2", err);
    res.status(err.status || 500);

    // this error handler middleware will handle the error and send a response back to the client, so we don't have to ever hit the DEFAULT ERROR HANDLER (built in)
    res.json({
        error: `${err}`
    })
    // res.send(`error: ${err}`)
})






app.listen(5000, ()=>{
    console.log("listening on port:", port)
})