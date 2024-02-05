//WHILE LOOPS - Will execute code for as long as a condition is true

// let count = 0;

// while (count < 3) {
//     //THE CODE INSIDE THE BRACKETS WILL REPEAT AS LONG as its true
//     console.log("I wish asdsdsdas");
//     count++;
// }

//FOR LOOPS -
/*
    3 important sections: 

    1. Initial expression - Run one time at the first iteration AND NEVER AGAIN

    2. Condition - Is checked every iteration (including the first one) and the loop
                   will only run if the condition is true

    3. Loop End Expression - Will end the loop by eventually making the condition false

    for (INIT EXP; CONDITION; END EXP) {
        Code to be run
    }
*/

// for (let urmom = 0; urmom < 3; urmom++) {
//     console.log("I wish asdsdsdas");
// }
//let cats = ['Binx', 'King', 'Onyx', 'Bubba', 'Sylvestor', 'Jaffar', 'Skipper', 'Tonch'];

// for (let i = 0; i < cats.length; i++) {
//     console.log(cats[i])
// }

//console.log(cats[4])

let cats = ['Binx', 'King', 'Onyx', 'Bubba', 'Sylvestor', 'Jaffar', 'Skipper', 'Tonch'];

// for (let i = 0; i < cats.length; i++) {
//     let cat1 = cats[i];

//     for (let j = i + 1; j < cats.length; j++) {
//         let cat2 = cats[j];

//         console.log(cat1 + ' vs ' + cat2)
//     }
// }

for (let i = 0; i < cats.length; i++) {
    console.log(cats.splice(cats.length - 1, 1))
    console.log(cats)
}

