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
//check all the way at the bottom for hints, but try on your own first!
function rotateRight(array,num){
    for(let i=0; i<num; i++){
        let el = array.pop(); //remove last
        array.unshift(el); //add to front
    }
}
// let testArr = ['a', 'b', 'c', 'd', 'e'];
// rotateRight(testArr, 2)
// console.log("testArr:", testArr);

function rotateLeft(array,num){
    for (let i = 0; i < -(num); i++) {
        let el = array.shift();
        array.push(el);
    }
}

// let testArrLeft = ['wombat', 'koala', 'opossum', 'kangaroo'];
// rotateRight(testArrLeft, -1) //[ 'koala', 'opossum', 'kangaroo', 'wombat' ]
// console.log("testArrLeft:", testArrLeft);


function dynamicRotate(num) {
    const innerFunc = array => {
        if (num > 0) {
            //rotate array to the right
            rotateRight(array,num);
        } else {
            //rotate array to the left
            rotateLeft(array,num);
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