// Arrays have built in functions (array methods) on them that we can access to achieve common behaviors. 
    //You’re already familiar with one, Remember .concat? --> myArray.concat(array, num)

// Common Methods to cover:
// Push --> mutate the array and update it with the new data that we want to add to the END.
// Pop
// Shift
// Unshift


// ----------------------array methods that DO NOT MUTATE the original array--------------------
console.log("-----------array.concat----------")
let numsArr = [0,1,2,3];
console.log('Our original array:', numsArr)
// want to add 4 to the end of array

// Original way using .concat method: 
numsArr.concat(4); //will this mutate our original array? ---> no it won't!
console.log('If you call .concat() without setting it to a variable, it will not mutate the original array:', numsArr);

// taking a copy of the old array, adding 4, then reassigning it with numsArr
numsArr  = numsArr.concat(4); //this is NOT mutability (didn't update orignal). this is REASSIGNMENT (pointed numsArr variable to a new array with 4 in it now)
console.log('We are not mutating the original array, but reassigning the variable to point to a new array in memory', numsArr);

// ----------------------array methods that MUTATE original array--------------------
numsArr = [0,1,2,3];
console.log("-----------array.push----------")
// array.push will add whatever value you pass to it to the END of your array, and it will return the new length of the array.
let lengthOfUpdatedArr = numsArr.push(4); // add 4 to end of numsArray and set the value of lengthOfUpdatedArr to be the new length of the array.
console.log("new length after we push:",lengthOfUpdatedArr);
console.log("after pushing 4 our original array:",numsArr);

console.log("-----------array.pop----------")
// array.pop will remove the LAST element from your array, and it will return that element.
let removedLastNum = numsArr.pop(); // remove 4 from the end of the array and set the value of removedLastNum to be 4.
console.log("return value from pop():", removedLastNum);
console.log("after popping the last num our original array:", numsArr);

console.log("-----------array.shift----------")
// array.shift will remove the FIRST element from the array, and it will return that element.
let removedFirstNum = numsArr.shift()
console.log("return first element:", removedFirstNum)
console.log("after shifting the first num from our original array:", numsArr); //removed 0 from original array

console.log("-----------array.unshift----------")
// array.unshift will add an element to the FRONT of your array, and it will return the new length of your array.
let lengthOfArrUnshift = numsArr.unshift("zero"); //add "zero"  to our original array
console.log("returns the new length after adding element to the front:", lengthOfArrUnshift);
console.log("after unshifting and adding the first element to original array:", numsArr); //added that to our original array

console.log("-----------Empty Array----------")
let empty = [];
let emptyNewLength = empty.pop();
console.log('If you pop an empty array, you\'ll get undefined, since there was nothing there to remove:', emptyNewLength)
console.log('Our empty array after calling .pop() on it:', empty)