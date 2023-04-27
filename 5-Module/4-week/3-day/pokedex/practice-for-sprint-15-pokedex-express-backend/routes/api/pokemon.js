const express = require('express');
const asyncHandler = require('express-async-handler');
const { types } = require('../../db/models/pokemonType');
const { randomItemImage } = require('./utils');

const PokemonRepository = require('../../db/pokemon-repository');
const ItemsRepository = require('../../db/items-repository');

const pokemonValidations = require('../../validations/pokemon');
const itemValidations = require('../../validations/items');

const router = express.Router();

router.get('/', asyncHandler(async function(_req, res) {
  const pokemon = await PokemonRepository.list();
  return res.json(pokemon);
}));

router.post(
  '/',
  pokemonValidations.validateCreate,
  asyncHandler(async function (req, res) {
    const id = await PokemonRepository.create(req.body);
    return res.redirect(`${req.baseUrl}/${id}`);
  })
);

router.put(
  '/:id',
  pokemonValidations.validateUpdate,
  asyncHandler(async function (req, res) {
    const id = await PokemonRepository.update(req.body);
    const pokemon = await PokemonRepository.one(id);
    return res.json(pokemon);
  })
);

router.get('/types', asyncHandler(async function (_req, res) {
  return res.json(types);
}));

router.get('/random', asyncHandler(async function(_req, res){
  const pokemon = await PokemonRepository.random();
  return res.json(pokemon);
}));

router.get('/battle', asyncHandler(async function(req, res){
  const pokemon = await PokemonRepository.battle(
    req.query.allyId,
    req.query.opponentId
  );
  return res.json(pokemon);
}));

router.get('/:id', asyncHandler(async function(req, res) {
  const pokemon = await PokemonRepository.one(req.params.id);
  return res.json(pokemon);
}));

router.get('/:id/items', asyncHandler(async function(req, res) {
  const items = await ItemsRepository.itemsByPokemonId(req.params.id);
  return res.json(items);
}));

router.post(
  '/:id/items',
  itemValidations.validateCreate,
  asyncHandler(async function(req, res) {
    if (!req.body.imageUrl)
      req.body.imageUrl = randomItemImage();
    const item = await ItemsRepository.addItem(req.body, req.params.id);
    return res.json(item);
  })
);

module.exports = router;
