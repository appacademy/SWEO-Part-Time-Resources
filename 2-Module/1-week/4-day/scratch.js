//? How might I tell the diff between static vs instance methods /params
// arr.map() - // instance
// Math.random() - // static

//! overloading
//? same function name, same function logic, different function parameters
//! overriding
//? same function name, same function parameters, different function logic

class Games {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;

    Games.library.push(this);
  }

  static library = [];

  play() {
    console.log(`Let's play ${this.name}`);
  }

  type() {
    console.log(`${this.name} is a ${this.genre}!`);
  }
}

class FPS extends Games {
  constructor(name) {
    super(name, 'First Person Shooter');
  }
}

class Souls_Like extends Games {
  constructor(name, difficulty) {
    super(name, 'Action RPG', difficulty);
  }

  play() {
    if (this.difficulty > 7) {
      console.log('Prepare to die...');
    } else {
      console.log('Should be easy enough');
    }
  }

  static gitGud() {
    console.log('Gitgud you filthy casual');
  }
}

const eR = new Games('Elden Ring', 'RPG');
// console.log(eR)
// console.log(Games.library);
const aC = new Games('Animal Crossing', 'Farming Sim');
// console.log(Games.library);
const wZ = new FPS('Warzone');
// console.log(Games.library);
const bB = new Souls_Like('Bloodborne', 10);
console.log(Games.library);

Games.library.forEach((el) => {
  console.log(el.name);
});
// bB.play();
// bB.type();
// console.log(bB.difficulty);
// console.log(bB.diff);

// console.log(Games.library);

// console.log(wZ.name);
// console.log(wZ.genre);
// eR.play();
// aC.type();
// wZ.play();
// wZ.type();
