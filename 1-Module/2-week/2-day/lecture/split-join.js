console.log("---------------split-------------")
// use the `string.split` method to turn a string into an array
// string --> to --> array
//DOES NOT MUTATE. Returns new array (strings are immutable).
let sentence = "follow the yellow brick road";
console.log("original string", sentence)
let words = sentence.split(" ");
console.log("new array words:", words); // [ 'follow', 'the', 'yellow', 'brick', 'road' ]
console.log("original not mutated:", sentence); // 'follow the yellow brick road'

console.log("---------------join-------------")
// use the `array.join` method to turn an array into a string
// array --> to --> string
//DOES NOT MUTATE. Returns a new string.
let words2 = ["run", "around", "the", "block"];
console.log("original array:", words2)
let sentence2 = words2.join(" ");
console.log("new joined string:", sentence2); // 'run around the block'
console.log("original not mutated:",words2); // [ 'run', 'around', 'the', 'block' ]