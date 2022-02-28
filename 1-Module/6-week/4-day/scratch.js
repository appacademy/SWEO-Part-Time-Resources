const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const myChar = {}

const ageQuestion = () =>   {
    rl.question('What is your characters age ', answer => {
        myChar.age = answer
        console.log(myChar)
        rl.question('What is your superpower \n enter 1 for flight \n enter 2 for invisibility \n enter 3 for laser vision \n' , answer2 => {
            if(answer2 === '1'){
                console.log('Your super power is flight')
            }if (answer2 === '2'){
                console.log('Your super power is invisibility')
            }if(answer2 === '3'){
                console.log('Your super power is laser vision')
            }
            rl.close()
        })
        
    })
}

rl.question('Hey what do you want to name your character?? ', answer => {
    myChar.name = answer
   ageQuestion()
})
