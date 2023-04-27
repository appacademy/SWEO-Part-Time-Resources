exports.randomItemImage = function () {
  const images = [
    "/images/pokemon_berry.svg",
    "/images/pokemon_egg.svg",
    "/images/pokemon_potion.svg",
    "/images/pokemon_super_potion.svg",
  ];
  const index = Math.floor(Math.random() * images.length);
  return images[index];
}