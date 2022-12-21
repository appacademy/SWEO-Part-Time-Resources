const readline = require('readline'); //Import Proper

const rl = readline.createInterface({ //Create variable to access specific methods of readline object
  input: process.stdin,
  output: process.stdout
});

// rl.question('What is your name? ', (answer) => {
//   console.log( `Your name is ${answer}.` );
//   rl.close();
// });

// Callback Chaining
// rl.question('What is your first name? ', answer => {
//   console.log(answer);

//   rl.question('What is your last name? ', answer => {
//     console.log(answer);

//     rl.question('How old are you? ', answer => {
//       console.log(answer);

//       rl.close();
//     });
//   });
// });

function handleResponseOne( firstAnswer ) {
  console.log( firstAnswer );
  rl.question( 'What is your last Name? ', handleResponseTwo);
}
function handleResponseTwo( secondAnswer) {
  console.log( secondAnswer );
  rl.question( 'How old are you? ', handleResponseThree);
}
function handleResponseThree( thirdAnswer ) {
  console.log( thirdAnswer );
  rl.close();
}

rl.question('What is your first Name? ', handleResponseOne);