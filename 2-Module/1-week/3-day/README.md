# M2W1D3 Lecture Notes

## Quizzes - 25 mins

## Quiz Discussion - 25 mins

## Classes Lecture - 15 Min

What is a class?

- A class is a template/blueprint for creating objects
- A instance of a class is an object with all the properties and methods defined
  on the class
- Some of our favorite datatypes such as Array, and Object are classes. For
  example the method `someArray.forEach()` is callable in this way because it is
  an instance method defined on the class `Array`.
  - [Array Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Array)
  - Notice how you can create an array using the `new` keyword

Why does OOP use Classes?

- Classes are a clean way to `Encapsulate` your code. They provide an API
  that hides the internal complexity(logic) and manages the data of your object
- Classes allow us to model real world entities in an organized way which can
  make solving certain types of problems easier

```js
// Define a class with the class keyword followed by the name with the first
// letter capital and the rest of the words camel case
class Taco {
  // constructor is invoked when you create a new class such as:
  // new Taco("chicken", ["sour cream", "cheese"])
  constructor(meat, toppings = []) {
    // define any instance variables or logic that needs to be run when an
    // instance of the class is created
    this.meat = meat
    this.toppings = toppings
    this.tortillaType = 'corn'
  }
  // instance method
  assemble() {
    return `These are some delicious ${this.meat} tacos on a ${
      this.tortillaType
    } tortilla with all the toppings ${this.toppings.join(', ')}.`
  }
}
// create a instance of a Taco and store in a variable
const carnitasTaco = new Taco('carnitas', ['guacamole', 'salsa'])
// call an instance method
console.log(carnitasTaco.assemble())
```


### Inheritence 

```js
class Instrument {
  constructor(name, family) {
    this.name = name;
    this.family = family;
  }

  play() {
    console.log('toot toot toot');
  }
}
  class Guitar extends Instrument {
    constructor() {
      Guitar.total += 1;
      super(`Guitar ${Guitar.total}`, 'Woodwinds');
    }
  
    static total = 0;
  
    strumGuitar() {
      console.log('strumming guitar');
    }
    
  }

class Trumpet extends Instrument {
  constructor() {
    Trumpet.total += 1;
    super(`Trumpet ${Trumpet.total}`, 'Brass');
  }

  static total = 0;

  releaseSpitValve() {
    console.log('releasing spit valve');
  }
}


// What will print to the console?
const jamesGuitar = new Guitar();
const jamesTrumpet = new Trumpet();
jamesGuitar.play();
jamesTrumpet.play();
jamesGuitar.strumGuitar();
jamesTrumpet.releaseSpitValve();

/* 
We all know that Saxophones make more of a 'squawk squawk squawk'
How can I change just the Saxophones to squawk instead of toot?
*/
```

### Group Activity - 20 min

- Lets come up with some things that would be easy to model with a class
- Lets come up with some attributes and actions that these objects could have

## 
