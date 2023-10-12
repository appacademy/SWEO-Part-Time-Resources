function firstStep(input) {
  return input.split("&");
  /* 
  [
  name=Fido
  color=black
  age=1
  description=Hello+World%21
  ]
  */
}

function secondStep(input) {
  return input.map(kvp => kvp.split("="))
  // [ [name, Fido] ]
}

function thirdStep(input) {
  let res = input.map(([key, val]) => [key, val.split("+").join(" ")])
  return res
	// Hello World%21
}

function fourthStep(input) {
  return input.map(([key, val]) => [key, decodeURIComponent(val)])
	// Hello World!
}

function fifthStep(input) {
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    obj[input[i][0]] = input[i][1]
  }
  return obj
	// {all the kvp's as key-val pairs}
  return input.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
}

function parseBody(str) {
  let s1 = firstStep(str)
  let s2 = secondStep(s1)
  let s3 = thirdStep(s2)
  let s4 = fourthStep(s3)
  let s5 = fifthStep(s4)
  return s5
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
