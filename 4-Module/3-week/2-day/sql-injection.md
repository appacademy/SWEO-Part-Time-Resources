# SQL Injections

### What is a SQL injection?
An SQL injection is when a user replaces a DYNAMIC VALUE in a SQL statement with SQL code, with harmful intent.

An example:
```
app.get('/spots', (req, res) => {
    // Get user input from request body
    const { input } = req.body;        
    // "'spotName'; DROP TABLE spots" is the user input

    // Database query
    let query = `SELECT * FROM spots WHERE title = ${input}`;
    // `SELECT * FROM spots WHERE title = 'spotName'; DROP TABLE spots`
    
    // Execute query
    // ...
})

```

In the example above the user sent a SQL query as their input. Without protection this would run in the database and drop the spots table from the database.

### How to avoid an SQL injection
You can avoid SQL injections by 'sanitizing' your dynamic SQL statements before they get executed. This can be very intensive if using just SQL. With the use of some ORMs you have built in protection against SQL injections.