let obj = { name: "Crystal", traits: ["mammal", "dog"] };
let { traits, name:herName } = obj; //same as below
// let traits = obj["traits"];
// let name = obj["name"];
// let age = obj["age"];

console.log(traits); // => ???
console.log("herName:", herName);