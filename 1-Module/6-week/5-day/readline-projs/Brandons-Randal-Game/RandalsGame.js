const readline = require('readline'); //this is an input module like mocha
//node to run code

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


/*
Randal's #: 12
Player must get past each function to complete Level
Hints:
Level 2: Hates Prime numbers: exclude
Level 3: fave num NOT anything squared that equates to 4, 9 or 16
Level 4: fave num NOT 1 or 20
Level 5: fave num NOT 13
*/
let answerArray = [];

const isNumberHere = (num) => {
    for (let i = 0; i < answerArray.length; i++) {
        if (num == answerArray[i]) {
            return true;
        }
    }
    return false;
}

//Level 2
const firstQ = answer => {
    if (answer == 12) {
        console.log("Well, it sucks to be you. Game Over!");
        rl.close();
    } else {
        answerArray.push(answer);
        console.log("Nicely done, Level 1 Complete. Let's see if you can get to 5. >: ) . Just 1 thing, you can't use the same number twice")
        rl.question("Hint #1 Randal is an mean, he hates anything squared that equates to 4, 9 or 16.", secondQ);
    }
}

//(Level 3
const secondQ = answer => {
    if (answer == 12) {
        console.log("It's ok, we can't all be winners :/. Game over!");
        rl.close();
    }
    if (isNumberHere(answer)) {
        console.log('Number already received');
      return rl.question("Hint #1 Randal is an mean, he hates anything squared that equates to 4, 9 or 16.", secondQ);
    } else {
        answerArray.push(answer);
        console.log("I hope you're keeping track, only 3 levels 2 go!");
        rl.question("Level 2 Complete. Hint numba 2:  Randal's head is filled with beans, he doesn't know what inclusive means.", thirdQ);
    }

}

//Level 4
const thirdQ = answer => {
    if (answer == 12) {
        console.log("Randal's coming, you better hide. Game over!");
        rl.close();
    }
    if (isNumberHere(answer)) {
        console.log('Number already received');
      return rl.question(thirdQ);
    } else {
        answerArray.push(answer);
        console.log('Look at you, King or Queen..');
        rl.question("Level 3 Complete! Hint #3: Out of the remaining numbers that could possibly be Randal's Fave, the smallest and largest prime numbers are not it!", fourthQ);
    }

}

//Level 5
const fourthQ = answer => {
    if (answer == 12) {
        console.log("Well, checkmate, you have greeted your fate. Game over!");
        rl.close();
    }
    if (isNumberHere(answer)) {
        console.log('Number already received');
       return rl.question(fourthQ);
    } else {
        answerArray.push(answer);
        console.log("Oh, you're so close. Finish this and you'e good to go!");
        rl.question("Level 4 Complete! HiNt NuMbEr 4: Randal is surprisingly superstitious, he doesn't like it when Fridays have this date", fifthQ);
    }

}

const won = function () {
    console.log("GAME WON!!!");
}

//Game Won or Lost
const fifthQ = answer => {
    if (answer == 12) {
        console.log("Well, checkmate, you have greeted your fate. Game over!");
        rl.close();
    }
    if (isNumberHere(answer)) {
        console.log('Number already received');
       return rl.question(fifthQ);
    } else {
        console.log("Congrats, you've seemed to avoid picking Randal's favorite number. If you did I wonder.");
        setTimeout(won, 500);
        rl.close();
    }
}

(function () {
    return answerArray;
  })();

//Level 1:
rl.question("Welcome to Randal's Game! Pick a number between 1 and 20, inclusive, if you dare. Try not to pick Randal's favorite number if you care...", firstQ);
