// -------Problem 2:
//1) What is the context / the value of `this`
//the context is the global object because the method is invoked under the global object (NOT BY THE INSTANCE)
//however, the context is lost through the process and set as undefined because of the method style calling.


//2) what will be the output in the terminal? 
//Error because the property/method does not exist on undefined (`this`  === undefined as context is lost)

class Car{
    constructor(owner) {
        this.owner = owner;
    }

    //instance method
    changeOwner(newOwner) {
        this.owner = newOwner; //updates the new owner that we pass in
    }

    //getter instance method to access the this.owner property
    getOwner(){
        return this.owner;
    }
}

let myCar = new Car("Toyota"); //instatiating to create a myCar instance
let changeOwnerMethod = myCar.changeOwner; //myCar is NOT the context currently for `this` inside of changeOwner; why? Because we didn't INVOKE that instance method through myCar, we only assigned it to a variable `changeOwnerMethod`


console.log(changeOwnerMethod("josh")); //This gives us the type error: `changeOwnerMethod` is being invoked by the global object.

console.log(myCar.getOwner()); //?


