// const buttonClick = (param1) => {
//     console.log(param1)
// }

// const someAPI1 =(param1, param2) => {
//     console.log(param1, param2)
//     console.log('My Api Call 1 is done')
// }
// const someAPI2 =(param1, param2) => {
//     console.log(param1, param2)
//     console.log('My Api Call 2 is done')
// }   

// const scrolling = (message) => {
//     console.log(`I am doing ${message}`)
// }

// const typing = () => {
//     console.log('I am typing')
// }



// const mainFunc = () => {
//     console.log('Random user input happening', 24)
//     let interval1 = setInterval(someAPI1, 1000, 'Getting users from the backend', 'Gottem' )
    
//     console.log('Random user input happening', 27)
//     let interval2 = setInterval(someAPI2, 1000, 'Adding a user the the database', 'added')

//     setTimeout(scrolling, 0, 'Scrolling.....Some')
//     setTimeout(scrolling, 1, 'Scrolling.....times')
//     setTimeout(scrolling, 2, 'Scrolling.....scrolling')
//     console.log('Random user input happening', 34)
//     setTimeout(scrolling, 3, 'Scrolling.....is')
//     setTimeout(scrolling, 4, 'Scrolling.....a')
//     console.log('Random user input happening', 37)
//     setTimeout(scrolling, 5, 'Scrolling.....thing')
//     setTimeout(scrolling, 6, 'Scrolling.....people')
//     console.log('Random user input happening', 40)
//     setTimeout(scrolling, 7, 'Scrolling.....do')
//     setTimeout(scrolling, 8, 'Scrolling.....sometimes')

//     for(let i = 0; i < 1; i++){
//         for(let j = 0 ; j < 100; j++){
//             console.log(i,j)
//         }
//     }

//     for(let i = 0; i < 1; i++){
//         for(let j = 0 ; j < 100; j++){
//             console.log(i,j)
//         }
//     }
// }

// mainFunc()

// const somIntervalFunc = (param1, param2) => {
//         console.log(param1, param2)
//         i++
//         console.log('I am running every 1 second')
//         if(i === 10){
//             clearInterval(myInterval)
//         }
// }
// let i = 0
// let myInterval = setInterval(somIntervalFunc, 1000, 'Anything can be here','Anything can be here too')

// const myFunc  = () => {
    
//     return myInterval

// }

// // console.log(myFunc())
// console.log()




// let num = 10

// let someVar = false

// setTimeout(() => {
//     someVar = true
//     if (someVar === true){
//         clearInterval(myInterval)
//     }
// }, 4000)
// const counterFunc  = (num) => {
//     if(num === 0){
//         clearInterval(myInterval)
//     }
// }

// function myFunc() { 
//     if(number === 0){
//     clearInterval(myInterval)
// }   
// }
// let myInterval = setInterval(myFunc, 1000)
// myInterval.count


// setTimeout(myFunc, 1000, 'Baylen', 'inside my callback')

// let myInterval = setInterval(myFunc, 1000, myInterval)




function intervalCount(cb, delay, amount) {
  let interval  = setInterval(() => {
    cb() // console.log('Hi')
    amount --
    if(amount === 0) {
      clearInterval(interval)
    }
  }, delay)
}


intervalCount(() => {
    console.log('Hi')
}, 1000, 3)
























