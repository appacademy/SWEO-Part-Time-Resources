// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
//     sayName(someString) {
//         console.log(someString)
//         console.log(this.name);
//         console.log(this)
//     }
//   }
  
  
//   class Dog {
//       constructor(name) {
//           this.name = name;
//         }
//     }
  

//     let cat = new Cat("Meowser");
//     let dog = new Dog("Fido");
    
//   let sayNameFunc = cat.sayName;

//   cat.sayName() // 
//   console.log(sayNameFunc) // function: sayName
//   sayNameFunc() // throws error, because this is undefined and there is no name property

  
//   let sayHelloCat = sayNameFunc.bind(cat);
// let bound = cat.sayName.bind(cat)
//   sayHelloCat(); // print meowser because we bind sayNameFunc to our cat instance so cat === 'this'


//   console.log(bound) // !!!bind evaluates to the function that is being bound !!!
  
//   let sayHelloDog = sayNameFunc.bind(dog)
//   sayHelloDog(); // Fido


// class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   class Cat {
//     constructor(name) {
//         this.name = name
//     }

//     purrNTimes(n, sound) {
//         for(let i = 0; i < n; i++) {
//             console.log(`${this.name} says: ${sound}`);
//         }
//         return this
//     }
//   }
  
//   let dog = new Dog('Fido');
//   let cat = new Cat('Meowser');
  
// //   // make Fido meow 5 times using `call`
// let callPurrTimes = cat.purrNTimes
//  let called = callPurrTimes.call(dog, 5, 'bark'); // Fido says: meow 5, times


//  console.log(called) //  !!!call and apply evaluate to the functions return value!!!
  
//   // make Fido meow 5 times using `apply`
    // let applyPurrTimes = cat.purrNTimes
    // applyPurrTimes.apply(dog, [5, 'meow']);

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
//   dog.delayedBark() // undeefined 

class Dog {
    constructor(name) {
      this.name = name;
    }

    arrowBoundBark() {
      setTimeout(() => {
        console.log(this.name);
      }, 1000);
    }

  }
  
  let dog = new Dog("Fido");
  dog.arrowBoundBark(); // 


