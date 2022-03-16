


// let addNums = (n) => {
//     let sum = 0
//     for(let i = 1; i <=n;i++){
//         sum+=i
//     }
//     return sum
// }


// console.time("My Add NUm Func")
// console.log(addNums(1000000000))
// console.timeEnd("My Add NUm Func")

// let startTime = Date.now()  // number of milliseconds from some time in 1970
// addNums(1000000000)
// let endTime = Date.now()

// let someNum = 1000000000

// for(let i = someNum; i <= 10 * someNum; i+=someNum){
//     let startTime = Date.now()  
//     addNums(i)
//     let endTime = Date.now()
//     console.log(endTime - startTime)
// }


// console.log(endTime - startTime)






// let constantTimeFunc = (n) => {
//     let something = 1 + 2 // constant space
//     let something2 = 1 + 2
//     let something3 = 1 + 2
//     let something4 = 1 + 2
//     let something5 = 1 + 2
//     return n + 1 // Time Complexity O(1)
// }



// let linearTimeFunc = (n) => {
//     let arr = [] // SPace complexity is Linear O(n)
//     let arr2 = [1, 2,3,4] // constance space O(1)
//     for(let i = 1; i <= n; i++){ // Linear Time Complexity O(n)
//         // The time the loop takes grows when the input size grows
//         arr.push(i)
//     }
//     return arr
// }



// let startTime1 = Date.now()  
//     linearTimeFunc(1000)
// let endTime1 = Date.now()  
// let startTime2 = Date.now()  
//     linearTimeFunc(1000000)
// let endTime2 = Date.now()  
// let startTime3 = Date.now()  
//     linearTimeFunc(10000000)
// let endTime3 = Date.now()

// console.log(endTime1 - startTime1)
// console.log(endTime2 -startTime2)
// console.log(endTime3 - startTime3)
// console.log(endTime - startTime)

// Still O of N^2
let helperFunc = (n) => {
    let arr = []
    for(let j = 1; j <= n; j++){
        arr.push(j)
    }
}


let expoTimeFunc = (n) => {
    let arr = []
    // This is exponential Time complexity because I have to complete my inner
    // loop before I can go to the next iteration of my outer loop  O(n^2)
    for(let i = 1; i <= n; i++){
     helperFunc(n)
    }
}

