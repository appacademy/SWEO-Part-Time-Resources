//given an object and a string, determine if the string exists somewhere in object's values
//hint: is there a method to get all the values quickly? :)
//hint2: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values

//write this function
let stringExists = function(obj, string){

}

let coolAnimals = {
    land: "lion",
    sea: "turtle",
    air: "dragon"
}

console.log(stringExists(coolAnimals, "seagull")) //false
console.log(stringExists(coolAnimals, "dragon")) //true

//"dragon" exists as a value inside coolAnimals