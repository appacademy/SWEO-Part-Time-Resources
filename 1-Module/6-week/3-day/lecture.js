const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

function getInput() {
    rl.question("I'm here to take your input! (type quit to end) \n  -", (input) => {
        if (input.toLowerCase() === "quit") rl.close();
        else {
            console.log("You entered this input!")
            console.log(input)
            getInput();
        }
    })
}

getInput()