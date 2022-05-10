/***********************************************************************
Write a function `countScores(people)` that takes in an array of score
objects (people) as its input. A score object has two key-value pairs:
the scorer (string) and a point value (number). `countScores(people)` should
return an object that has key-value pairs listing each person who scored as a key
and the sum of the total points for the game as their value.


Example 1:
let ppl = [
  {name: "Anthony", score: 10},
            
  {name: "Fred", score : 10},
            
  {name: "Anthony", score: -8},
            
  {name: "Winnie", score: 12}
];

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
//input: people = array of objects
//output: object
//iterate through the array, get the name and add the score to that name into an object to keep track of that.
function countScores(people) {
  //part 1: have a way to iterate through all the people 
  let countObj = {};
  for(let i=0; i<people.length; i++){
    //part 2: add each person and their score into the countObj
    let personObj = people[i];
    // console.log("myPersonObj: ", personObj);
    //extract the name and the score first
    let name = personObj["name"];
    let score = personObj["score"]
    console.log("name and score:", name, score)
    //now use name and score, add it to countObj
    
    //need to determine if name exists already or not inside of countObj
    if(name in countObj){ //if name already exists, just add next score to it.
      countObj[name] += score;
    }
    else{ //if name is not in countObj, then initially add it as a key and value to the score
      countObj[name] = score;
    }
  }

  //at the end return the fully built countObj
  return countObj;
}

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

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = countScores;
