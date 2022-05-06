//given an object and a string, determine if the string exists somewhere in object's values
//hint: is there a method to get all the values quickly? :)

//write
let stringExists = function(obj, string){
    let allValues = Object.values(obj); //["lion", "turtle", "dragon"]
    if(allValues.includes(string)){
        return true;
    }

    //default case, return false
    return false;
}

let coolAnimals = {
    land: "lion",
    sea: "turtle",
    air: "dragon"
}

console.log(stringExists(coolAnimals, "seagull")) //false
console.log(stringExists(coolAnimals, "dragon")) //true

//"dragon" exists as a value inside coolAnimals