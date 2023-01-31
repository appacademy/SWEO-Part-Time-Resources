
//Context
//Scope and Context are DIFFERENT THINGS

//Scope - refers to the visibility and availablity of variables

//Context - refers to value of the THIS keyword
//Another definition - "this" refers to the object that is executing the current function/method

//ALL functions have a scope AND a context

//If we do not assign a context to an object, the context will be the global object

//Strict mode - the string 'use strict' protects the global from being accessed or manipulated

// function test() {
//   console.log(this);
// }

// test();


// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   changeName() {
//     this.name = "Marley";
//   }
// }

// let haru = new Dog("Haru");

// let king = new Dog("Kingly");

// let changeFunc = king.changeName;


// console.log(changeFunc())


// class Cat {
//   purr() {
//     console.log("Prrrrr");
//   }

//   purrMore() {
//     this.purr();
//   }
// }

// let king = new Cat();

// king.purrMore()

class Person {
  constructor(firstName) {
    this.firstName = firstName;
  }

  addProp() {
    this.color = "purple"
  }
}

function printName() {
  console.log(this.firstName)
}

const adrian = new Person('Adrian');

adrian.addProp()

console.log(adrian.color)



function hello() {
  console.log(`Hello ${this.firstName}`);
}

const greeting = new hello();