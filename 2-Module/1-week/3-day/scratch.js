// let obj = {a: "hello"}

class Pokemon {
    constructor(name, level, type, trainer) {
      this.name = name;
      this.level = level;
      this.type = type;
      this.trainer = trainer;
    }

    levelUp() {
      this.level++;
      console.log(`${this.name} has leveled up to ${this.level}!`);
    }

    showName() {
      console.log(`Hi my name is ${this.name}`);
    }

    run() {
      console.log(
        `${this.name} has fled from battle! ${this.trainer} must have been scared!`
      );
    }

    tackle() {
      console.log(`${this.name} used tackle!`);
    }
  }

//   const myFirstPoke = new Pokemon("Pikachu", 9000, 'Electric', "Ash");
//   console.log(myFirstPoke)
//   myFirstPoke.levelUp();
//   myFirstPoke.levelUp();
//   console.log(myFirstPoke)
// myFirstPoke.showName()
//   const myFirstPoke2 = new Pokemon('JigglyPuff', 9001, 'Electric', 'Ash');

// const nickName = "name"
// console.log(myFirstPoke[nickName]);
// console.log(myFirstPoke['name']);
// console.log(myFirstPoke.type);






  class Pikachu extends Pokemon {
    constructor(name, level, trainer, moveSets) {
      super(name, level, "Electric", trainer);
      this.moveSets = moveSets;
      this.atk = Math.floor(Math.random() * 10) + level;
      this.def = Math.floor(Math.random() * 5) + level;
      this.speed = Math.floor(Math.random() * 12) + level;
    }

    useThunderBolt() {
      console.log(`${this.name} has used thunderbolt!!`);
      console.log(
        `${Math.floor(Math.random() * this.atk * 1.2)} damage has been dealt`
      );
    }
  }

  const moves = [`Tail Whip`, `Quick Attack`, `Thunder`, `Charm`, `Surf`];

//   const myFirstPika = new Pikachu('MegaChu', 2, "Will", moves);

//   console.log(myFirstPika)
// console.log(myFirstPika.name);
// console.log(myFirstPika.atk);
// myFirstPika.useThunderBolt();
// myFirstPika.tackle();

