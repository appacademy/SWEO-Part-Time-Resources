class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  bark() {
    console.log('Bark')
  }

  static diet() {
    return 'carnivore'
  }
}

function Dog5(name, age) {
  this.name = name
  this.age = age
}

Dog5.prototype.bark = function () {
  console.log('Bark')
}

// Static method
Dog5.diet = function () {
  return 'carnivore'
}

// Inspect these objects in your Browser console to explore the prototypical
// chain of inheritance
const zeph = new Dog('Zephyr', 10)

const pepper = new Dog5('Pepper', 4)
