class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  };

  // to test, copy these functions and paste into the setTimeout in ageUp.

  // function(){
  //   console.log(`Happy birthday! ${this.name} is ${this.age} years old!`);
  // }
  
  // () => {
  //   console.log(`Happy birthday! ${this.name} is ${this.age} years old!`);
  // }

  ageUp(){
    this.age++;
    setTimeout(() => {
      console.log(`Happy birthday! ${this.name} is ${this.age} years old!`);
    }, 2500);
  };
}

const joe = new Person('Joe', 24);
// try the function declaration syntax first
joe.ageUp(); // prints Happy birthday! undefined is undefined years old!
// the context of this has been lost!

// try the arrow syntax next
// joe.ageUp(); // prints Happy birthday! Joe is 25 years old!
// the context is correct because the arrow function was
// defined in the class itself, so this is referring to the instance
// at the time the function was defined.