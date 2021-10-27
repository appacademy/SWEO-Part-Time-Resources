# W7D3 Lecture Notes

## Quizzes - 25 mins

## Quiz Discussion - 25 mins

## Classes Lecture - 30 Min

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

- Classes are a clean way to `Encapsulate` your code and providing an API
  that hides the internal complexity and manages the data of your object
- Techniques
  - Store internal data as properties - these are not usually exposed to the
    user of this class
  - Has methods defined on the class - these can perform actions and update the
    state of the instance

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

## Create a Dog - 20 mins

- Should have minimum of three instance variables assigned
- Should have a minimum of three instance methods
- TEST YOUR CODE!!!!

## Create a Dog Discussion - 20 mins

## Create a Bicycle - 40 mins

- Should have minimum of 5 instance variables assigned
- Should have a minimum of 5 instance methods
- TEST YOUR CODE!!!!

## Create a Bicycle Discussion - 20 mins

## Extra Time Read HW
