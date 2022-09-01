const express = require("express");
const app = express();
const port = 5000;


app.use(express.json()) // for parsing application/json


app.get("/testing-error", (req,res)=>{
    // res.json(["apple", "watermelon", "cherry", "banana", "grape"]) 
    const err = new Error("-4) error from /testing-error")
    throw err;
    // next(err);
})


// app.use((req,res,next)=>{
//     console.log("-3) this middleware will throw an error");
//     const err = new Error("-3) this is an error throw ")
//     next(); //if we do not pass an error parameter, the next() will find the next suitable middleware to handle the request.
// })

//if we didn't have another error handler middleware to take the next err, this is handled by the default error handler
app.use("/error", (req,res,next)=>{
    console.log("-2) this middleware will throw an error");
    const err = new Error("-2) this is an error throw ")
    next(err);
})


// a route that starts with /apple then execute this middleware here
app.use("/apple", (req,res,next)=>{
    console.log("-1) this is our -1th middleware with the `/apple` as the first parameter")
    next();
})

// a route that starts with / then execute this middleware here
app.use("/", (req,res,next)=>{
    console.log("0) this is our 0th middleware with the `/` as the first parameter")
    next();
})


// mount this function (callback inside) as an application level middleware
app.use((req,res,next)=>{
    console.log("1) this is our first custom application middleware")
    next();
})

app.get("/fruits", (req,res)=>{
    res.json(["apple", "watermelon", "cherry", "banana", "grape"]) 
})

// if we hit/match the /fruits route above, it will give a response to a client, then stop processing (so this middleware will not be executed). However, if it's NOT going to hit /fruits or if it doesn't give a response back to the client, then it will execute this middleware
app.use((req,res,next)=>{
    console.log("2) this is our second middle ware after the /fruits route")
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


// :page --> this is the url parameter, not the value!! So the actual url value of "/fruits", "fruits" will be what the parameter value is.
app.get("/:page", (req,res)=>{
    const page = req.params.page
    console.log("page:", page);
    res.send(`our /:page answer: ${page}` )
})

const lastMiddleWare = (req,res,next) =>{
    // last custom middle function on the application level
    console.log("this is the last middleware");
    res.send("this was the last middleware");
}
app.use(lastMiddleWare)

// any path that doesn't match the route path above, will then hit this one here
app.get("*", (req, res)=>{
    res.status(404);
    res.set("content-type", "text/plain");
    res.set("random-header", "random header value");
    res.send("Not Found");
})

// ---------------add one or more custom error handlers-------------
app.use((err, req, res, next)=>{
    console.log("error:", err); //err is an object, we can attach properties to it
    err.status = 501 //err.statusCode //err.banana
    next(err);//passing the error along to the next error handler
    // res.json({
    //     error: `${err}`,
    //     statusCode: err.status
    // })
})

app.use((err,req, res, next)=>{
    res.json({
        error: `${err}`,
        statusCode: err.status
    })
})



app.listen(5000, ()=>{
    console.log("listening on port:", port)
})