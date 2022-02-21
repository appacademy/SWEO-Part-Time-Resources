
// // const first = () => {
// //     second()
// //     console.log('one')
// // }
// // const second  = () => {
// //     third()
// //     console.log('two')
// // }
// // const third = () => {
// //     fourth()
// //     console.log('three')
// // }
// // const fourth = () => {
// //     console.log('four')
// // }


// // const main = () => {
// //     first()
// //     console.log('finish')
// // }

// // main()

// // function foo() {
// //     // right now the below line evaluates to 2 + 6 + baz()
// //     // after that it evaluates to 2 + 6 + 3
// //     return 2 + bar(); 
// //   }
  
// //   function bar() {
// //     return 6 + baz(); 
// //   }
  
// //   function baz() {
// //     return 3;
// //   }
  
// // console.log(foo());

// // const myRecSummer = (number) => {
// //     // base case, tell recursion stop recusing 
// //     if (number === 1 ){
// //         return 1
// //     }
// //     // recursive case and the recursive step
// //     // first run 5 + myRecSummer(4)
// //     // second run 5 + 4 + myRecSummer(3)
// //     // third run 5 + 4 + 3 + myRecSummer(2)
// //     // fourth run 5 + 4 + 3 + 2 + myRecSummer(1)
// //     // fifth run 5 + 4 + 3 + 2 + 1
// //     return number + myRecSummer(number -1) 
// //     // let sum = 5 + myRecSummer(4) + myRecSummer(3) + myRecSummer(2) + myRecSummer(1) 
    
// //     // return sum 
// // }   

// // console.log(myRecSummer(5))

// // Write a recursive function called `sumArray` that takes an array of integers
// // and returns the value of all the integers added together. Your array may
// // include a mix of positive and negative integers!

// function sumArray(arr) {
//     // step 1 create your base case, stop recursing 
//     if (arr.length === 0) {
//         return 0
//     }
//     // let index = 0
//     // let sum = 0
//     let myElement = arr.pop()
//     // step 2 .. recursive case, should I keep recusing?
//     //  and three recursive step, the recursion is actually happening
//     // if arr is [1, 2, 3]
//     // first run the below line is 3 + sumArray(arr)
//     // second run is 3 + 2 + sumArray(arr)
//     // third is 3 + 2 + 1 sumArray(arr)
//     // base case hit, returning 0 , making the below line =
//     // then returning this  3 + 2 + 1 + 0
//     return myElement + sumArray(arr)
//   }  
// // Examples:

// console.log(sumArray([1, 2, 3])); //  6
// console.log(sumArray([0, 1, -3])); //  -2
// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// const one = () => {
//     console.log('Line one of one function')
//     two()
// }
// const two = () => {
//     console.log('Line one of two function')
//     three()
// }
// const three = () => {
//     console.log('Line one of three function')
//     four()
// }
// const four = () => {
//     console.log('Line one of four function')
//     five()
// }

// const five = () => {
//     console.log('Line one of five function')
// }



// const main = () => {
    
//     console.log('Line one of main function')
//     one()
//     console.log('Done')

// }
// main()

// function foo() {
//     return 2 + bar();
// }
  
// function bar() {
//     return 6 + baz();
// }
  
// function baz() {
//     return 3;
// }
  
// console.log(foo()); // 2 + bar() // 2 + 6 + baz // 2 + 6 + 3


// base case -- telling your code to stop recursing
// recursive case -- tell your code to keep recursing 
// recursive step -- the line that actually recurses 

// add all of the numbers from number to 1
// 1. number  = 5
//2. number = 4
// 3. number = 3
// 4. number = 2
// 5. number = 1
const myRecurseSummer =  (number) => {
    // base case -- telling your code to stop recursing
    //false 
    // false
    // false
    // false
    // true
    if(number === 1){
        return 1
    }
    //1. 5 + myRecurseSummer(4)
    // 2. 5 + 4 + myRecurseSummer(3)
    // 3. 5 + 4 + 3 +myRecurseSummer(2)
    // 3. 5 + 4 + 3 + 2 + myRecurseSummer(1)
    // 3. 5 + 4 + 3 + 2 + 1

    return number + myRecurseSummer(number -1)
}

console.log(myRecurseSummer(125250))