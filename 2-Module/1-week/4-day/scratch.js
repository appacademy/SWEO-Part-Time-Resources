// class Task {
//   static taskList = [];
//   static otherList = 35;
//   static printTaskList() {
//     let taskList = ['new array'];
//     console.log(taskList);
//     console.log(this.taskList);
//     console.log(this.otherList);
//   }

//   static addTask(task) {
//     this.taskList.push(task);
//   }

//   constructor(taskDetail) {
//     this.taskDetail = taskDetail;
//     Task.addTask(this);
//   }
// }

// const laundry = new Task('laundry');
// Task.printTaskList();

//? How can I tell diff between static vs instance methods and parameters
// arr.map() // instance
// Math.random() // static

//?                overriding
// same name, same parameters, different function
//?                 vs
//?                overloading
// same name, same function, different parameters

// class Game {
//   constructor(name, genre, input) {
//     this.name = name;
//     this.genre = genre;
//     this.input = input;
//   }

//   play() {
//     console.log(`Let's play ${this.name}!`);
//   }

//   type() {
//     console.log(`${this.name} is a ${this.genre}`);
//   }
// }

// class FPS extends Game {
//   constructor(somethingElse) {
//     super('Warzone', 'KBM', somethingElse);
//   }
// }

// const eR = new Game('Elden Ring', 'Action RPG');
// const aC = new Game('Animal Crossing', 'Farming Sim');
// const wZ = new FPS('First Person Shooter');
// eR.play();
// eR.type();
// aC.play();
// aC.type();
// wZ.play();
// wZ.type();
// console.log(wZ.name);
// console.log(wZ.genre);
// console.log(wZ.input);

class Game {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
    this.someVar = 'anything';
    Game.library.push(this);
  }

  static library = [];

  play() {
    console.log(`Let's play ${this.name}!`);
  }

  type() {
    console.log(`${this.name} is a ${this.genre}`);
  }
}

class FPS extends Game {
  constructor(name) {
    super(name, 'First Person Shooter');
  }
}

class Souls_Like extends Game {
  constructor(name, difficulty) {
    super(name, 'RPG');
    this.difficulty = difficulty;
    // this.genre = this.constructor.name;
    // console.log(this.name);
    // console.log(this.genre);
  }

  play() {
    if (this.difficulty > 8) {
      console.log('Prepare to die....');
    } else {
      console.log('Should be fine');
    }
  }

  type() {
    console.log(`I love ${this.genre} games!`);
  }

  static gitGud() {
    console.log('Git gud filthy casual');
  }
}

const eR = new Game('Elden Ring', 'Action RPG');
// console.log(eR.name);
console.log(Game.library);

const aC = new Game('Animal Crossing', 'Farming Sim');
console.log(Game.library);

const bB = new Souls_Like('Bloodborne', 10);
console.log(Game.library);

const wZ = new FPS('First Person Shooter');
console.log(Game.library);

console.log(bB.library)
// eR.play();
// bB.play();
// bB.type();
// Souls_Like.gitGud();
// bB.gitGud();
