/***********************************************************************
When invoked, the `dynamicRotate` function will accept a number to be used as the
rotation amount and return a function. Positive numbers rotate
the array to the right and negative numbers rotate to the left.

The function returned by `dynamicRotate` will accept an array to
be rotated by the amount provided when `dynamicRotate` was
first invoked. It will return the original array mutated by
the given rotation.

YOUR TASK: 
- Refactor this to follow the single-responsibility principle
- If num is greater than 0, create a helper func to rotate it to the right
    - test this helper individually
- If num is less than 0, create a helper func to rotate it to the left
    - test this helper individually

***********************************************************************/
//right helper func:
const rotateRight = (array, num) => {
    for(let i=0; i<num; i++){
        let el = array.pop(); //remove last
        array.unshift(el); //add to front
    }
}
let testRotateRight = ['a', 'b', 'c', 'd', 'e'];
rotateRight(testRotateRight, 2) //should rotate right 2 tiems //[ 'd', 'e', 'a', 'b', 'c' ]
console.log("right:", testRotateRight);

//left helper func:
const rotateLeft = (array, num) => {
    for (let i = 0; i < -(num); i++) {
        let el = array.shift();
        array.push(el);
    }
}

//single responsbility principe 
// - separation of concerns -> do one thing and one thing well
// - utilizing helper functions to reduce the amount of code that one function has to do.
// - test individual functions / components and makes it easier to debug


// TLDR: 
// SRP --> helper functions, do one thing and one thing well
// DRY --> repeating patterns or making a small change requires multiple change --> normalize/reduce the redundacy

function dynamicRotate(num) {
    //our goal is to reduce the amount of responsibility / logic that innerFunc has to do
    const innerFunc = array => {
        if (num > 0) {
            //rotate array to the right
            //create a rotate right function and invoke it
            //rotate(referenceToArray, num) --> doesn't return anything, only mutates the array reference
            rotateRight(array, num);
        
        } else {
            //rotate array to the left
            rotateLeft(array, num);
        }
        return arr;
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