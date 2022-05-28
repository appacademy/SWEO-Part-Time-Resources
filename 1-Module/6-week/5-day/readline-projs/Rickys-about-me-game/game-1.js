// dunno what im building yet but i know i neeed this interface ;D


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log('Welcome to how well do you know Ricky!?!?');
console.log('*****************************************');
console.log('Question 1-->');

const run3 = function () {
    console.log('Question 3-->');
    rl.question('Does Ricky prefer Windows or Mac? ', (answer3) => {
        if (answer3.toLowerCase() === 'windows') {
            console.log('Congratulations! you got all the questions right!' );
            rl.close();
        } else {
            console.log('Nope! try again');
            run3();
        }
    });
};

const run2 = function () {
    console.log('Question 2-->');
    rl.question('True or False - Ricky loves to go snowboarding? ', (answer2) => {
        if (answer2.toLowerCase() === 'true') {
            console.log('CORRECT!')
            run3();;
        } else {
            console.log('Nope! try again');
            run2();
        }
    });
};

const run = function () {
    rl.question('How old is Ricky? ', (answer) => {
        if (answer === '26') {
            console.log('CORRECT!')
            run2();
        } else {
            console.log('Nope! try again!');
            run();
        }
    });
};
run();
