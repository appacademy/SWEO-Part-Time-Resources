//* Taking User input using Readline
// Importing the Readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question(question prompt, cb);
let userName;
// rl.question("What's your name? ", (answer) => {
//   userName = answer;
//   console.log(`Your name is ${answer}.`);
//   rl.close();
// });

// console.log(userName);
// Callback Chaining
// rl.question("What's up, doc? ", firstAnswer => {
//   console.log( `${firstAnswer} is up.`);

//   rl.question("What's down, clown? ", secondAnswer => {
//     console.log(`${secondAnswer} is down.`);

//     rl.question("What's left, Jeff? ", thirdAnswer => {
//       console.log(`${thirdAnswer} is down.`)
//       rl.close();
//     })
//   })
// })

function handleResponseOne(firstAnswer) {
  console.log(typeof Number(firstAnswer));
  // rl.question("What's down, clown? ", handleResponseTwo);

}
// function handleResponseTwo(secondAnswer) {
//   console.log(`${secondAnswer} is up.`)
//   rl.question("What's Left, Jeff? ", handleResponseThree);
// }
// function handleResponseThree(firstAnswer) {
//   console.log(`${firstAnswer} is up.`)
//   rl.close();
// }

rl.question("What's Up, Doc? ", handleResponseOne);