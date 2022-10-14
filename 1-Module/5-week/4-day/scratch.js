//write a recursive func that takes in a 2d array and returns an array with the largest number array
//from each inner arr.  Do not use Math.max

let recursiveFunc = (arr, largeNums = []) =>{

    //BASE CASE arr.length = 0;
    // let largeNums = []
    if(arr.length === 0){
        return largeNums
    }
    //RECURSIVE STEP
    let firstSubArr = arr.shift()


    //find max of first el
    let max = -Infinity;
    firstSubArr.forEach(el =>{
        // console.log(el)
        if(el > max){
            max = el;
        }
    })

largeNums.push(max)

console.log(arr)
    //recurse through modified array

return recursiveFunc(arr, largeNums)
};


let arr2 = [[1, 5, 10, 3], [3, 2, -1], [1, 2, 16]]
console.log(recursiveFunc(arr2)) // [10, 3, 16]































// let recursiveFunc = (arr, largeNums = []) =>{
//     if(!arr.length) return largeNums

//     let innerArr = arr[0]
//     let largest = null
//     innerArr.forEach(el =>{
//         if(el > largest || largest === null){
//             largest = el
//         }
//     })
//     largeNums.push(largest)
//     let newArr = arr.slice(1)

//     return recursiveFunc(newArr, largeNums)

// }

// let arr2 = [[1, 5, 10], [3, 2, -1]]
// console.log(recursiveFunc(arr2)) // [10, 3]
