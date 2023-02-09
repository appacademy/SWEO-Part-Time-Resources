// hello()

// function hello(){
//     console.log('hello world')
// }


// helloWithConst() // Reference Error

// const helloWithConst = function(){
//     console.log('hello world')
// }

// helloWithVar() // Type Error

// var helloWithVar = function(){
//     console.log('hello world')
// }

// var foo 

// function foo(){
//     foo = 'some string'
//     return foo
// }

// console.log(foo())

// var foo = 'Im a string of var'

// function foo(){
//     return 'im a function'
// }

// var foo = () => {
//     return 'im a function'
// }

// console.log(foo)

// foo()

// const namePrinter = (str) => {
//     return `${str} is inside my parameter, and this ${((str1) => `${str1} is inside my iffe`)('Thompson')}`
// }

// console.log(namePrinter('James'))

// let firstName = 'James'
// let lastName = 'Thompson'

// let interpolate = `This is my firstName: ${firstName}, and this is my lastName ${lastName}`

// let oldWay = 'This is my firstName: ' + firstName + ', and this is my lastName ' + lastName

// console.log(interpolate)
// console.log(oldWay)

// const stringInterpolate = (str1, str2) => {
//     return `I want to show ${str1} and ${str2}`
// }

// console.log(stringInterpolate('string one', ` string two`))


/***********************************************************************
Write a recursive function called `sort` that takes an array of integers, `nums`
and returns an array containing those integers sorted from least to greatest.

Your function should accept a default argument called `sorted` which
holds the currently sorted elements. Each recursive step should add
the smallest number in the `nums` array to the end of `sorted`.

There are many ways to accomplish this task but here's a simple algorithm:

1. Check the base case: If `nums` is empty, then return `sorted`
2. Otherwise, find the smallest element in `nums`
3. Add the smallest element to the end of `sorted`
4. Remove the smallest element from `nums`
5. Recursively call `sort()` with updated `sorted` and `nums`

Examples:

sort([4,1,6,3,1,7]); // [1, 1, 3, 4, 6, 7]
sort([0, 1, -3]); // [-3, 0, 1]
sort([]); // []
***********************************************************************/

function sort(nums, sorted = []) {
    // Base case: all numbers are in the sorted array
    if(nums.length === 0) return sorted
    // Find the smallest number in the nums array and get its index
    // let smallest = Infinity
    // nums.forEach(ele => {
    //     if(ele < smallest){
    //         smallest = ele
    //     }
    // })
    // let smallIndex = nums.indexOf(smallest)
    let smallIndex = 0
    for(let i = 0; i < nums.length; i++){
        let ele = nums[i]
        if(ele < nums[smallIndex]){
            smallIndex = i
        }
    }
  

    // Add the smallest number to the end of the sorted array
    sorted.push(nums[smallIndex])
    // Remove the smallest number from the nums array
    nums.splice(smallIndex, 1)

    // Recursively call sort with the new array
    return sort(nums, sorted)
}

// console.log(sort([4,1,6,3,1,7])); // [1, 1, 3, 4, 6, 7]


// const alphabetical = (arr, sorted = []) => {
//     if(!arr.length) return sorted
//     let minIndex = 0
//     for(let i = 1; i < arr.length; i++){
//         let ele = arr[i]
//         if(typeof ele === 'number'){
//             if(ele <= arr[minIndex]){ 
//                 minIndex = i
//             }
//         }
//         else if(ele < arr[minIndex]){
//             minIndex = i
//         }
//     }
//     sorted.push(arr[minIndex])

//     arr.splice(minIndex, 1)

//     return alphabetical(arr, sorted)
// }


// const arr1 = [3, 2, 1, 4, 'james', 'hanan', 'helffffffffffffflo', 'caitlyn', 'kelly']

// console.log(alphabetical(arr1))