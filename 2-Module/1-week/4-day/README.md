# M2W1D4

## Quizzes - 12 min

- Class Syntax II Quiz
- Polymorphism Quiz

## Static Methods and Variables

```js
/* 
I want to keep track of EVERY task I create
  Create a Static variable that will hold all of the Task instances
  Add each instance to that variable at construction time
*/
class Task {
  static taskList = [];

  static printTaskList() {
    console.log(this.taskList);
  }

  static addTask(task) {
    this.taskList.push(task);
  }

  constructor(taskDetail) {
    this.taskDetail = taskDetail;
    Task.addTask(this);
  }
}

const laundry = new Task('laundry');
Task.printTaskList();
```

## Polymorphism

```js
class Games {
  constructor(name, genre) {
    this.name = name;
    this.genre = genre;
  }


  play() {
    console.log(`Let's play ${this.name}!`);
  }

  type() {
    console.log(`${this.name} is a ${this.genre}`);
  }
}

const chess = new Games('Chess', 'Strategy');
const animalCrossing = new Games('Animal Crossing', 'Farming Sim');

class FPS extends Games {
  constructor(name) {
    super('First Person Shooter', name);
  }
}

const warZone = new FPS('Warzone');

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

const eldenRing = new Souls_Like('Elden Ring', 10);
```

## Friendly and Evil Dragons (Today and Friday HW)

## Bonus: Manager and Employee Salaries (Wednesday)
