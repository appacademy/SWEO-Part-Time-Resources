//* Bind - bind a context to a function
class Cat {
  constructor( name ) {
    this.name = name;
  }
  purr() {
    console.log("prrrrrrrrrrr")
  }

  purrMore() {
    return this.name;
  }
  doMath(x,y,z) {
    return `${this.name} says ${x} + ${y} = ${z}`;
  }
  rando(array) {
    console.log(array)
    return array.map(el => el.toUpperCase());
  }
}
class Dog {
  constructor(name) {
    this.name = name;
    // this.bark = this.barkPrototype.bind(this);
  }
  bark = () => {
    console.log(this.name);
  }
  // barkPrototype() {
  //   console.log(this.name);
  // }
}
let whiskers = new Cat('whiskers');
let mittens = new Cat('mittens')
let bowser = new Dog('bowser');

let doThePurr = mittens.purrMore;
// const doThePurr = () => console.log(this.name)
// function.bind(context object, arg1, arg2, ...) => return the function bound
// let doThePurr = whiskers.purrMore.bind(whiskers);
let whiskersPurr = doThePurr.bind(whiskers);
let mittensPurr  = doThePurr.bind(mittens);
let bowserPurr   = doThePurr.bind(bowser);

whiskersPurr();
mittensPurr();
bowserPurr();
//* Call and Apply
// return the return of function
// function.call(context object, arg1, arg2, arg3, ...);
// function.apply(context object, [...args]);
let doTheMath = whiskers.doMath;
let strings = ['apple', 'banana', 'coconut'];
console.log( doTheMath.call(whiskers, ...strings) );

let doRando = whiskers.rando;
let applyRando = doRando.apply(whiskers, [strings]);
console.log( applyRando );
//* Context in Arrow Functions
  // context based on location of declaration not invocation
let speak = bowser.bark;
speak();