/***********************************************************************
Write or convert the functionbe low to an ARROW function `updateScores(people)` 
that takes in an array of score objects (people) as its input. 

An object inside the array has two key-value pairs:
the scorer's name (string) and a point value score (number). 

`updateScores(people)` should take EACH OBJECT in the array, then update 
the point value under the key `score` by multiplying it by 10, and finally
add each object with the updated score to a new array. Return the array at the end.

Example 2:
let peeps = [
  {name: "Anthony", score: 1},
  {name: "Winnie", score: 2},
  {name: "Fred", score: 3},
];
console.log(updateScores(peeps)); //=> [ {name: "Anthony", score: 10}, {name: "Winnie", score: 20},  {name: "Fred", score: 30}];
***********************************************************************/

let updateScores = function (people) {

}

let peeps = [
  { name: "Anthony", score: 1 },
  { name: "Winnie", score: 2 },
  { name: "Fred", score: 3 },
];
console.log(updateScores(peeps)); //=> [ {name: "Anthony", score: 10}, {name: "Winnie", score: 20},  {name: "Fred", score: 30}];