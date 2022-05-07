//? Difference between an instance method vs static method
// arr.map() - instance method
// Math.random() - static method

// const arr = [] // new Array()
// Array.isArray(arr)

class Task {
  static taskList = [];
  // static otherList = 35

  static printTaskList() {
    // const taskList = ["empty array"]
    // console.log(taskList)
    // console.log(this.otherList);
    console.log(this.taskList);
  }

  static addTask(task) {
    this.taskList.push(task);
  }

  constructor(taskDetail) {
    this.taskDetail = taskDetail;
    Task.addTask(this);
    // console.log(this, "This is this")
    // return this // {taskDetail: "dishes"}
  }

  doTask() {
    console.log(`I'm going to do the ${this.taskDetail}`);
  }
}

const laundry = new Task('laundry');
// console.log(laundry, "This is laundry")
// Task.printTaskList();
laundry.doTask();
// Task.doTask() // errors because we don't have instance methods on the main Class

const dishes = new Task('dishes');
// console.log(dishes, "This is dishes")

// Task.printTaskList();
// dishes.doTask()

//?    overriding     vs    overloading
// different function vs different parameters

class Games {
  static library = [];

  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
    Games.library.push(this);
  }

  play() {
    console.log(`Let's play ${this.name}!`);
  }

  type() {
    console.log(`${this.name} is a ${this.genre}`);
  }
}

// chess.play()
// animalCrossing.type()

class FPS extends Games {
  static fpsLib = [];
  constructor(name) {
    super(name, 'First Person Shooter');
    FPS.fpsLib.push(this);
  }
}

// warZone.play()
// warZone.type()

class Souls_Like extends Games {
  constructor(name, difficulty) {
    super(name, 'Action RPG');
    this.difficulty = difficulty;
  }

  play() {
    if (this.difficulty > 7) {
      console.log('Prepare to die...');
    }
  }

  static gitGud() {
    console.log('gitgud you filthy casual');
  }
}

// const chess = new Games('Chess', 'Strategy');
// console.log(Games.library);
// console.log(FPS.fpsLib);
// const animalCrossing = new Games('Animal Crossing', 'Farming Sim');
// console.log(Games.library);
// console.log(FPS.fpsLib);

// const warZone = new FPS('Warzone');
// console.log(Games.library);
// console.log(FPS.fpsLib);

// const eldenRing = new Souls_Like('Elden Ring', 10);
// console.log(Games.library);
// console.log(FPS.fpsLib);

// eldenRing.play()
// Souls_Like.gitGud()
