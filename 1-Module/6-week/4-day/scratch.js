const readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})
const user = {}

const question3 = () => {
    rl.question('What is the flight speed velocity of an unladen swallow? ', (answer3) => {
        if(answer3.toLowerCase().includes('african or european')){
            console.log('I dont know')
            rl.close()
        }else{
            console.log('You are launched into the pit of death')
            return question3()
        }
    })
}



rl.question('What is your name ', (answer) => {
    user.name = answer
    console.log(user)
    rl.question('What is your age ', (answer2) => {
        user.age = answer2
        console.log(user)
        question3()
    })
})


console.log('I am a regular console.log')