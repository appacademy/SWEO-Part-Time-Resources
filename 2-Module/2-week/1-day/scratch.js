// "use strict";

//* Context - refers to 'this' when code executed
 // this is the object invoking the function / method

class Dog {
  constructor( name, isSitting) {
    this.name = name;
    this.isSitting = isSitting;
  }

  stand() {
    this.isSitting = false;
    return this.isSitting;
  }
  changeName() {
    this.name = 'Toad';
  }
}

let bowser = new Dog('Bowser', true);

bowser.stand(); //Method-Style Invocation
console.log( bowser );

class Cat {
  purr() {
    console.log('prrrrrrrrrrrr');
  }
  purrMore() {
    this.purr();
  }
}

let cat = new Cat()

// cat.purrMore();
// cat.purr();

//* Context in general Functions
function testMe() {
  console.log(this);
}
// testMe();

// class Dog {
//   constructor( name, isSitting) {
//     this.name = name;
//     this.isSitting = isSitting;
//   }

//   stand() {
//     this.isSitting = false;
//     return this.isSitting;
//   }
//   changeName() {
//     this.name = 'Toad';
//   }
// }

let change = bowser.changeName;
// change();
// bowser.changeName();

// purrMore();
// global.setTimeout(cat.purrMore, 5000);

//* Use Strict
function showGlobal() {
  console.log(this);
}
showGlobal();
