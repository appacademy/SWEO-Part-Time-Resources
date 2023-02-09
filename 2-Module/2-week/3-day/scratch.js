// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
//     sayName() {
//         console.log(this.name);
//     }
//   }
  
//   let cat = new Cat("Meowser");
  
//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   let dog = new Dog("Fido");
  
//   let sayNameFunc = cat.sayName;
// //   console.log(sayNameFunc()) // throws an error 
  
//   let sayHelloCat = sayNameFunc.bind(cat);
//   console.log(sayHelloCat) // returns the function that is bound 
//   sayHelloCat(); // prints meowser
  
//   let sayHelloDog = sayNameFunc.bind(dog);
//   sayHelloDog(); // prints Fido


// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   class Cat {
//     constructor(name) {
//         this.name
//     }

//     purrNTimes(n) {
//         for(let i = 0; i < n; i++) {
//             console.log(`${this.name} says: meow`);
//         }
//         return n
//     }
//   }
  
//   let dog = new Dog('Fido');
//   let cat = new Cat('Meowser');
  
//   // make Fido meow 5 times using `call`
//   let purrTimes = cat.purrNTimes
//   let called = purrTimes.call(dog, 10);
//   console.log(called) // call evaluates to its return value of the function that is bound 
  
//   // make Fido meow 5 times using `apply`
// let purrTimesApply = cat.purrNTimes
//   let applied = purrTimesApply.apply(dog, [5]); 
//   console.log(applied) //  apply evaluates to its return value of the function that is bound 


// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//     delayedBark() {
//       setTimeout(function() {
//         console.log(this.name);
//       }, 1000);
//     }
//   }
  
//   let dog = new Dog("Fido");
//   dog.delayedBark()  // undefined because setTimeout is on the global object and so this in setTimeout is global not what its in

// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//     arrowBoundBark() {
//       setTimeout(() => {
//         console.log(this.name);
//       }, 1000);
//     }
//   }
  
//   let dog = new Dog("Fido");
//   dog.arrowBoundBark();     // "Fido" (after 1 second)

// function SomeFunc(){
//     console.log(this)
// }

// SomeFunc()