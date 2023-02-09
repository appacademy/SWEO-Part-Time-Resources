// import the readline module into our file
const readline = require('readline')

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const answers = {}

// ask the user a question
// Main thread is freed up while we wait for user input. HandleResponeOne will
// be executed when the user has submitted their response.

rl.question("What's up, doc? ", handleResponseOne)

// first calback
function handleResponseOne(firstAnswer) {
  console.log(firstAnswer + ' is up.')
  // save firstAnswer to answer object
  answers['up'] = firstAnswer
  debugger
  rl.question("What's down, clown? ", handleResponseTwo)
}

// second callback (passed to `rl.question()` in handleResponseOne)
function handleResponseTwo(secondAnswer) {
  console.log(secondAnswer + ' is down.')
  answers['down'] = secondAnswer
  debugger
  rl.question("What's left, Jeff? ", handleResponseThree)
}

// third callback (passed to `rl.question()` in handleResponseTwo)
function handleResponseThree(thirdAnswer) {
  console.log(thirdAnswer + ' is left.')
  answers['left'] = thirdAnswer
  // close the interface
  rl.close()
  debugger
  console.log(answers)
}
