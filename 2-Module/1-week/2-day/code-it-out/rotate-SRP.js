/***********************************************************************
When invoked, the `dynamicRotate` function will accept a number to be used as the
rotation amount and return a function. Positive numbers rotate
the array to the right and negative numbers rotate to the left.

The function returned by `dynamicRotate` will accept an array to
be rotated by the amount provided when `dynamicRotate` was
first invoked. It will return the original array mutated by
the given rotation.

YOUR TASK: 
- Refactor this to follow the single-responsibility principle (helper functions)
- If num is greater than 0, create a helper func to rotate it to the right
    - test this helper individually
- If num is less than 0, create a helper func to rotate it to the left
    - test this helper individually

***********************************************************************/
//SRP vs. DRY
//SRP --> mainly working with helper functions, separating the logic into smaller functions (function should do one thing and one thing really well)
//DRY --> 
    // -repeating patterns or repeating code and reducing the redundancy of it. 
    // -Typically you'll see repeating strings, code in different functions that can be simplified. 
    // -If you change something like a value and have to do it in many places, then you'll probably want to apply DRY.


//How do we determine if we ned to apply SRP?
//-if our function has too much logic that could be separated 
//-We need separation of concerns (one function should not do everything, should instead do one thing well really well)

//right helper func:
const rotateRightHelper = (array, num) =>{
    for(let i=0; i<num; i++){
        let el = array.pop(); //remove last
        array.unshift(el); //add to front
    }
}
// let arrTest = ['a', 'b', 'c', 'd', 'e'];
// rotateRightHelper(arrTest, 2) // arrTest = [ 'd', 'e', 'a', 'b', 'c' ]
// console.log(arrTest);

//left helper func:
const rotateLeftHelper = function(array, num){
    for (let i = 0; i < -(num); i++) {
        let el = array.shift();
        array.push(el);
    }
    return array;
}

function dynamicRotate(num) {
    const innerFunc = array => {
        //innerFunc uses SRP
        if (num > 0) {
            //rotate array to the right
            //skeleton: rotateRightHelper(array, num) --> can return maybe the reference to the mutated array or don't return anything
            rotateRightHelper(array,num);
        } else {
            //rotate array to the left
            rotateLeftHelper(array,num); //rotates left and mutates array
        }
        return array;
    }
    return innerFunc;
}

//rotate right example (postive num)
let arr = ['a', 'b', 'c', 'd', 'e'];
rotateRightTwo = dynamicRotate(2);
rotateRightTwo(arr);
console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

//rotate left example (negative num)
let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
rotateLeftOne = dynamicRotate(-1);
rotateLeftOne(animals)
console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]


//hint for helper: 
//rotateRight(array, num) --> takes in array, num --> mutates reference to array
//rotateLeft(array, num) --> takes in array, num --> mutates reference to array

//single responsbility principle 
// - separation of concerns -> do one thing and one thing well
// - utilizing helper functions to reduce the amount of code that one function has to do.
// - test individual functions / components and makes it easier to debug

