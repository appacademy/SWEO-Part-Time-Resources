const express = require("express");

const app = express();

app.use(express.json());

// CRUD
// create, read, update, delete

// post, get, put/patch, delete

app.get("/trees/:id", (req, res) => {
  const { id } = req.params;

  const { age } = req.query;
});

app.post("/trees", (req, res) => {
  const { name, type, zone } = req.body;
  const treeName = req.body.name;

  const tree = {
    id: 1235,
    name,
    type,
    zone,
  };

  res.json(user);

  // res.send("user was successfully created")
});

app.put();

app.delete();

const port = 8000;
app.listen(port, () => console.log("Server is listening on port ", port));
