// // butter: $1
// // eggs: $2
// // milk: $3
// // bread: $4
// // cheese: $5


// function costOfGroceries(groceries) {
//     let totalCost = 0;

//     for (let i = 0; i < groceries.length; i++) {
//         let itemToBuy = groceries[i]
//         if (itemToBuy === "butter") {
//             totalCost += 1
//         } else if (itemToBuy === "eggs") {
//             totalCost += 2
//         } else if (itemToBuy === "milk") {
//             totalCost += 3
//         } else if (itemToBuy === "bread") {
//             totalCost += 4
//         } else if (itemToBuy === "cheese") {
//             totalCost += 5
//         } else {
//             return "Unexpected item in bagging area."
//         }
//     }

//     return totalCost
// }



// function mostExpensiveGroceries(groceriesList) {
//     // Your code here
//     let highestCost = 0;
//     let highestIndex = null;

//     for(let i = 0; i < groceriesList.length; i++) {
//         let groceryList = groceriesList[i]
//         let groceriesListCost = costOfGroceries(groceryList)

//         if(groceriesListCost > highestCost) {
//             highestCost = groceriesListCost
//             highestIndex = i
//         }
//     }

//     return highestIndex
// }


// const groceriesMatrix = [
//     ['cheese', 'butter', 'eggs'],
//     ['eggs', 'milk', 'bread', 'bread'],
//     ['cheese', 'bread'],
//     ['eggs', 'butter'],
// ]

// console.log(mostExpensiveGroceries(groceriesMatrix))



// ---------------------------------------------------------------------------


// function stringChanger(word, operation) {
//     // Your code here

//     if (operation === "capitalize") {
//         // let firstLetter = word[0].toUpperCase()
//         // return firstLetter + word.slice(1)
//         return word[0].toUpperCase() + word.slice(1)
//     } else if (operation === "uppercase") {
//         return word.toUpperCase()
//     } else if (operation === "double") {
//         return word + word
//     } else if (operation === "reverse") {
//         let splitWord = word.split("").reverse().join("")
//         return splitWord
//     } else {
//         return word
//     }
// }

// function reverseString(word) {
//     let reversedString = ""
//     for(let i = word.length - 1; i >= 0; i--) {
//         reversedString += word[i]
//     }
//     return reversedString
// }


// console.log(stringChanger("foo", "capitalize"))



function isSorted(nums) {

    // Loop through each number
    for (let i = 0; i < nums.length - 1; i++) {

        // Check if the current number is less than
        // the previous number
        // if (nums[i + 1] < nums[i]) {
        if (nums[i] > nums[i + 1]) {
        // if (nums[i - 1] > nums[i]) {
            // If it's not, return false
            return false;
        }
    }

    // If every number is greater or equal to the previous number
    // in the array, it's sorted.
    return true;

}

// console.log(isSorted([1, 2, 4, 3, 5, 6])) // false
console.log(isSorted([9, 5, 4])) // true




// console.log(undefined > 5)
// console.log('asdf' < 5)
// console.log(undefined === 5)
