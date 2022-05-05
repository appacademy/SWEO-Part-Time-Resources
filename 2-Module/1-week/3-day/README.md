# M2W1D3 Lecture Notes

## Quizzes - 25 mins

## Classes Lecture

What is a class?

- A class is a template/blueprint for creating objects
- A instance of a class is an object with all the properties and methods defined
  on the class
- Some of our favorite datatypes such as Array and Object are classes. For
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
class Pokemon {
  constructor(name, level, type, trainer){
    this.name = name;
    this.level = level;
    this.type = type;
    this.trainer = trainer;
  }

  levelUp(){
    this.level += 1;
    console.log(`${this.name} has leveled up to ${this.level}!`)
  }

  showName(){
    console.log(`Hi my name is ${this.name}`)
  }

  run(){
    console.log(`${this.name} has fled from battle!`)
  }
}
```
