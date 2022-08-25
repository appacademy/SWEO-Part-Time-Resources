const router = require('express').Router();

const pokemonRouter = require("./pokemon.js");
router.use("/pokemon", pokemonRouter);

const itemsRouter = require("./items.js");
router.use("/items", itemsRouter);

module.exports = router;