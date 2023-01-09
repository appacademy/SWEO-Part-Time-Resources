// "use strict";

//* Context - refers to 'this' when code is executed
  // console.log()
  class Dog {
    constructor(name, isSitting) {
      this.name = name;
      this.isSitting = isSitting;
    }
    stand() {
      this.isSitting = false;
      return this.isSitting
    }
    changeName() {
      this.name = 'Layla';
    }
  }

  let bowser = new Dog('Bowser', true);
  let toad = new Dog('Toad', true);

  // console.log( bowser );
  // console.log( toad );
  // bowser.stand();
  // console.log( bowser );
  // console.log( toad );

  class Cat {
    purr() {
      console.log('prrrrrrrrrrrrr');
    }
    purrMore() {
      this.purr();
    }
  }

  let cat = new Cat();
  cat.purrMore(); //Method-Style Invocation

  //* Context when using normal functions
function testMe() {
  console.log(this);
}
// testMe();

//* Other Cases of Context

// class Dog {
//   constructor(name, isSitting) {
//     this.name = name;
//     this.isSitting = isSitting;
//   }
//   stand() {
//     this.isSitting = false;
//     return this.isSitting
//   }
//   changeName() {
//     this.name = 'Layla';
//   }
// }
let change = bowser.changeName;
// let change = () => this.name = 'layla';
// console.log( change() );

// global.setTimeout( cat.purrMore, 5000);

//* use strict - when used makes the global object return undefined
function seeGlobal() {
  console.log(this);
}
seeGlobal();