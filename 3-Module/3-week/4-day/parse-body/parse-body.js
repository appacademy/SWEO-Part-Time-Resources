function firstStep(input) {
  return input.split('&')
}

function secondStep(input) {
  return input.map(el => {
    return el.split('=')
  })
}

function thirdStep(input) {
  let res = []
  input.forEach(el => {
    el.forEach((el2, i) => {
      if(el2.includes('+')){
        el[i] = el2.replace('+', ' ')
      }
    })
    res.push(el)
  })
  return res
}

function fourthStep(input) {
  let res = []
  input.forEach(el => {
    el.forEach((el2, i) => {
      if(el2.includes('%21')){
        el[i] = el2.replace('%21', '!')
      }
    })
    res.push(el)
  })
  return res
}

function fifthStep(input) {
  let obj = {}
  input.forEach(el => {
    obj[el[0]] = el[1]
  })
  return obj
}

function parseBody(str) {
  str = firstStep(str)
  str = secondStep(str)
  str = thirdStep(str)
  str = fourthStep(str)
  str = fifthStep(str)
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