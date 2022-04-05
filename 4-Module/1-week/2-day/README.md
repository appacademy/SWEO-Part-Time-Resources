# M4-W1-D1

## Pt1: Express Route Order && HTTP Server vs Express Server Practices

---

### Practice pt1 (15m)

---

### Walkthrough pt1

#### Express Route Order

Remember that express works as a chain of functions called middleware. This
means the server will run these functions in the same order for every single
request. Order is very important in an express application.

For routes that are similar you want to go from the most specific to the least specific.

```js
// '*' -> the wildcard symbol
app.get('/goodbye/*', (req, res) => {
    res.send("Goodbye, my friend!");
});

//:time is a paramaterized url component
app.get('/goodbye/until/:time', (req, res) => {
    res.send(`Goodbye. See you ${req.params.time}.`);
});

app.get('/goodbye/until/forever', (req, res) => {
    res.send("So long. Farewell. Have a great life!");
});
```

Ordering Best Practices

- Order the routes from specific to generic
- Place similar paths together

```js
// ---------------- /user routes ---------------------------------------------
app.get('/users/:id', (req, res) => {
    res.send("Details for a single user");
});

app.get('/users', (req, res) => {
    res.send("List of all users");
});

// ---------------- /products routes -----------------------------------------
app.get('/products/:id', (req, res) => {
    res.send("Details for a single product");
});

app.get('/products', (req, res) => {
    res.send("List of all products");
});

// ---------------- /purchases routes ----------------------------------------
app.get('/purchases/from/:startDate/to/:endDate/user/:userId', (req, res) => {
    res.send("List of all purchases in a date range for a single user");
});

app.get('/purchases/from/:startDate/to/:endDate', (req, res) => {
    res.send("List of all purchases in a date range");
});

app.get('/purchases/user/:userId', (req, res) => {
    res.send("List of all purchases by a single user");
});

app.get('/purchases/:id', (req, res) => {
    res.send("Details for a single purchase");
});
```

#### Walkthrough: Route Order

#### Walkthrough: HTTP vs Express

---

## Pt2: Express Request/Response Objects

---

### Practice pt2 (20m)

---

### Walkthrough pt2

---

## Express Long Practice

---
