console.log("----------------Problem 1----------------")
/* 
Instructions:

Write a callback function called 'upper' that:
  1. Intakes an array
  2. Returns an array with all the elements, but uppercase
*/

//code here
let upper = function(){

}

console.log(upper(['YeS', 'i', 'DiD', 'It', '!!!'])); // ['YES', 'I', 'DID', 'IT', '!!!']


console.log("----------------Problem 2----------------")
/* 
Write a callback function called 'lower' that:
1. Intakes an array
2. Returns an array with all the elements, but lowercase
*/

//code here
let lower = function(){

}

console.log(lower(['YeS', 'i', 'DiD', 'It', '!!!'])); // ['yes', 'i', 'did', 'it', '!!!']

console.log("----------------Problem 3----------------")
/* 
Write a higher order function called printVals that: 
  1. Intakes two parameters 
    1. An object
    2. An optional callback
  2. If a callback (cb) is NOT passed in (hint: how do we check if something is defined?)
    1. Return an array of values from the obj
  3. Otherwise 
    1. Return the result of passing in an array of values from the obj to the cb
*/

//code here
let printVals = function(){
  
}



let user = {
  name: 'WeStRinH',
  location: 'CaLiFoRnIa',
  favFood: 'hotWINGS',
  lastVisited: 'kOREa',
};

console.log("no cb passed in:", printVals(user)); // no cb passed in: [ 'WeStRinH', 'CaLiFoRnIa', 'hotWINGS', 'kOREa' ]
console.log("upper cb passed in:", printVals(user, upper)); // upper cb passed in: [ 'WESTRINH', 'CALIFORNIA', 'HOTWINGS', 'KOREA' ]
console.log("lower cb passed in:", printVals(user, lower)); // lower cb passed in: [ 'westrinh', 'california', 'hotwings', 'korea' ]


