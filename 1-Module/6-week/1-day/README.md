# M1W6D1

## Assessment(1 hour 35 min)

- 13 points total (7 mc and 6 coding specs)
  - must get 11/13 to pass.
- Please remember to use your resources on the multiple choice questions! Run the code before you answer, look up the answer if you're not sure! Save your 2 points that you can miss for the coding portion. Also, there is no correct order in doing these things. If you want to do the coding portion first and then the multiple choice, do that!

## Readings(25 min)

## Node/Readline

### Node Runtime Environment

- Node is a runtime for JavaScript that runs on servers/computers with
**full user-level system access**.

- This is in contrast to javascript in the browser which is sandboxed for
  security reasons(so webpages cannot do anything malicious on your system).

- This allows us to write software that runs natively on your computer such as a
  desktop app or server for a web app. Utilities such as readline which interact
  with the file system can only be utilized in node, not the browser.

### Callbacks and the Event Loop

- Callbacks allow us to write asynchronous code freeing up the main threads
  call stack to perform other tasks as we are waiting for some sort of input.

- In our below code we are using callbacks to pass a function to another
 function to be executed once we have user input. While we are waiting for the
 user input, the main thread of execution is freed up to perform other tasks.

```js
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

rl.question("What's your favorite game? ", handleResponseOne)

// first calback
function handleResponseOne(firstAnswer) {
  console.log("Oh " + firstAnswer + "? I hear that's a really good game!")
  // save firstAnswer to answer object
  answers['favGame'] = firstAnswer
  rl.question("How many hours have you put into it? ", handleResponseTwo)
}

// second callback (passed to `rl.question()` in handleResponseOne)
function handleResponseTwo(secondAnswer) {
  console.log(`${secondAnswer} hours?! Jesus man get a life...`)
  answers['hours'] = secondAnswer
  rl.question("Have you at least beaten the game yet? ", handleResponseThree)
}

// third callback (passed to `rl.question()` in handleResponseTwo)
function handleResponseThree(thirdAnswer) {
  if (thirdAnswer.toLowerCase() === "no") {
    console.log("Sounds like you need to gitgud.")
  } else if (thirdAnswer.toLowerCase() === "yest") {
    console.log("Well at least you've got that going for you.")
  }
  answers['completed'] = thirdAnswer.toLowerCase() === "yes"
  // close the interface
  rl.close()
  console.log(answers)
}
```
