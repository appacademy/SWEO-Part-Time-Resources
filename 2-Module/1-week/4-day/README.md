# M2-W1-D4

Today will focus on repetition and drilling. Digging deeper into the topic of
classes, how context works, and why you should care. With a helping of imports
on the side :)

---

## OOP

Styles Compared

```js
// imperative
// say what you want in the order you want it done, very common in scripting languages
// no particular convention on mixing behavior and data

let arr1 = [1,2,3,4,5];

for(let i = 0; i < arr1.length; i++){
  arr1[i] = arr1[i] * 2;
}

console.log(arr1);

// functional
// data and behavior must not be mixed
// based on the composition of functions and not mutating data

let arr2 = [1,2,3,4,5];

const double = (arr) => arr.map(el => el * 2);

console.log('original', arr2);
console.log('output', double(arr2));

// OOP
// data and behavior are coupled
// based on modeling data types based on what they are and what they do

class Doubler {
  constructor(arr){
    this.data = arr;
  }

  double(){
    this.data = this.data.map(el => el * 2);
  }
}

let myDoubler = new Doubler([1,2,3,4,5]);
console.log(myDoubler);
myDoubler.double();
console.log(myDoubler); // instance properties

let parent = Object.getPrototypeOf(myDoubler); // get the class from the class instance
console.log(parent); // just an object with a particular context
console.log(Object.getOwnPropertyNames(parent)); // the instance has its own properties but inherits methods
```

Why OOP?

```js
//we could do this, but repetition is bad

let cali = {
  name: 'Cali',
  age: 5,
  color: 'black',
  sound: 'bark'
}

let chandler = {
  name: 'Chandler',
  age: 4,
  color: 'yellow',
  sound: 'bark'
}

let juice = {
  name: 'Juice',
  age: 2,
  color: 'black',
  sound: 'meow'
}

const makeSound = (animal) => {
  console.log(`${animal.name} says ${animal.sound}`);
};

makeSound(cali);
makeSound(juice);

//OOP approach

class Animal {
  constructor(name, age, color, sound){
    this.name = name;
    this.age = age;
    this.color = color;
    this.sound = sound;
  }

  makeSound(){
    console.log(`${this.name} says ${this.sound}`)
  }
}

let cali = new Animal('Cali', 5, 'black', 'woof');

cali.makeSound();

let juice = new Animal('Juice', 2, 'black', 'meow');

juice.makeSound();


class Dog extends Animal {
  constructor(name, age, color){
    super(name, age, color, 'bark');
  }
}

let chandler = new Dog('Chandler', 4, 'yellow');
chandler.makeSound();
```

Classes and OOP are about making blueprints in order to make a factory to
produce a peice of data with predefined rules.

---

## Mental Break 1 (10m)

---

## Context

Most of the time the context ('this' value) of any given function is determined
by where it is called (runtime binding).

Important note: this isnt true for arrow functions, arrow functions do not
create their own this binding, they keep the binding of when they were called
lexically.

```js
let myObj = {
  key: 'value',
  method: function(){
    console.log(this.key);
  }
}

myObj.method()

let myObj2 = {
  key: 'value',
  method: () => {
    console.log(this.key);
  }
}

myObj2.method()

function myFunc() {
  let myObj = {
    key: "value",
    method: () => {
      console.log(this);
    },
  };
  myObj.method();
}

myFunc();

function global() {
  console.log(this);
}
global();

```

The context of any given class method is the class instance that it is being
called on, the runtime binding.

---

## Mental Break 2 (10m)

---

## Imports/Exports

### Common JS modules

In JavaScript there are two primary runtime environments: node and the browser.

They have different import/export syntax for now, although there are proposals
to merge the two systems moving forward.

```js
//how to export from a file

module.exports = {
  function1,
  function2,
  data1,
  data2,
  data3
}
```

```js
//how to import into a file
const imports = require('./relative-file-path.js');

//or

const {function1, data1, data3} = require('./relative-file-path.js');
```

---

## Practice: Employee/Manager (SOLO)

---
