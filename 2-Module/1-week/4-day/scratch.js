//* POJO CARS
let toyota = {
  make: 'Toyota',
  model: 'Sprinter',
  year: '1986',
  odometer: 120000,
  getInfo: function() {
    console.log(`This ${toyota.year} ${toyota.make} ${toyota.model} has ${toyota.odometer} miles.`)
  },
  drive: function(distanceInMiles) {
    toyota.odometer += distanceInMiles;
  }
}

// toyota.getInfo();
// toyota.drive(150);
// toyota.getInfo()

//* Encapsulation - putting behavior and data behind an API that hides the implementation.
//* Classes
class Car {
  constructor( make, model, year, odometer ) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.odometer = odometer;

    Car.numOfCars += 1;
  }
  static numOfCars = 0

  // INSTANCE METHODS
  getInfo() {
    console.log(`This ${this.year} ${this.make} ${this.model} has ${this.odometer} miles.`)
  }
  drive( miles ) {
    this.odometer += miles;
  }
  static getCars(...cars) {
    console.log( Car.numOfCars );
    return cars.map( car => car);
  }
}

let briansCar = new Car('Nissan','Altima','2015', 88000);
let alexsCar = new Car('Toyota','Prius','2015',210000);


// dogs with name, age, breed, and should be able to bark;
class Dog {
  constructor( name, age, breed ) {
    this.name = name;
    this.age = age;
    this.breed = breed;
  }

  bark() {
    console.log('woof woof');
  }
}

let fido = new Dog( 'Fido', 136, 'shitzu' );
console.log(fido);

//* Inheritance - the properties and methods defined in a parent class are available to its children
class Van extends Car {
  constructor(make, model, year, load) {
    super(make, model, year);
    // this.make = make
    // this.model = model
    // this.year = year
    this.load = load;
  }
  getInfo(string) {
    if ( string === 'make' ) {
      console.log( this.make );
    }
    if ( string === 'model' ) {
      console.log( this.model );
    }
  }
};
let ecoline = new Van('Ford', 'Ecoline', 2001, 200);
console.log(ecoline);

//* Static Methods and Variables
 // Methods and Variables available to the Class
// console.log( Car.numOfCars )
let allCars = Car.getCars(briansCar, alexsCar, ecoline );
console.log( allCars )
//* Polymorphism - processing of various data types and methods through a single uniform interface
  //* Overloading - When a method accepts a different number or type of arguments
  // sum(num1, num2) => num1 + num2
  // sum( arrayOfNums ) => loop 

  //* Overriding - When a child class gives it's own version of a parent function
  briansCar.getInfo(); // Instance of Car
  ecoline.getInfo('make'); // Instance of Van

