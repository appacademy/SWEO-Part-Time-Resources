//Class is like an object factory, or a blueprint we use to create objects
//An object that has been created from a class is called an instance

//Constructor is given properties and parameters
//It sets the property values or the object that it is creating to the parameter values

//Inheritance

class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }

    honk() {
        console.log("Beep beep")
    }
}

//Child class

class Boat extends Vehicle {
    constructor(make, model, year, sailColor, isRusty) {
        super(make, model, year, "Rusty")
        this.sailColor = sailColor;
    }
}

let lilBoat = new Boat("Cool", "Supercool", "2045", "Sparkly")

console.log(lilBoat)

let lilVehicle = new Vehicle("Subaru", "STI", "2003", "silver");
