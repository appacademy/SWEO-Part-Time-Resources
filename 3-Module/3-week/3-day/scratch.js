const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require('http');


server = http.createServer((req, res) => {
    console.log(`${req.method} ${req.url}`)

    let reqBody = ''
    req.on('data', (data) => {
        reqBody += data
    })

    req.on('end', () => {
        if(reqBody){
            req.body = parseBody(reqBody)
        }
        sendFormPage(req, res)
    })

})

const port = 5000

server.listen(port, console.log('Server is listening on port 5000'))
/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };

///PARSE BODY JS --------------------------------------------------------------------------
function firstStep(input) {
    // Your code here
    return input.split('&')
  }

  function secondStep(input) {
    // Your code here
    return input.map(ele => ele.split('='))
  }

  function thirdStep(input) {
    // Your code here
    let res = []
    input.forEach(ele1 => {
      ele1.forEach((ele2, i) => {
       if(ele2.includes('+')){
        ele1[i] = ele2.replace('+', ' ')
       }
      })
      res.push(ele1)
    })
    return res
  }

  function fourthStep(input) {
    // Your code here
    // let res = []
    // input.forEach(ele1 => {
    //   ele1.forEach((ele2, i) => {
    //    if(ele2.includes('%21')){
    //     ele1[i] = ele2.replace('%21', '!')
    //    }
    //   })
    //   res.push(ele1)
    // })
    // return res

    return input.map((ele) => ele.map((str) => decodeURI(str)));

  }

  function fifthStep(input) {
    // Your code here
    let obj = {}
    input.forEach(ele => {
      obj[ele[0]] = ele[1]
    })
    return obj
  }

  function parseBody(str) {
    // Your code here
    console.log(str)
    str = firstStep(str)
    str = secondStep(str)
    str = thirdStep(str)
    str = fourthStep(str)
    str = fifthStep(str)
    console.log(str)
    return str
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
