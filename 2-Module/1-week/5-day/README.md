# M2W1D5

## Review

## DRY

- Means "Don't Repeat Yourself"
- `DRY` is a programming technique that prevents you from writing the same code twice.
- Used when refactoring or to be kept in mind while coding, if you see any repeated patterns in your code, you can refactor it to make it `DRY`.
- Helps us to make changes to our code easily and efficiently.

## SRP

- Single Responsibility Principle means that a `class`, `module`, or `function` should only have one focus.
- If your `function` is doing too much, you should refactor it to be more focused by creating `helper functions`.
- Helps us to make changes to our code easily and efficiently as well!

## OOP

- `Object Oriented Programming` is an approach or mindset for breaking down a problem into smaller, more manageable pieces.
- Implementation details of a single feature are bundled into a single API that interacts with other APIS of different features. (see `Encapsulation`)
- The **main concept** behind `OOP` is the idea that you can group *data* and *related actions* together to treat them as a *single entity* within a larger system.

## Encapsulation

- Encapsulation is putting all of the details behind an object's data (properties) and behaviors (methods).
- When you instantiate an `object instance` from a `class`, it has access to all of the functionality of the `class`. The `constructor` builds your object for you.. this is `encapsulation` in action!

## Classes

- A `class*` is a blueprint for an object. It defines the `attributes` and `behavior` for an object type.
- A `class` is created using the `class` keyword followed by the *capitalized* name of the class.
- To define a class' properties, we need to define the `constructor` function.
- A `constructor` is a function that is called when we create a new `instance` of a `class` and it determines what `properties` (**attributes**) are returned in the new `object` that is created. We do not return a value from the `constructor`.
- The `this` keyword is used to access the `properties` of the `instance object` that has been created. It refers to the `context` of the object (the specific `instance`)
- To **instantiate** a class, we use the `new` keyword.

```js
class Person {
  constructor(name) {
    // defining our properties
    this.name = name;
  }

  // instance method
  speak() {
    return `${this.name} says hi`;
  }
}

let jordyn = new Person('Jordyn');
// `this` will refer to 'Jordyn' when jordyn.speak() is called.
let andres = new Person('Andres');
// `this` will refer to 'Andres' when andres.speak() is called.
```

### Methods

- A **method** is a function that performs an action for the class.

#### Instance Methods and Variables

- **Instance methods** are functions that are called on an `instance object`. They are used to update the `properties` of, and to interact with, the `instance object` in some way.
- To define an `instance method` you begin with the name of the method, then a set of parentheses, then a set of curly braces with the relevant code inside. We do not use the `function` keyword.
- you **must** use the `this` keyword within the method body to access the `properties` and `methods` of the current `instance` of the object.
- **Instance variables** are variables that are specific to the `instance object` and are not shared with other `instances` of the same class.

#### Static Methods and Variables

- **Static methods** are functions that are called directly on the `class` itself, not an `instance` of that `class`.
- The syntax for a static method is the same as an instance method, except that that their declarations start with the `static` keyword.
- Because **static methods** are called on the `class` itself, they cannot use the `this` keyword to access an `instance`. You can pass one or more `instances` as a parameter to perform actions on those specific `instances`.
- **Static methods** can also be used to perform *utility* actions that are independent of an `instance` of the `class` but are related to the `object type` in some way.
- **Static variables** are variables that are shared with all `instances` of the same `class`. It is specific to the `class` itself and cannot be accessed or updated by an `instance` itself.
- It is important to remember that when creating your `class`, you can use a `static method` or `variable` inside of an `instance method`, which in turn allows your `instance` to use the information returned from those when that `method` is called, but you cannot key into an `instance` and call a `static method` or `variable`, you must key into the `class` itself.

```js
class Person {
  constructor(name) {
    this.name = name;

    // incrementing our static variable every time a new instance is created
    Person.population++; 
  }

  speak() {
    return `${this.name} says hi`;
  }

  // creating our static variable
  static population = 0;

  // creating our static method
  static getPopulation() {
    return Person.population;
  }
}

let jordyn = new Person('Jordyn');
let andres = new Person('Andres');

jordyn.getPopulation(); // TypeError: jordyn.getPopulation is not a function
console.log(Person.getPopulation()); // 2
```

## Inheritance

- JavaScript strictly uses **implementation inheritance**, which means the `properties` and `methods` defined on a parent `class` are available to the child `class` and to the `instances` of the child `class`.
- We use the `extends` keyword to **inherit** the `properties` and `methods` of a parent `class` so they don't have to be redefined in the child `class` (keeping our code `DRY`!)
- if you create a `child class` from a `parent class`, it will `inherit` the `static methods and variables` of the parent `class`, though they are still only accessible by keying into the `class` name (parent or child).
- the `super` function is what gives us access to the `properties` of the parent `class`.

