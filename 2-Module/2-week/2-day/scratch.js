//BIND
//the bind() method ensure that the context of a function is correct
//or we can use it to change the context of a function

//MDN Definition = "The simplest use of bind() is to make a function that, no matter
// how it's called, is called with a particular context".

//SYNTAX - funcToBind.bind(contextObj)

//When bind is called, it returns what we call an "exotic function". Basically
//that just means that it always has a particular context

//let boundFunc = sayWho.bind(dog, args);

// let catFunc = sayWho.bind(cat);

//CALL AND APPLY
//While bind() returns a new function that can be called multiple times w/ the given context,
//call & apply INVOKE the function immediately and return the return value
//of that function

//Syntax : func.call(context, arg1, arg2, ...)
//CALL seperates arguments with commas
//C is for comma

//Syntax : func.apply(context, [args])
//APPLY puts arguments into an array
//A is for array

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   // whoAmI() {
//   //   console.log(this.name);
//   // }
//   barkNTimes(n) {
//     for (let i = 0; i < n; i++) {
//       console.log(`${this.name} yelled at you.`)
//     }
//   }

// }

// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
// }

// let cat = new Cat("King");
// let dog = new Dog("Haru");

// let yellingFunc = dog.barkNTimes;

// yellingFunc.call(dog, 5);

// yellingFunc.apply(cat, [5])

//let sayWho = dog.whoAmI;

//CONTEXT WITHIN ARROW FUNCTIONS
//Arrow functions apply context differently

//An arrow functions THIS keyword refers to the code that contains it, NOT CALLS IT





class Dog {
  constructor(name) {
    this.name = name;
  }
  // delayedBark() {
  //   setTimeout(function() {
  //     console.log(this.name)
  //   }.bind(dog), 1500)
  // }
  delayedBark() {
    setTimeout(() => {
      console.log(this.name)
    }, 1500)
  }
}

let dog = new Dog("Haru");

dog.delayedBark()