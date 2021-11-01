class Dog {
  constructor(name, isSitting) {
    this.name = name;
    this.isSitting = isSitting;
  }

  standOrSit() {
    this.isSitting = !this.isSitting;
    return this.isSitting;
  }

  test() {
    debugger;
    console.log(`this is equal to dog: ${this === dog}`);
  }
}

const dog = new Dog('Fido', true);
console.log(dog.standOrSit()); //
dog.test(); //
const dogTest = dog.test; //
dogTest(); //
setTimeout(dog.test, 1000); //

function someFunc() {
  console.log(this);
}

someFunc(); //
