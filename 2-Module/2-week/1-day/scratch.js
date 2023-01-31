'use strict';

//Context
//Scope and Context are DIFFERENT

//Scope - Refers to the visibility and availability of variables

//Context - Refers to the value of THIS (the keyword)
//Another definition - When it comes to determining the context of a function/method
//What object is executing/invoking that function? That object is the value of this

//"use strict" protects the global object from being accessed or mutated

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

// let changeFunc = haru.changeName;

// console.log(changeFunc());

class Hat {
  constructor(type) {
    this.type = type;
  }

  changeType() {
    this.type = "snapback";
  }
}

let bucket = new Hat("bucket");
let change = bucket.changeType;
change();