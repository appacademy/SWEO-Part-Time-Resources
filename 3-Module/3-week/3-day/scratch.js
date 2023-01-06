const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require("http");

server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
    if(reqBody){
      req.body = parseBody(reqBody)
    }

    sendFormPage(req, res);
  });
});

const port = 5000;

server.listen(port, () => console.log("Server is listening on port", port));
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };


/// PARSE BODY---------------------------

let input = 'name=Fido&color=black&age=1&description=Hello+World%21'

function firstStep(input) {
  // Your code here
  return input.split("&")

}
// console.log(firstStep(input))
//---------------------------------------------------------------------
let input2 = [ 'name=Fido', 'color=black', 'age=1', 'description=Hello+World%21' ]
function secondStep(input2) {
  // Your code here
  return input2.map(ele => ele.split("="))

}
// console.log(secondStep(input2))
//---------------------------------------------------------------------
let input3 = [
  [ 'name', 'Fido' ],
  [ 'color', 'black' ],
  [ 'age', '1' ],
  [ 'description', 'Hello+World%21' ]
]
function thirdStep(input3) {
  // Your code here
  let returnArr = []

  input3.forEach(ele1 =>{
    ele1.forEach((ele2, i) =>{
      if(ele2.includes("+")){
        ele1[i] = ele2.replace("+", " ")
      }
    })
    returnArr.push(ele1)
  })
  return returnArr
}
// console.log(thirdStep(input3))
//---------------------------------------------------------------------
let input4 = [
  [ 'name', 'Fido' ],
  [ 'color', 'black' ],
  [ 'age', '1' ],
  [ 'description', 'Hello World%21' ]
]
function fourthStep(input4) {
  // Your code here
return input4.map((ele) => ele.map(str => decodeURIComponent(str)))
}
// console.log(fourthStep(input4))

//---------------------------------------------------------------------
let input5 = [
  [ 'name', 'Fido' ],
  [ 'color', 'black' ],
  [ 'age', '1' ],
  [ 'description', 'Hello World!' ]
]
function fifthStep(input5) {
  // Your code here
  let obj = {}

  input5.forEach(ele =>{
    obj[ele[0]] = ele[1]
  })

  return obj;

}

// console.log(fifthStep(input5))
//---------------------------------------------------------------------
function parseBody(str) {
  // Your code here
  str = firstStep(str)
  str = secondStep(str)
  str = thirdStep(str)
  str = fourthStep(str)
  str = fifthStep(str)
  return str
}

console.log(parseBody(input))

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

