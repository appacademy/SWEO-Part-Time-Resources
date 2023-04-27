const { commerce } = require("faker");
const { Pokemon } = require("./models");

function random100() {
  return Math.floor(Math.random() * 100) + 1;
}

function randomImage() {
  const images = [
    "/images/pokemon_berry.svg",
    "/images/pokemon_egg.svg",
    "/images/pokemon_potion.svg",
    "/images/pokemon_super_potion.svg",
  ];
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}

function* generateItems() {
  for (let i = 0; i < 3; i += 1) {
    yield {
      name: commerce.productName(),
      price: random100(),
      happiness: random100(),
      imageUrl: randomImage(),
    };
  }
}

async function create(details) {
  details.items = [...generateItems()];
  const pokemon = await Pokemon.create(details, { include: ["items"] });
  return pokemon.id;
}

async function update(details) {
  const id = details.id;
  delete details.id;
  await Pokemon.update(
    details,
    {
      where: { id },
      returning: true,
      plain: true,
    }
  );
  return id;
}

async function list() {
  return await Pokemon.findAll();
}

async function one(id) {
  return await Pokemon.scope("detailed").findByPk(id);
}

async function random() {
  const pokemon = await Pokemon.scope(["random", "opponent"]).findAll();
  const weightedSum = pokemon.reduce((sum, { encounterRate }) => {
    return sum + Number(encounterRate)
  }, 0);
  let randomSum = Math.random() * weightedSum;
  let chosenId;
  for (let i = 0; i < pokemon.length; i++) {
    if (randomSum < pokemon[i].encounterRate) {
      chosenId = i;
      break;
    }
    randomSum -= pokemon[i].encounterRate;
  }
  return await Pokemon.findByPk(chosenId);
}

async function battle(allyId, opponentId) {
  const ally = await Pokemon.scope("ally").findByPk(allyId);
  const opponent = await Pokemon.scope("opponent").findByPk(opponentId);
  if (!ally) throw new Error('Ally Pokemon not found');
  if (!opponent) throw new Error('Opponent Pokemon not found');

  const minCaptureRate = 30;
  let attackDiff = ally.attack - opponent.defense;
  if (attackDiff < minCaptureRate) attackDiff = minCaptureRate;

  const randomNum = Math.random() * 100;

  if (randomNum <= attackDiff) {
    opponent.captured = true;
    await opponent.save();
    return await Pokemon.findByPk(opponent.id);
  }

  return await Pokemon.findByPk(opponent.id);
}

module.exports = {
  create,
  update,
  list,
  one,
  random,
  battle,
};