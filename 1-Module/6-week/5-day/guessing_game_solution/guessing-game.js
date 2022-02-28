const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secretNumber;

askRange();

function askRange() {
  rl.question("Enter a max number: ", max => {
    rl.question("Enter a min number: ", min => {
      console.log(`I'm thinking of a number between ${min} and ${max}...`);
      secretNumber = randomInRange(Number(min), Number(max));
      askGuess();
    });
  });
}

function askGuess() {
  rl.question("Enter a guess: ", num => {
    const isCorrect = checkGuess(Number(num));
    if (isCorrect) {
      console.log("YOU WON.");
      rl.close();
    } else {
      askGuess();
    }
  });
}

function randomInRange(min, max) {
  let range = max - min;
  return min + Math.floor(Math.random() * (range + 1));
}

function checkGuess(guess) {
  if (guess > secretNumber) {
    console.log("Too high.");
    return false;
  } else if (guess < secretNumber) {
    console.log("Too low.");
    return false;
  } else {
    console.log("Correct!");
    return true;
  }
}
