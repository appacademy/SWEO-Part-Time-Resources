console.log("----------------Problem 1----------------")
/* 
Instructions:

Write a callback function called 'upper' that:
  1. Intakes an array
  2. Returns an array with all the elements, but uppercase
*/

//code here
let upper = function(array){
  //uppercase every element in the array
  let newArr = [];

  //forEach under the hood, apply the callback to each element in array
  //forEach doesn't return any data, it just allows us to access each element in the array.
  array.forEach(function(eleInArray){
    let upperWord = eleInArray.toUpperCase();
    newArr.push(upperWord); //add word after uppercase into newArr
    //forEach does NOT return anything
  })
  return newArr;
}

console.log(upper(['YeS', 'i', 'DiD', 'It', '!!!'])); // ['YES', 'I', 'DID', 'IT', '!!!']


console.log("----------------Problem 2----------------")
/* 
Write a callback function called 'lower' that:
1. Intakes an array
2. Returns an array with all the elements, but lowercase
*/

//code here
let lower = function(array){
  //map method
  //resultArrFromMap stores a new array with the updated elements
  let resultArrFromMap = array.map(function(eleInArr){
    return eleInArr.toLowerCase(); //map takes the return value from the callback function here and adds it to a new array under the hood.
  })

  //original array (`array`) does not get mutated
  console.log("original array:", array);

  return resultArrFromMap;
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
let printVals = function(obj, callback){
  let allValues = Object.values(obj);
  if(callback === undefined){
    return allValues
  }
  else{
    return callback(allValues);
  }
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


