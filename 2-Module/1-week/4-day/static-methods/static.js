console.log("-----classes (blueprint) are just special functions that returns an object (instances")

// function bosses(name, race, lifepoints){
//     const dataObj = {
//         name: name,
//         race: race,
//         lifepoints: lifepoints,
//     }
//     return dataObj;
// }

// const bowser = bosses("Bowser", "turtle", 100);
// console.log(bowser);

// const fakeBowser = bosses("Fake Bowser", "fake turtle", 10);
// console.log(fakeBowser);

console.log("-----Object.keys refresher-----")
const fruit = {
    pears:1,
    orange:2,
}
//get all the keys for the fruit object
const allKeys = Object.keys(fruit); //[ 'pears', 'orange' ] //big Object is a class! and the .keys method is being called from that class therefore, it is a static method!
console.log(allKeys);

console.log("--------static array method-------")
const fruitsArr = new Array("apple"); //["apple"]
console.log(Array.isArray(fruitsArr)); //Array is also a class and so .isArray is a static method of the Array class!
console.log(fruitsArr instanceof Array);

console.log("--------instance array method-------")
fruitsArr.push("banana"); //INSTANCE method called from the fruitsArr INSTANCE.
console.log(fruitsArr);

//Static Variables: are useful in caching information about the class (they belong to the class, not the instance)
//  -i.e. counting how many instances were created from the class
//  -called from the Class itself, not instance.
