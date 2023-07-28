// Some Code Solutions


let countDownTimer = (num) => {
  if (num === 0) return 'Happy New Year!'

  return innerFunc = () => {
    num -= 1
    if (num === 0) return 'Happy New Year!'
    return innerFunc
  }
}


// This one could probably be refactored to be less repetitive... but it's not too bad.
let recVolume = (height) => {
  let measurements = [height]

  return innerFunc = (num) => {
    if (measurements.length === 3) return measurements.reduce((acc, num) => acc * num)
    else {
      measurements.push(num)
      if (measurements.length === 3) return measurements.reduce((acc, num) => acc * num)
      else return innerFunc
    }
  }
}


let smoothieMachine = (...args) => {
  let i = [...args];
  let str = "I'm having a smoothie with "
  return inner = (...moreArgs) => {
    i.push(...moreArgs)
    return str + i.join(" and ")
  }
}
