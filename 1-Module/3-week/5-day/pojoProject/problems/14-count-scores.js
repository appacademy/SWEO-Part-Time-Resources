/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:


let ppl = [{name: "Anthony", score: 10},  // obj.name = "Anthony", obj.score = 10
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
***********************************************************************/

let countScores = function (people) {
  let myFinalObj = {};

  for (let i = 0; i < people.length; i++) {
    let currentObject = people[i];

    // console.log(currentObject.name, "This is what I want my keys to be");
    // console.log(currentObject.score, "These will be my values");
    let newKey = currentObject.name;
    let newVal = currentObject.score;

    // if (myFinalObj does NOT have newKey), add it to the object
			//arr [i]
    if (myFinalObj[newKey] === undefined) {
      myFinalObj[newKey] = newVal;
    } else {
      // if it DOES exist, just add the score to the value
      myFinalObj[newKey] += newVal;
    }
  }

	return myFinalObj
};

// let ppl = [
//   { name: 'Anthony', score: 10 }, // obj.name = "Anthony", obj.score = 10
//   { name: 'Fred', score: 10 },
//   { name: 'Anthony', score: -8 },
//   { name: 'Winnie', score: 12 },
// ];

// console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

// function countScores(people) {
//   let finalObj = {};
//   // let finalObj = {
//   // 	"Anthony": 10,
//   // 	"Fred" : 10
//   // };

//   for (let i = 0; i < people.length; i++) {
//     let current = people[i];

//     // console.log(current["name"])
//     // console.log(current.name) // soon to be a key
//     // console.log(current.score) // soon to be a value
//     if (current.name in finalObj) {
//       // add to score
//       finalObj[current.name] += current.score;
//     } else {
//       finalObj[current.name] = current.score;
//     }
//   }

//   return finalObj;
// }

// let ppl = [
//   { name: 'Anthony', score: 10 }, // obj["name"] = "Anthony", obj["score"] = 10
//   { name: 'Fred', score: 10 },
//   { name: 'Anthony', score: -8 },
//   { name: 'Winnie', score: 12 },
// ];

// console.log(countScores(ppl)); //=> { Anthony: 2, Fred: 10, Winnie: 12 }

// ["red", "green", "blue"]
// 0:      1:      2:
// {"firstColor": "red", 1: "green",  2: "blue"}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
