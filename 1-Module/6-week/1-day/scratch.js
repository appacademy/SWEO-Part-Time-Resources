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

// first callback
function handleResponseOne(firstAnswer) {
  console.log('Oh ' + firstAnswer + "? I hear that's a really good game!");
  // save firstAnswer to answer object
  answers['favGame'] = firstAnswer;
  rl.question('How many hours have you put into it? ', handleResponseTwo);
  console.log('Another look at me');
}

// second callback (passed to `rl.question()` in handleResponseOne)
function handleResponseTwo(secondAnswer) {
  console.log(`${secondAnswer} hours?! Wow man get a life...`);
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

console.log('I\'m printing at the bottom');











//---------------------------------------------------------------
//BONUS IF YOURE INTERESTED
//---------------------------------------------------------------
// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let player = {
//   name: 'Garbagio',
//   level: 32,
//   health: 10000000,
//   baseDamage: 25,
//   magicPoints: 70,
//   stamina: 100,
//   runes: 1500,
// };

// let shortSword = {
//   name: "Lordsworn's Straight Sword",
//   damage: 100,
//   staminaPerSwing: 20,
// };

// let greatSword = {
//   name: "Bloodhound's Fang",
//   damage: 2500,
//   staminaPerSwing: 55,
//   statusEffect: 'Bleed',
// };

// let magicSpell = {
//   name: 'Glintstone Stars',
//   damage: 7000,
//   magicPerCast: 10,
// };

// let weakEnemy = {
//   name: 'Skeleton',
//   health: 135,
//   damage: 10,
//   runesDropped: 175,
// };

// let bossEnemy = {
//   name: 'Radahn',
//   health: 10000,
//   damage: 425,
//   runesDropped: 500000,
// };

// let playerTurn = function (answer, player, enemy, playerWeapon, playerMagic) {
//   if (answer === '1') {
//     if (player.stamina > 0) {
//       player.stamina -= playerWeapon.staminaPerSwing;

//       let damage = player.baseDamage + playerWeapon.damage;

//       console.log(`\n${player.name} swung his ${playerWeapon.name} at ${enemy.name}! \n
// It dealt ${damage} damage!`);

//       enemy.health -= damage;

//       if (enemy.health <= 0) {
//         console.log(`${enemy.name} died! \n
// Well done, you gained ${enemy.runesDropped} runes!`);
//         player.runes += enemy.runesDropped;
//         rl.close();
//         console.log(
//           '--------------------------------------------------\n\n' +
//             '--------------------------------------------------\n\n' +
//             '--------------------------------------------------\n\n',
//           player
//         );
//       } else {
//         console.log(`${enemy.name} is still standing!`);
//         enemyTurn(player, enemy);
//       }
//     } else {
//       console.log("You ran out of stamina! You can't move!");
//       player.stamina = 100;
//       enemyTurn(player, enemy);
//     }
//   } else if (answer === '2') {
//     if (player.magicPoints >= playerMagic.magicPerCast) {
//       player.magicPoints -= playerMagic.magicPerCast;

//       let damage = playerMagic.damage;

//       console.log(`\n${player.name} cast ${playerMagic.name} at ${enemy.name}! \n
// It dealt ${damage} damage!`);

//       enemy.health -= damage;

//       if (enemy.health <= 0) {
//         console.log(`${enemy.name} died! \n
// Well done, you gained ${enemy.runesDropped} runes!`);
//         player.runes += enemy.runesDropped;
//         rl.close();
//         console.log(
//           '--------------------------------------------------\n\n' +
//             '--------------------------------------------------\n\n' +
//             '--------------------------------------------------\n\n',
//           player
//         );
//       } else {
//         console.log(`${enemy.name} is still standing!`);
//         enemyTurn(player, enemy);
//       }
//     } else {
//       console.log("You ran out of magic! You can't cast right now!");
//       player.magicPoints = 70;
//       enemyTurn(player, enemy);
//     }
//   } else {
//     console.log(
//       "\n\n--------------------------------------------------\nBruh come on that's not one of the choices"
//     );
//     repeatTurn(player, enemy, playerWeapon, playerMagic);
//   }

//   if (player.health > 0 && enemy.health > 0) {
//     repeatTurn(player, enemy, playerWeapon, playerMagic);
//   } else {
//     rl.close();
//   }
// };

// let repeatTurn = function (player, enemy, playerWeapon, playerMagic) {
//   rl.question(
//     `--------------------------------------------------\n\nWhat would you like to do now?\n
// Attack with ${playerWeapon.name}: 1 \nAttack with ${playerMagic.name}: 2 \n \n`,
//     (answer) => {
//       playerTurn(answer, player, enemy, playerWeapon, playerMagic);
//     }
//   );
// };

// let enemyTurn = function (player, enemy) {
//   console.log(`\n${enemy.name} attacks!\nIt does ${enemy.damage} damage!`);
//   player.health -= enemy.damage;

//   if (player.health <= 0) {
//     console.log(`YOU DIED`);
//     player.runes = 0;
//     rl.close();
//     console.log(
//       '--------------------------------------------------\n\n' +
//         '--------------------------------------------------\n\n' +
//         '--------------------------------------------------\n\n',
//       player
//     );
//   } else if (player.health - enemy.damage <= 0) {
//     console.log(
//       `You only have ${player.health} health left!\n${enemy.name}'s next hit will kill you!!!\n`
//     );
//   } else {
//     console.log(`You have ${player.health} health left!\n`);
//   }
// };

// let playEldenRing = function (player, enemy, playerWeapon, playerMagic) {
//   rl.question(
//     `${player.name} started fighting ${enemy.name}!\nWhat would you like to do first?\n
// Attack with ${playerWeapon.name}: 1 \nAttack with ${playerMagic.name}: 2 \n \n`,

//     (answer) => {
//       playerTurn(answer, player, enemy, playerWeapon, playerMagic);
//     }
//   );
// };

// playEldenRing(player, bossEnemy, greatSword, magicSpell);
