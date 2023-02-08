//Time complexity
//BEST DESCRIPTION: Describes the performance of our code in relation to the input size

//The act of analyzing an algorithm to find it's time complexity
//is known as complexity analysis
//We express an algorithms time complexity through Big-O notation

//Big-O
//Big-O tells us how long it takes a function to run
//We're going to talk about 3 time complexities

//Constant, Linear, Quadratic

//As programs grow in size, the milliseconds start to add up
//now an algorithm that used to be fast is slowing everything down


//Constant Time: O(1)
//Best time complexity
//Because no matter how much data we pass in, the algorithm will always take the same amount of time to run
//Examples:  array[i], array[0], array.pop()

//Linear Time: O(n)
//The variable n stands for the amount of data we pass in
//As we pass in more data, the time it takes to execute grows equally in comparison to the data
//Commonly represents algo's that search through EVERY item in a data structure (Brute force algorithms)
//Examples: ONE FOR LOOP

//Quadratic Time: O(n^2) (Polynomials)
//Super bad almost always
//Usually deals with NESTED DATA
//That's bad because not only do we have to search every item in a list(or array), but every nested item too
//Example: NESTED FOR LOOPS


//Best case, average case, worst case

//Best case for arraySearch: The first element in the array is our target
//NOTATION - Big-Omega Ω

//Worst case for arraySearch: Either the target isn't in the array, or it's the LAST element
//NOTATION - Big-Theta Θ

//Average case: It's somewhere in the middle of the array
//NOTATION - Big-O

function arraySearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return true
        }
    }
    return false;
}

//SPACE COMPLEXITY
//Refers to how much memory a function requires

//Also has constant, linear, quadratic


let startTime = Date.now()

function printNums(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
}

printNums(1000000000);

let endTime = Date.now()

console.log(`Runtime: ${endTime - startTime}ms`)