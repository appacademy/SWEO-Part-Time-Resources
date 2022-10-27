
class Pokemon {
  constructor(name, level, type, trainer, cry) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.trainer = trainer;
    this.cry = cry;
    Pokemon.seen += 1;
  };

  static seen = 0;

  static pokemonSeen(pokemons) {
    return pokemons.map((pokemon) => pokemon.name)
  }

  yell() {
    console.log(`${this.name} cried ${this.cry.toUpperCase()}`)
  }

  levelUp() {
    this.level += 1;
    console.log(`${this.name} has leveled up to ${this.level}`);
  };

  run() {
    console.log(`${this.name} has fled from battle`);
  };
};

let newPoke = new Pokemon("Tarnished", 100, "Electric", "Ash", "yes")
let newPoke2 = new Pokemon("Tarnished", 100, "Electric", "Ash", "yes")
// console.log(newPoke.seen)
// newPoke.yell()
// console.log(Pokemon.seen)




class Pikachu extends Pokemon {
  constructor(level, trainer, moveSets, cry) {
    super("Pikachu", level, "Electric", trainer, cry);
    this.atk = 50;
    this.def = 25;
    this.spd = 100;
    this.moveSets = moveSets;
  };
  //here, yell is overriding the parent class method (Polymorphism)
  yell() {
    console.log(`${this.name} cried "Hey"`);
  }

  useThunderBolt() {
    console.log(`${this.name} has used Thunderbolt`);
    console.log(`${this.atk * 1.2} damage has been dealt`);
  };

};

// console.log(Pokemon.seen);
const charizard = new Pokemon("Charizard", 36, "Fire", "Ash", "yes");
charizard.yell()
// console.log(Pikachu.seen)

const moves = ["Thunderbolt", "Quick Attack", "Iron Tail", "Surf"];
const pikachu1 = new Pikachu(5, "Ash", moves, "Pika Pika");
pikachu1.yell()
// console.log(Pokemon.seen)
// console.log(pikachu1.yell());

// console.log(pikachu1.pokemonSeen([charizard, pikachu1]))
// console.log(Pokemon.seen)
