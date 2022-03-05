/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [{name: "Anthony", score: 10},
            {name: "Fred", score : 10},
            {name: "Anthony", score: -8},
            {name: "Winnie", score: 12}];

console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

Example 2:
let peeps = [
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 2},
  {name: "Anthony", score: 2},
  {name: "Winnie", score: 2}
];
console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }
***/

// that this takes in array
// an array of objects
// score object has 2 keys/values
// 2 keys are name and score
// scorer and point value

// return an object containing keys of the person who scored and their total points

// let peeps = [
// 	{name: "Anthony", score: 2},
// 	{name: "Winnie", score: 2},
// 	{name: "Fred", score: 2},
// 	{name: "Winnie", score: 2},
// 	{name: "Fred", score: 2},
// 	{name: "Anthony", score: 2},
// 	{name: "Winnie", score: 2}
//   ];

// let countScores = function(people){
// 	let obj = {}

// 	for(let i = 0; i < people.length; i++){

// 		let scoreObj = people[i] // {name: "Anthony", score: 2}

// 		let { name, score } = scoreObj

// 		//name = "Anthony", score = 2

// 		console.log("name == ", name, "score == ", score)

// 		// check if player exists
// 		if(obj[name]){

// 			obj[name] += score

// 			// obj[name] = obj[name] + score

// 		} else {
// 			// create a that player in the object and assign its score
// 			obj[name] = score
// 		}

// 	}

// 	return obj
// }

// let ppl = [{name: "Anthony", score: 10},
//             {name: "Fred", score : 10},
//             {name: "Anthony", score: -8},
//             {name: "Winnie", score: 12}];

// console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

// let peeps = [
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Winnie", score: 2},
//   {name: "Fred", score: 2},
//   {name: "Anthony", score: 2},
//   {name: "Winnie", score: 2}
// ];
// console.log(countScores(peeps)); //=> { Anthony: 4, Fred: 4, Winnie: 6 }




// `forEach`

// - RUN THIS FUNCTION for each element in an array
// - Does NOT have return value
// - Can only iterate in order from 0 up to nth index

const array1 = ['a', 'b', 'c'];

// arrow function
// array1.forEach(element => console.log(element));

// Inline callback function
// array1.forEach(function(element){
// 	console.log(element)
// })

// expected output: "a"
// expected output: "b"
// expected output: "c"

// for(let i = 0; i < array1.length; i++){
// 	let element = array1[i]
// 	console.log(element)
// }

// `map`

// - Make a new array
// - RUN THIS FUNCTION for each element in the array
// - Push the return value of the function into the array
// - Return the array
// - return the value that you wanna store in your new array

const array2 = [1, 4, 9, 16];

// pass a function to map

// arrow function
const map1 = array2.map(x => x * 2);

// console.log(map1);

// Inline callback function
const map2 = array2.map(function(x){ x * 2});

// expected output: Array [2, 8, 18, 32]

// let newArray = []
// for(let i = 0; i < array2.length; i++){
// 	let element = array2[i]
// 	newArray.push(element * 2)
// }

// `filter`

// - Make a new array
// - RUN THIS FUNCTION for each element in the array
// - Push the element into the array if the return value evaluates to true
// - it will only push the element into the new array if the return value is true/truthy
// - Return the array

// arrow function

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

// console.log(result);

// expected output: Array ["exuberant", "destruction", "present"]

// Inline callback function

const result2 = words.filter(function(word){word.length > 6});

// const result3 = words.filter(function(word){
// 	return word.length > 6
// });

// console.log(result2);

// let filteredWords = []

// for(let i = 0; i < result.length; i++){
// 	let word = result[i]

// 	if(word.length > 6){
// 		filteredWords.push(word)
// 	}
// }

// console.log(filteredWords)

// `reduce`

// - No Default Accumulator
//   - Make an accumulator and set it to the zeroeth element of the array
//   - RUN THIS FUNCTION for each element in the array, starting at the first index
//   - The return value of the function becomes the new accumulator
//   - return the final accumulator

// - Default Accumulator
//   - Make an accumulator and set it to the second parameter given to you
//   - RUN THIS FUNCTION for each element in the array, starting at the zeroeth index
//   - The return value of the function becomes the new accumulator
//   - return the final accumulator

const array = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4

// arrow function

const initialValue = 0;
const sumWithInitial = array.reduce(
	(previousValue, currentValue) => previousValue + currentValue,
	initialValue
);

// console.log(sumWithInitial);
// expected output: 10

// inline callback function

const sumWithInitial2 = array.reduce(
	function(previousValue, currentValue){previousValue + currentValue},
	initialValue
);
// console.log(sumWithInitial2);

// ---
