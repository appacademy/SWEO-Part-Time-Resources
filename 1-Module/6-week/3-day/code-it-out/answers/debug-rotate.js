/***********************************************************************
The function rotate(array, num) takes in an array and a number as args. When the num is positive, the elements of the array should be rotated to the right. When the num is negative, the elements of the array should be rotated to the left. The function should mutate the original array. 

You task:
- There is an issue with the solution
- Find the issue(s) and debug it using the debugger

------------Examples-----------

let arr = ['a', 'b', 'c', 'd', 'e'];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let food = ["rice", "chicken", "icecream", "soup"];
rotate(food, -1);
console.log(food); // [ "chicken", "icecream", "soup", "rice"]

let nums = [1, 2, 3, 4];
rotate(nums, -2);
console.log(nums); // [ 3, 4, 1, 2 ]

-----------------Debugging tips----------------
-1) console.log example that is failing
-2) expected vs actual: what is the expected behavior (right answer) vs. the actual (wrong answer)
-3) where is the action(which line exactly is causing it to fail) ? Where is it happening that is adding that incorrect answer?
-4) is the EXPECTED action correct? are the methods used correctly as they should, 
-5) console.log is factual? Our eyes may deceive us, so if you're not sure console.log the output of the action
-6) start commenting out the actions
-7) bring out debugger

***********************************************************************/
// debug this

const rotate = function(array, num) {
    debugger;
    if (num > 0) { //positive case rotate right
        for (let i = 0; i < num; i++) {
            let el = array.pop();
            array.unshift(el); //add this to the front of the array
        }
    } else { //negative case, rotate left
        for (let i = 0; i < -(num); i++) {
            let el = array.shift();
            array.push(el);
        }
    }
};

let arr = ['a', 'b', 'c', 'd', 'e' ];
rotate(arr, 2);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

let food = ["rice", "chicken", "icecream", "soup"];
rotate(food, -1);
console.log(food); // [ "chicken", "icecream", "soup", "rice"]

let nums = [1, 2, 3, 4];
rotate(nums, -2);
console.log(nums); // [ 3, 4, 1, 2 ]