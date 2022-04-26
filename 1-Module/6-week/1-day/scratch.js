// import the readline module into our file
const readline = require('readline');

// create an interface where we can talk to the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answers = {};

// ask the user a question
// Main thread is freed up while we wait for user input. HandleResponeOne will
// be executed when the user has submitted their response.

rl.question("What's your favorite game? ", handleResponseOne);

// first calback
function handleResponseOne(firstAnswer) {
  console.log('Oh ' + firstAnswer + "? I hear that's a really good game!");
  // save firstAnswer to answer object
  answers['favGame'] = firstAnswer;
  rl.question('How many hours have you put into it? ', handleResponseTwo);
}

// second callback (passed to `rl.question()` in handleResponseOne)
function handleResponseTwo(secondAnswer) {
  console.log(`${secondAnswer} hours?! Jesus man get a life...`);
  answers['hours'] = secondAnswer;
  rl.question('Have you at least beaten the game yet? ', handleResponseThree);
}

// third callback (passed to `rl.question()` in handleResponseTwo)
function handleResponseThree(thirdAnswer) {
  if (thirdAnswer.toLowerCase() === 'no') {
    console.log('Sounds like you need to gitgud.');
  } else if (thirdAnswer.toLowerCase() === 'yes') {
    console.log("Well at least you've got that going for you.");
  }
  answers['completed'] = thirdAnswer.toLowerCase() === 'yes';
  // close the interface
  rl.close();
  console.log(answers);
}