```js
class Person {
  constructor(name) {
    this.name = name;

    // incrementing our static variable every time a new instance is created
    Person.population++; 
  }

  // creating our static variable
  static population = 0;

  // creating our static method
  static getPopulation() {
    return Person.population;
  }
}

class Mother extends Person {
  constructor(name) {
    super(name);
    this.children = [];
  }

  giveBirth(child) {
    this.children.push(child);
    child.setMother(this);
  }

  getChildren() {
    return this.children;
  }

  // creating an instance method to call the static method of the parent class
  getPopulation(){
    return Person.getPopulation();
  }
}


const jordyn = new Mother('Jordyn');

console.log(Person.getPopulation()); // 2
console.log(Mother.getPopulation()); // 2
console.log(jordyn.getPopulation()); // 2

```

## Polymorphism

- Polymorphism is a way of representing the same interface for different underlying implementations.
- Two most common types are:
  - `Overloading` (when you define multiple `methods` with the same name, but that take in **different parameters**, it will still give the same result)
  - `Overriding` (when you define multiple `methods` with the same name, but that return **different results**)
- If you `overload` or `override` a parent `method`, the child `class` and any classes that **inherit** from that child will use the child `class`' method unless it has been `overriden` or `overloaded` itself by the grandchildren.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak(noise) {
    return `${this.name} ${noise}s`;
  }

  potty(){
    return `${this.name} just went potty!`;
  }
}

class Cat extends Animal{
  constructor(name){
    super(name)
  }
  // will use the method of it's closest ancestor when the speak method is called.

  // overriding (get a different result)
  potty(){
    return `${this.name} loves to use the litter box`
  }
}

class Tabby extends Cat{
  constructor(name){
    super(name)
  }
  // will use the method of it's closest ancestor when the speak and potty methods are called.
}

class Dog extends Animal {
  constructor(name){
    super(name)
  }

  // overloading (using different params, same result)
  speak() {
    return `${this.name} barks`;
  }


}

class Poodle extends Dog {
  constructor(name){
    super(name)
  }
  // will use the method of it's closest ancestor when the speak method is called.

  // overriding (get a different result)
  potty(){
    return `${this.name} is so naughty! They went on the carpet!`
  }
}

const kitty = new Cat('kitty');
const queen = new Tabby('queen')
const doggo = new Dog('doggo');
const fifi = new Poodle('fifi');

console.log(kitty.speak('meow')) // kitty meows >> using the Animal method
console.log(queen.speak('roar')) // queen roars >> using the Animal method
console.log(queen.speak()) // queen undefineds >> using the Animal method
console.log(doggo.speak()) // doggo barks >> using the Dog Method
console.log(fifi.speak()) // fifi barks >> using the Dog Method
console.log(doggo.potty()) // doggo just went potty! >> using the Animal Method
console.log(queen.potty()) // queen loves to use the litter box >> using the Cat Method
console.log(fifi.potty()) // fifi is so naughty! They went on the carpet! >> using the Poodle Method

```

## Project Time (until the 30m EOD Kahoot)

- [Practice Assessment](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---practice-assessment/readme)
  - No walkthrough this week as its just MCQ!
- [Adventure Project](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/adventure-project--challenge-)
- [Adventure Project Combat](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/adventure-project-part-2--combat--challenge-)

If you finish your projects I would suggest focusing on the following:

### Readings

#### [DRY](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/dry)

#### [Single Responsibility Principle (SRP)](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/single-responsibility-principle)

#### [What is OOP? Why OOP?](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/what-is-oop--why-oop-)

#### [Encapsulation](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/encapsulation)

#### [Inheritance](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/inheritance)

#### [Inheritance Class Syntax](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/inheritance-class-syntax)

#### [Static Methods and Variables](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/static-methods-and-variables)

#### [Polymorphism](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/polymorphism)

#### [Overriding a method in a parent class](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/overriding-a-method-in-a-parent-class)

---

### Quizzes

#### [Formative Quiz - Tuesday](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/formative-quiz---tuesday)

#### [Single Responsibility Principle Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/single-responsibility-principle-quiz)

#### [DRY Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/dry-quiz)

#### [Inheritance Quiz](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/inheritance-quiz)

#### [Formative Quiz - Thursday](https://open.appacademy.io/learn/js-py---pt-may-2022-online/week-7---oop/formative-quiz---thursday-)

## Kahoot

- Will happen at EOD, 30 min before class ends!
