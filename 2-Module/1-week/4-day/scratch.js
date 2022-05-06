//? Difference of instance method vs static method
// arr.map() - instance method
// Math.random() - static method

// const arr = new Array()
// const arr = []
// Array.isArray(arr)
// Array.map()
// arr.slice()
// arr.isArray()

class Task {
  static taskList = [];
  // static otherList = 35;

  static printTaskList() {
    // const taskList = ['empty array']
    // console.log(taskList)
    // console.log(this.otherList)
    console.log(this.taskList);
  }

  static addTask(task) {
    this.taskList.push(task);
  }

  constructor(taskDetail) {
    this.taskDetail = taskDetail;
    Task.addTask(this);
  }

  printDetail() {
    console.log(this.taskDetail);
  }
}

// const laundry = new Task('laundry');
// const myObj = {taskDetail: 'laundry'}
// console.log(laundry)
// console.log(myObj)
// console.log("-------------------")
// Task.printTaskList();
// console.log("-------------------")
// const dishes = new Task('dishes');
// console.log(dishes)
// console.log("-------------------")
// Task.printTaskList();

// Task.printTaskList();
// laundry.printTaskList()
// laundry.printDetail()
// Task.printDetail();

class Games {
	static library = []

  constructor(name, genre) { //, cost
    this.name = name;
    this.genre = genre;
    // this.cost = cost;
		Games.library.push(this.name)
  }

  play() {
    console.log(`Let's play ${this.name}!`);
    // console.log(`This game is ${this.cost}!`);
  }

  type() {
    console.log(`${this.name} is a ${this.genre}`);
  }
}



// chess.play()
// animalCrossing.type()

class FPS extends Games {
	static fpsLib = []
  constructor(name) { // , cost
    super(name, 'First Person Shooter'); //, cost
		FPS.fpsLib.push(this)
  }
}

// apex.play();
// warZone.play();
// apex.type();
// warZone.type();

//?    overriding     vs    overloading
// different function vs different parameters

class Souls_Like extends Games {
  constructor(name, difficulty) {
    super(name, 'Action RPG');
    this.difficulty = difficulty;
		Games.library.push("Hello")
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
// console.log(Games.library)

// const animalCrossing = new Games('Animal Crossing', 'Farming Sim');
// console.log(Games.library)
// console.log(FPS.fpsLib)

// const warZone = new FPS('Warzone'); // 60
// console.log(Games.library)
// console.log(FPS.fpsLib)

// const apex = new FPS('Apex'); // "Free"
// console.log(Games.library)
// console.log(FPS.fpsLib)

const eldenRing = new Souls_Like('Elden Ring', 10);
console.log(Games.library)

// eldenRing.play()
// eldenRing.type()
// Souls_Like.gitGud()
// eldenRing.gitGud()