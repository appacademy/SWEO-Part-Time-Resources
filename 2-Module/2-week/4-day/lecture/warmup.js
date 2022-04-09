// /*
// Make a parent animal class and a child class that extends the parent class.
// Use at least two properties on the parent that the child can inherit.
// Use at least one method on the parent that the child can inherit.
// Make at least one unique property on the child.
// Make at least on unique method on the child.
// */
// class Dog {
//     constructor(breed, name){
//       this.breed = breed;
//       this.name = name;
//     }
//     bark(){
//       console.log('bark')
//     }
//    }

//    class Puppy extends Dog {
//     constructor(breed, name, size = 'sm0ll'){
//       super(breed, name)
//       this.size = size;
//     }
//     sm0llbark(){
//       console.log('meow')
//     }
//   }
// let buddy = new Puppy("poodle","buddy")
// // console.log(buddy.bark())
// console.log(buddy.sm0llbark())

// Make a class called Pets.
// Make at least 3 properties.
// Make at least 1 instance method.
// Make at least 1 static variable.
// Make at least 1 static method.
// make one child that inherits the instance method.
class Pets {
  constructor(name, species, hasLegs) {
    this.name = name;
    this.species = species;
    this.hasLegs = hasLegs;

    Pets.addToPetCollection(this);
  }

  static petTypes = [];

  static addToPetCollection(pet) {
    this.petTypes.push(pet.species);
  }

  static getPetTypes() {
    return this.petTypes;
  }

  sleep() {
    return `${this.name} says zZzZz `;
  }
}

class Dog extends Pets {
  constructor(name, favoriteToy) {
    super(name, "Dog", true);
    this.favoriteToy = favoriteToy;
  }
  // sleep() {
  //   return `${this.name} ZZZZZZZZZ `;
  // }
  //Function overriding: a child class gives its own version of the implementation of a function from one of its ancestor classes (usually the parent)

}
let doggy = new Dog("buddy","kong")

console.log(doggy.sleep())



class Fish extends Pets {
  constructor(name, numberOfFins) {
    super(name, "Fish", false);
    this.numberOfFins = numberOfFins;
  }

  swim() {
    console.log(`${this.name} is swimming..`)
  }
}

