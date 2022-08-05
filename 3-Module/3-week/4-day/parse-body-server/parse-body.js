/*
input: "username=azure+green&password=password%21"

output:
{
  username: "azure green",
  password: "password!"
}

*/
const inputString = "username=azure+green&password=password%21"

function firstStep(input) {
  return input.split("&")
}
const firstStepRes = firstStep(inputString)
console.log("first-step:",firstStepRes )

function secondStep(input) {
  // for each string in input string, apply the change by splitting by '=' then put each on into the new result.
  const newResult = [];
  for(let i=0; i<input.length; i++){
    let word = input[i];
    let splitWordsArr = word.split("="); 
    newResult.push(splitWordsArr);
  }
  return newResult;

  // ---------------one liner------------------
  // map iterates over each item, and applies the callback to each item. Then pushes it to a new array.
  // return input.map((word)=>word.split("="));
}
const secondStepRes = secondStep(firstStepRes)
console.log("second step:", secondStepRes)

function thirdStep(input) {
  //for each pair like [ 'username', 'azure+green' ] in input
  for(let i=0; i< input.length; i++){
    let pair = input[i];
    //take the value (the second element in the pair)
    let value = pair[1];
    //replace all + with a space
    let newValue = value.replace("+", " ");
    //reassign the index with the new replacement
    pair[1] = newValue;
  }
  return input;

  //---------one-liner-----------
  // return input.map(([key,value]) => [key, value.replace("+", " ")])

}

const thirdStepRes = thirdStep(secondStepRes);
console.log("thirdStepRes:", thirdStepRes);


// run node and execute decodeURIComponent("password%21%21")
function fourthStep(input) {
  //for each pair like [ 'username', 'azure+green' ] in input
  for(let i=0; i< input.length; i++){
    let pair = input[i];
    //take the value (the second element in the pair)
    let value = pair[1]; //i.e. password%21
    
    // now use the decodeURIComponent function
    let newValue = decodeURIComponent(value);

    //reassign the value at pair[1] to the new value
    pair[1] = newValue;
  }
  return input;

    //---------one-liner-----------
  // return input.map(([key,value]) => [key, decodeURIComponent(value)])
}

const fourthStepRes = fourthStep(thirdStepRes);
console.log("fourthStepRes:", fourthStepRes);

/*
[ [ 'username', 'azure green' ], [ 'password', 'password!' ] ] 

{
  username: "azure green",
  password: "password!"
}

*/
function fifthStep(input) {
  // let's start off by creating an empty object
  let resObj = {};

  //iterate over the input which contain pairs [key,value]
  for(let i=0; i<input.length; i++){
    const pair = input[i];
    // which part of the pair will be the key and which one is the value?
    const key = pair[0];
    const value = pair[1];
    resObj[key] = value;
  }
  return resObj;

  // // ------------one liner--------------
  // return input.reduce((accumObj, currentPair)=>{
  //   let [key,value] = currentPair;
  //   accumObj[key] = value;
  //   return accumObj;
  // }, {})
  
}
const fifthStepRes = fifthStep(fourthStepRes);
console.log("fifthStep res:", fifthStepRes);


function parseBody(str) {
  const arrayFuncs = [firstStep,secondStep,thirdStep,fourthStep,fifthStep];
  let res = str;
  //iterate over array funcs, apply each func to the res and update the res each time.
  for(let i=0; i<arrayFuncs.length; i++){
    let func = arrayFuncs[i]
    //reassign res each time
    res = func(res);
  }
  return res;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};