// -------Problem 2:
//What is the context / the value of `this`


//what will be the output in the terminal? 


class Car{
    constructor(owner) {
        this.owner = owner;
    }

    changeOwner(newOwner) {
        this.owner = newOwner;
    }
    getOwner(){
        return this.owner;
    }
}

let myCar = new Car("Toyota");
let changeOwnerMethod = myCar.changeOwner;
console.log(changeOwnerMethod("josh"));
console.log(myCar.getOwner()); //?


