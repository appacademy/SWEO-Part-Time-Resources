function firstStep(input) {
  return input.split("&")
}

function secondStep(input) {
  return input.map(el => {
    return el.split('=')
  })
}

function thirdStep(input) {
  input.forEach(el => {
    el.forEach((el2, i) => {
      if(el2.includes('+')){
        el[i] = el2.replace('+', ' ')
      }
    })
  })
  return input
}

function fourthStep(input) {
  input.forEach(el => {
    el.forEach((el2, i) => {
      if(el2.includes('%21')){
        el[i] = decodeURIComponent(el2)
      }
    })
  })
  return input
}

function fifthStep(input) {
  let res = {}
  input.forEach(el => {
    res[el[0]] = el[1]
  })
  return res
}

function parseBody(str) {
  return fifthStep(fourthStep(thirdStep(secondStep(firstStep(str)))))
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