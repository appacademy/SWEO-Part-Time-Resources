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
let honda = {
  make: 'Honda',
  model: 'Civic',
  year: '2001',
  fuelLevel: '100',
  odometer: '200000',
  getInfo: function() {
    console.log(`This ${honda.year} ${honda.make} ${honda.model} has ${honda.odometer} miles.`)
  },
  drive: function(distanceInMiles) {
    honda.odometer += distanceInMiles;
  }
}
let triumph = {
  make: 'Triumph',
  model: 'TR-7',
  year: '1981',
  fuelLevel: '100',
  odometer: '32000',
  getInfo: function() {
    console.log(`This ${triumph.year} ${triumph.make} ${triumph.model} has ${triumph.odometer} miles.`)
  },
  drive: function(distanceInMiles) {
    triumph.odometer += distanceInMiles;
  }
}
toyota.getInfo();
toyota.drive(150);
toyota.getInfo()

//* Encapsulation

//* Classes

//* Inheritance

//* Static Methods and Variables

//* Polymorphism
  //* Overloading

  //* Overriding