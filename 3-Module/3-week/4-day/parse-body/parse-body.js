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