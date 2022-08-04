class Pokemon {
  constructor(name, level, type, trainer) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.trainer = trainer;
  }

  levelUp() {
    this.level += 1;
    console.log(`${this.name} has leveled up to ${this.level}`)
  }

  run() {
    console.log(`${this.name} has fled from battle`);
  };
}

class Pikachu extends Pokemon {
  constructor(level, trainer, moveSets) {
    super("Pikachu", level, "Electric", trainer);
    this.atk = 50;
    this.def = 25;
    this.spd = 100;
    this.moveSets = moveSets;
  }

  useThunderBolt() {
    console.log(`${this.name} has used Thunderbolt`);
    console.log(`${this.atk * 1.2} damage has been dealt`)
  }
}

// const pikachu = new Pokemon("Pikachu", 5, "Electric", "Ash");
// const raichu = new Pokemon("Raichu", 20, "Electric", "Lt. Surge")
// // console.log(pikachu)
// // pikachu.levelUp()
// // pikachu.run()
// console.log(pikachu)
// pikachu.levelUp()
// console.log(raichu)
// raichu.run()

const moves = ["Thunderbolt", "Quick Attack", "Iron Tail", "Surf"]
const pikachu1 = new Pikachu(10, "Ash", moves)
pikachu1.levelUp()
console.log(pikachu1.useThunderBolt())

console.log(pikachu1 instanceof Pokemon)
