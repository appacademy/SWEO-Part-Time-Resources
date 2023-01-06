//* Encapsulation - putting data and behavior behind an API to hide implementation details ( behind a 'black box' );
//* Classes
class Car {
  constructor( make, model, year, odometer ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.odometer = odometer;

    Car.numOfCars++
  }
  static numOfCars = 0;

  //INSTANCE METHODS
  getInfo() {
    return `This ${this.year} ${this.make} ${this.model} has ${this.odometer} miles.`
  }
  drive( miles ) {
    this.odometer += miles;
  }

  // STATIC METHODS
  static getCars(...cars) {
    console.log( Car.numOfCars );
    return cars.map( car => car.getInfo() )
  }
}
// console.log(Car.constructor)
let toyota = new Car('Toyota', 'Sprinter', '1986', 165000);
// console.log(toyota)
let gregsCar = new Car('Hyundai', 'Sonata', '2013', 133000);
let tristanCar = new Car('Porsche', '911 Turbo', '2001');

// gregsCar.getInfo();
// gregsCar.drive( 1000 );
// gregsCar.getInfo();
// tristanCar.getInfo();
//* Inheritance - the properties and methods defined on a parent class are available to all of its children
class SportsCar extends Car {
  constructor( make, model, year, odometer, hasTurbo ) {
    super(make, model, year, odometer);
    this.hasTurbo = hasTurbo

    delete this.odometer;
  }

}
let fast = new SportsCar('Porsche', '911 Turbo', '2001', 150000, true)
fast.getInfo();
console.log( fast.hasTurbo );
class Van extends Car {
  constructor ( make, model, year, odometer, load ) {
    super(make, model, year, odometer);
    this.maxLoad = load;
    this.currentLoad = 0;
  }

  getInfo( query ) {
    if ( query === 'make') {
      console.log( this.make );
    }
  }
  addCargo( weight ) {
    if ( this.currentLoad < this.maxLoad ) {
      this.currentLoad += weight;
    } else {
      console.log('Van too full for that');
    }
  }
}
let ecoline = new Van('Ford', 'Ecoline', '2001', 45000, 500);
// console.log( ecoline );
ecoline.addCargo( 600 );
ecoline.addCargo( 600 );
//* Static Methods and Variables - Methods and Variables invoked on the class instead of an instance
console.log(Car.getCars(gregsCar, tristanCar, ecoline))
//* Polymorphism - processing various data types and classes through a single uniform interface
  //* Overloading - sending a different number or type of argument than the parent uses
  ecoline.getInfo('make');
  console.log(gregsCar.getInfo());
  //sum(num1, num2) vs sum( nums )
  //* Overriding - when a child class gives it's own version of a parent method
  //Writing Utensiles
    // Pens, Erasers => erase(); 

  class Dog {
    constructor(name, breed, age) {
      this.name = name;
      this.breed = breed;
      this.age = age;
      this.sound = 'woof'
    }

    speak() {
      console.log( this.sound );
    }
  }
  let fido = new Dog( 'fido', 'terrier', 146 )
  fido.speak();

  class Puppy extends Dog {
    speak( prompt ) {
      console.log(prompt)
    }
  }
  let scoobie = new Puppy( 'puppy', 'great dane', 45)
  scoobie.speak('scoobie doobie doo');