class Cat {
    constructor(name) {
      this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
  }
  
  let cat = new Cat("Meowser");
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  let dog = new Dog("Fido");
  
  let sayNameFunc = cat.sayName;
  
  let sayHelloCat = sayNameFunc.bind(cat);
  sayHelloCat(); // prints Meowser
  
  let sayHelloDog = sayNameFunc.bind(dog);
  sayHelloDog(); // prints Fido


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
//     }
//   }
  
//   let dog = new Dog('Fido');
//   let cat = new Cat('Meowser');
  
//   // make Fido meow 5 times using `call`
//   cat.purrNTimes.call(dog, 5);
  
//   // make Fido meow 5 times using `apply`
//   cat.purrNTimes.apply(dog, [5]);


// class Dog {
//     // ...constructor same as before
//     arrowBoundBark() {
//       setTimeout(() => {
//         console.log(this.name);
//       }, 1000);
//     }
//   }
  
//   let dog = new Dog("Fido");
//   dog.arrowBoundBark();   


// class Dog {
//     // ...constructor same as before
//     arrowBoundBark() {
//       setTimeout(() => {
//         console.log(this.name);
//       }, 1000);
//     }
//   }
  
//   let dog = new Dog("Fido");
//   dog.arrowBoundBark();     // "Fido" (after 1 second)