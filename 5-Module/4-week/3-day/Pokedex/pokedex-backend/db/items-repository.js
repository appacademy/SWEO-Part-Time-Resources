const { Item } = require("./models");

async function itemsByPokemonId(pokemonId) {
  return await Item.findAll({
    where: {
      pokemonId,
    },
  });
}

async function addItem(details, pokemonId) {
  const item = await Item.create({
    ...details,
    pokemonId,
  });
  return await Item.findByPk(item.id);
}

async function deleteItem(itemId) {
  const item = await Item.findByPk(itemId);
  if (!item) throw new Error('Cannot find item');

  await Item.destroy({ where: { id: item.id }});
  return item.id;
}

async function updateItem(details) {
  const id = details.id;
  delete details.id;
  console.log({ details, id });
  await Item.update(
    details,
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );
  return await Item.findByPk(id);
}

module.exports = {
  itemsByPokemonId,
  addItem,
  deleteItem,
  updateItem,
};
