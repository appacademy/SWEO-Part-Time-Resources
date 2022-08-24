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
rl.question('What is your favorite sport? ', handleResponse)


// first calback
function handleResponse(answer) {
  console.log(`${answer} is your favorite sport`)

  answers.favoriteSport = answer
  rl.question('What position do you play? ', handleResponseTwo)
}

// second callback (passed to `rl.question()` in handleResponseOne)
function handleResponseTwo(answer){
  console.log(`This is the position you play: ${answer}`)
  answers.position = answer

  rl.question('What is your favorite baseball Team? ', handleResponseThree)
}
// third callback (passed to `rl.question()` in handleResponseTwo)
function handleResponseThree(answer) {
  console.log(`This is your position: ${answer}`)
  answers.favoriteTeam = answer

  rl.close()
  console.log(answers)
}

