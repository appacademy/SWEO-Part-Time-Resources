//* Bind - function.bind(object, ...args)
 // return the function bound
class Cat {
  constructor(name) {
    this.name = name;
  }
  purr() {
    console.log("prrrrrrrrrrr")
  }

  purrMore() {
    this.purr();
  }
  doMath( x, y) {
    return `${this.name} says: ${x} + ${y} = ${x + y}`;
  }
}
class Dog {
  constructor( name ) {
    this.name = name;
  }
  bark = () => {
    console.log(this.name);
  }
}
let whiskers = new Cat('Whiskers');
let bowser   = new Dog('Bowser');

let doThePurr = whiskers.purrMore;
// doThePurr() // TypeError
doThePurr = doThePurr.bind(whiskers);
doThePurr();
let doMathHere = whiskers.doMath;

let whiskerMath = doMathHere.bind(whiskers, 2, 4);
let bowserMath = doMathHere.bind(bowser, 3,7);
console.log(typeof whiskerMath)
// console.log(whiskerMath())
// console.log(bowserMath());

// setTimeout(whiskers.purrMore.bind(whiskers), 5000);
//* Call and Apply
 // call   => function.call(object, arg1, arg2)
 // apply  => function.apply(object, [...args])
 // return the return of our function

let catMath1 = doMathHere.call(whiskers, 2, 4);
let catMath2 = doMathHere.apply(whiskers, [2, 4]);

console.log( typeof catMath1 );
console.log( catMath2 );
//* Context in Arrow Functions
 // 'this' referes to  where where the code is contained not where it's called
 class BigDog extends Dog{
  constructor( name ) {
    super(name);
    // this.name = name;
  }
}

let chompers = new BigDog('chompers');
chompers.bark();
let speak = chompers.bark;
speak();