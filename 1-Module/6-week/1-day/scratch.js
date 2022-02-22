
// const slowCode = () => {
//     console.log('Start of my function')
//     let i = 0
//     console.log('Loading...')
//     while(i < 10000000000){
//         i++
//     }
//     if (i === 10000000000){
//         console.log('Code ran')
//     }

//     console.log('Done')
// }
// const fastCode = () => {
//     console.log('Start of my function')
//     // let i = 0
//     console.log('Loading...')
//     setTimeout(() => {
//         console.log('Code ran')
//     }, 5000)

//     console.log('Code Still Running')
//      let myNum = (
//          () => {
//              return 100
//          }
//      )()
//      console.log(myNum)

//     setTimeout(() => {
//         console.log('SetTimeout2')
//     }, 0)
//     console.log('Done')

// }

// fastCode()


const readline = require('readline')

const interface = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
const question1 = answer => {
    console.log(`You said ${answer}`)
    interface.question('What is your age? ', question2)
}

const question2 = answer => {
    console.log(`You said ${answer}`)
    interface.question('Where you from? ', question3)
}
const question3 = answer => {
    console.log(`You said ${answer}`)
    interface.close()
}




interface.question('What is your name? ', question1)




