const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Whats up brother? ", (answer) => {
    console.log("You responded, " + answer);
    rl.close()
})

console.log("Done");