// function createCounter() {
//     let count = 0;

//     return function () {
//         count++;
//         return count;
//     };
// }

// let counter = createCounter();
// console.log(counter);
// console.log(counter()); // => 1
// console.log(counter()); // => 2

// let counter2 = createCounter();
// console.log(counter2());

const factory = function (voiceChip) {
    console.log("Booting up the factory");
    console.log("Creating a new list of people...");

    let names = [];
    console.log("Returning a new robot that says " + voiceChip + "...");

    return function robot(name) {
        console.log("Booting up the " + voiceChip + "robot...");
        console.log("Adding " + name + " to names");
        names.push(name);
        console.log("Returning the correct phrase...")
        return voiceChip + " " + names.join(" and ");
    };
};

const hiBot = factory("Hello");
console.log("This is the return of hiBot", hiBot)
console.log(hiBot("Alan"));
console.log(hiBot("Kristen"));

console.log("----------Done------------")

const byeBot = factory("Bye");
console.log("This is the return of byeBot", byeBot);
console.log(byeBot("Kristen"));
console.log(byeBot("Alan"));