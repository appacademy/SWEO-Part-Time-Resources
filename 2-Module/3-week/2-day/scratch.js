//Time Complexity and Big-O

//Not only can we time our code, but we can also learn to learn to read code,
// and quickly determine the growth analysis

//This is called complexity analysis and we express it through big-O analysis

//Three types of growth: Constant, Linear, Quadratic

//BEST DESCRIPTION: Time complexity describes the performance of our code in relation to the input size

//BIG-O
//Big-O describes how long it takes to run

//Constant Time:    O(1)
//Best time complexity, and this is due to the fact that it doesn't matter how much data we put into it,
//it will always take the same amount of time to run
//Examples: array.pop() array[0] 

//Linear Time:    O(n)
//Linear time grows equally in comparison to the amount of adta being passed in
//Example: ONE For loop through an array
//As the array grows in size, it takes longer to loop through
//Sometimes referred to as "Brute Force Algorithms";

//Quadratic Time:    O(n^2)
//Almost always super bad (It can start out fast, but as the data grows it gets slow much quicker)
//This time complexity is normally dealing with nested data
//Because not only do we have to loop through every element, but every nested element
//Example: Nested for loops

//Best case, worst case, average case
//It's possible that we get lucky, and the algorithm won't take finish

//Example


function arrSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return true;
    }
    return false;
}

//There is a possibility that the first element could be the target
//That would be the BEST CASe

//The WORST CASE would be if we looped through the whole array and it either isn't there or it's the last element

//The AVERAGE CASE would be that the target it about halfway through the array

//Best Case - Big Omega
//Average Case - Big Theta
//Worst Case - Big-O

//Space Complexity
//Describes how much space in memory a function needs in relation to the input size

//See a/A open^^^^

//Timing benchmarks
//If you ever want to stop a programs execution hit ctrl + c

//Use console.time() and Date.now() to time our programs

let startTime = Date.now()

function addNums(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

addNums(100)

let endTime = Date.now()

console.log(`Runtime: ${endTime - startTime}ms`);

