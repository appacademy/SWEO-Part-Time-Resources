const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const firstAnswer = (answer) => {
    console.log(`Welcome to Werewolf Tsukuyomi ` + answer);
    if(answer === 'Kent') {
        console.log(`As Kent you are the Werewolf`);
        rl.question(`Do you accept this mission? (y/n) `, secondAnswerKent);
    } else if(answer === 'Mong') {
        console.log(`As Mong you are the Villager`);
        rl.question(`Do you accept this mission? (y/n) `, secondAnswerMong);
    } else if(answer === 'Cung') {
        console.log(`As Cung you are the Seer`);
        rl.question(`Do you accept this mission? (y/n) `, secondAnswerCung);
    }
}

const secondAnswerKent = (answer) => {
    if(answer === 'y') {
        console.log(`There's no time to waste!`);
        rl.question(`Who would you like to kill? `, thirdAnswerKent);
    } else if(answer === 'n') {
        console.log(`That is too bad...A week later....the villagers find out you're the werewolf and hang you.`);
        rl.close();
    }
}

const secondAnswerMong = (answer) => {
    if(answer === 'y') {
        console.log(`There's no time to waste!`);
        rl.question(`Who do you think is the werewolf? `, thirdAnswerMong);
    } else if(answer === 'n') {
        console.log(`That is too bad...A week later....the werewolf eats you.`);
        rl.close();
    }
}

const secondAnswerCung = (answer) => {
    if(answer === 'y') {
        console.log(`There's no time to waste!`);
        rl.question(`Who would you like to tell who the werewolf is?  `, thirdAnswerCung);
    } else if(answer === 'n') {
        console.log(`That is too bad...A week later....the werewolf eats you.`);
        rl.close();
    }
}

const thirdAnswerKent = (answer) => {
    if(answer === 'Kent') {
        console.log(`Gameover, Kent commited senpuku!`);
        rl.close();
    } else if(answer === 'Mong') {
        console.log(`Congrats! You win!`);
    } else if(answer === 'Cung') {
        console.log(`Congrats! You win!`);
    }
    rl.close();
}

const thirdAnswerMong = (answer) => {
    if(answer === 'Kent') {
        console.log(`Congrats! You win!`);
        rl.close();
    } else if(answer === 'Mong') {
        console.log(`You lose! You don't trust yourself!`);
    } else if(answer === 'Cung') {
        console.log(`You lose! Cung is the Seer!`);
    }
    rl.close();
}

const thirdAnswerCung = (answer) => {
    if(answer === 'Kent') {
        console.log(`Gameover, Kent kills you before you tell the other Villagers`);
        rl.close();
    } else if(answer === 'Mong') {
        console.log(`Congrats! Mong helps you kill Kent, the werewofl!`);
    } else if(answer === 'Cung') {
        console.log(`You already know you're not the werewolf!`);
    }
    rl.close();
}

rl.question(`Choose a character: Kent, Mong, or Cung `, firstAnswer);
