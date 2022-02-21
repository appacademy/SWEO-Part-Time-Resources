
// const higherOrder = param => {
//     // Creating an entirely new function 
//     const innerFunc = () => {
//         // returning a string
//         return 'The return value of my closure'
//     }
//     // returning the function invoked
//     // evaluated to the return value on like 10 
//     // return innerFunc()
//     // returning the function uninvoked 
//     return innerFunc

// }

// // console.log(higherOrder) // [Function : higherOrder]
// // // evaluating to its return value,  which is the reference to the inner func on line 7
// // console.log(higherOrder()) // [Function : innerFunc]
// // const myClosure = higherOrder() // equal to the variable that references my inner function 
// // console.log(myClosure()) // 'The return value of my closure' 

// // // const twoInOneInvoke = higherOrder()() // 'The return value of my closure' 
// // console.log(twoInOneInvoke)

// // console.log(higherOrder) // is equal to line 5 // the decleration of the higher order function 
// // // // functions always evaluate to their return value
// // // const closureFunc = higherOrder() // equal to line 6
// // //  this evaluates to the return value of both functions, when the outer funcion returns the invocation of the inner
// // console.log(higherOrder()) 
// // // closureFunc()
// // const robotAction = () => {
// //     return name + ' says Hello' // name is still baylen
// // }


// const robotFactory = name => { // name = 'baylen'
//     let greetings = ['Hey', 'Hi', 'Hello']  
//     const robotAction = (saying) => {
//         let myGreeting = greetings.join(' and ')
//         // return name + ' says ' + saying // name is still baylen
//         return 'I am ' + name + ' and I can say ' + myGreeting + ' But I will say ' + saying
//     }
//     return robotAction
// }

// // let createRobot = robotFactory('Baylen') // [Function : robotAction ]
// // let createRobot2 = robotFactory('Zaviar')
// // console.log(createRobot2('Var is amazing I use it all the time'))
// // console.log(createRobot('hello')) // 'Baylen Says Hello'
// // console.log(createRobot()) // 'Baylen Says Undefined'

// let createRobot3 = robotFactory('James')
// console.log(createRobot3('Texas is Awesome'))



// const myOuterFunc = () => {
//     // creating a function like normal 
//     let inner = () => {
//         return param
//     }
//     // returning the declaration the the function above,  not invoked 
//     return inner
// }

// console.log(myOuterFunc) // [Function : myOuterFunc]
// let myFunc = myOuterFunc() // inner function 
// console.log(myFunc) // [Function : inner]
// console.log(myFunc()) // I am an inner function return
// // console.log(myOuterFunc()())

// // outer function taking a parameter 
// const myOuterFunc = (param) => {
//     const aVariable = 'Something'
//     // creating a function like normal 
//     // if there was more logic here 

//     let inner = () => {
//         // this function could do something with the logic from the outer function 
//         // and to the user its private, or abstracted away 

//         console.log(aVariable)
//         return param
//     }
//     // returning the declaration the the function above,  not invoked 
//     return inner
// }
// console.log(myOuterFunc('Baylen') )
// let myOuter = myOuterFunc('Baylen') // [Function : inner]
// console.log(myOuter())
// // console.log(myOuter()) // Baylen

// function createCounter() {
//     let count = 0;
  
//     return function() {
//       count++;
//       return count;
//     };
//   }
  
//   let counter1 = createCounter();
//   let counter2 = createCounter();
//   console.log(counter1(), 'counter1'); // => 1
//   console.log(counter1(), 'counter1'); // => 2
//   console.log(counter2(), 'counter1'); // 
  
  
//   //we cannot reach the count variable!
//   counter.count; // undefined
//   let counter2 = createCounter();
//   console.log(counter2()); // => 1

const createRobot = (name) => {
    let someArray = ['Hello', 'Hi', 'Sup']
    // anonymous style
    // return  (saying) => {
    //     return name + ' Says I can say  ' + someArray.join(' and ') + ' But I will say ' + saying
    // }
    const myInner =   (saying) => {
        return name + ' Says I can say  ' + someArray.join(' and ') + ' But I will say ' + saying
    }
    return myInner
}

let myRobot = createRobot('Zaviar')
console.log(createRobot('Zaviar'))
console.log(myRobot('Javascript is awesome, especially scope'))


























