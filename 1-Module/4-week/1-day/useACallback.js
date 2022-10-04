/*
Instructions:

Write a callback called 'upper' that:
  1. Intakes an array
  2. Returns an array with all the elements, but uppercase

Write a callback called 'lower' that:
1. Intakes an array
2. Returns an array with all the elements, but lowercase

Write a higher order function called printVals that:
  1. Intakes two parameters
    1. An object
    2. An optional callback
  2. If a callback is passed in
    1. Return the result of passing in an array of values from the obj to the cb
  3. Otherwise return an array of values from the obj

  Write a callback called 'upper' that:
  1. Intakes an array
  2. Returns an array with all the elements, but uppercase
*/

let upper = function (arr) {
  // map - output for every input
  return arr.map(function (str) {
    return str.toUpperCase();
  })
};

let lower = function (arr) {
  return arr.map(function (str) {
    return str.toLowerCase();
  });
};

/*
Write a higher order function called printVals that:
  1. Intakes two parameters
    1. An object
    2. An optional callback
  2. If a callback is passed in
    1. Return the result of passing in an array of values from the obj to the cb
  3. Otherwise return an array of values from the obj
*/
let printVals = function (obj, cb) {
  if (cb === undefined) {
    return Object.values(obj)
  } else {
    return cb(Object.values(obj))
  }
};

let user = {
  name: "WilL",
  location: "TeXaS",
  favLibrary: "ReAct",
  favAnimal: "HiPpO",
};

console.log(upper(["YeS", "i", "DiD", "It", "!!!"])); // ['YES', 'I', 'DID', 'IT', '!!!']
console.log(lower(["YeS", "i", "DiD", "It", "!!!"])); // ['yes', 'i', 'did', 'it', '!!!']
console.log(printVals(user)); // ['MylO','ChIcaGo', 'ReAct', 'ElePhAnt']
console.log(printVals(user, upper)); // ['MYLO', 'CHICAGO', 'REACT', 'ELEPHANT']
console.log(printVals(user, lower)); // ['mylo', 'chicago', 'react', 'elephant']
