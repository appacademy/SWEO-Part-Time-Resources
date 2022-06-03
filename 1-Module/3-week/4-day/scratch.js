// DESTRUCTURING EXAMPLE

let person = "Patrick";
let { person: person456, animal } = { person: "Caleb", animal: "hippopotamus" };

// what do you think this console.log will print?
// console.log(person, person456, animal);

let [game, player] = ["League", "Alex"];

// What do you think this console.log will print?
// console.log(game, player);

[player, game] = [game, player];

// What do you think this console.log will print
// console.log(game, player);

// REST EXAMPLE
// rest allows you to take in as many args as you'd like and have access to all of them.

let notEnoughParams = function(num1, num2){
  console.log(num1, num2);
}

// notEnoughParams(1,2,3,4,5,6,7)

let makeThemBig = function (...strings) { 
  // console.log(strings);

  let result = []
  for (let i = 0; i < strings.length; i++){
  	result.push(strings[i].toUpperCase())
  }
  return result.join(" ");
};
// console.log(makeThemBig("hello", "world"));
// console.log(makeThemBig("hello"));
// console.log(makeThemBig("Hello", "world,", "how's", "it", "going", "today?"));

// SPREAD EXAMPLE
// Works great with arrays!
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3 = [0, arr1, arr2];
// console.log(arr3);
let arr4 = [0, ...arr1, ...arr2];
// console.log(arr4);


// Works with objects as well!
let obj1 = { name: "Alex" };
let obj2 = { animal: "hippopotamus", game: "League" };

let obj3 = { obj1, obj2, movie: "The Lord of the Rings: The Return of the King " };
// console.log(obj3);
let obj4 = { ...obj1, ...obj2, movie: "The Lord of the Rings: The Return of the King " };
// console.log(obj4);


// Check if a key exists in an obj

// console.log(obj1['name'] !== undefined) // true, so the key exists.
// console.log(obj2['name'] !== undefined) // false, so it doesn't exist.

// console.log('name' in obj1) // returns true, so the key exists in that obj.
// console.log('name' in obj2) // returns false, so the key isn't in that obj.

// iterating over obj's refresher

// for in loop
// console.log(obj4)
for (let key in obj4){
  // console.log(key);
}


// console.log(Object.keys(obj4))
// console.log(Object.values(obj4))
// console.log(Object.entries(obj4))

// Remember that the way primitives are stored in memory is different from the 
// way references are stored. If you have the following code:

let a = 10;
let b = a;

a = 5

// console.log(a); // a's value has been updated to be 5
// console.log(b); // b's value is still the same (10) as what it was when we assigned it.

// a is pointing to it's own place in memory and is storing the value 10.
// b is also pointing to it's OWN place in memory and storing the value 10. 

// This is how primitives work!

// However:

let original = [1, 2, 3]; 
let pointingToTheOriginal = original;
let actualCopy = original.slice()

// here I only make changes to the 'copies', not the original
pointingToTheOriginal.pop();
// by making changes to the above variable, 
// which was set to = the original - i am mutating the original as well.
actualCopy.push(4);
// making changes to this variable which is set to = the original.slice()
// i am only mutating this array (an actual copy of the original), not the original array.
// .slice() created a new value in memory for this variable to point to.

console.log('the original', original)
console.log('the second variable pointingToTheOriginal', pointingToTheOriginal)
console.log('the actual copy made', actualCopy)


// original is pointing to it's own place in memory and is storing the value [1, 2, 3].
// pointingToTheOriginal is pointing to the SAME place in memory. that SAME array. 
// If you mutate pointingToTheOriginal, 
// it will mutate original as well! This is what it means to be a reference data type. 
// The variables are referencing the same place in memory, whereas primitives get 
// their own spot in memory each time.
// utilizing slice, you can create a whole new array in memory and then mutate it
// without affecting the
