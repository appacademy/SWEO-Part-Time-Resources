// Arrays have built in functions (array methods) on them that we can access to achieve common behaviors. 
    //You’re already familiar with one, Remember .concat? --> myArray.concat(array, num)

// Common Methods to cover:
// Push --> mutate the array and update it with the new data that we want to add to the END.
// Pop
// Shift
// Unshift


// ----------------------array methods that DOES NOT MUTATE original array--------------------
console.log("-----------array.concat----------")
// let numsArr = [0,1,2,3];
//want to add 4 to the end of array

//Original way using .concat method: 
// numsArr.concat(4); //will this mutate our original array? ---> no it won't!
// console.log(numsArr);

//taking a copy of the old array, adding 4, then reassigning it with numsArr
// numsArr  = numsArr.concat(4); //this is NOT mutability (didn't update orignal). this is REASSIGNMENT (pointed numsArr variable to a new array with 4 in it now)
// console.log(numsArr);

// ----------------------array methods that MUTATE original array--------------------
let numsArr = [0,1,2,3];
console.log("-----------array.push----------")
let lengthOfUpdatedArr = numsArr.push(4);
console.log("new length after we push:",lengthOfUpdatedArr);
console.log("after pushing 4 our original array:",numsArr);

console.log("-----------array.pop----------")
let removedLastNum = numsArr.pop();
console.log("return value from pop():", removedLastNum);
console.log("after popping the last num our original array:", numsArr);

console.log("-----------array.shift----------")
//shift method --> removes the first element from the array.
//think of this as shipping the first item away
let removedFirstNum = numsArr.shift()
console.log("return first element removed:", removedFirstNum)
console.log("after shifting the first num from our original array:", numsArr); //removed 0 from original array

console.log("-----------array.unshift----------")
let lengthOfArrUnshift = numsArr.unshift("zero"); //add "zero"  to our original array

console.log("returns the new length after adding element to the front:", lengthOfArrUnshift);

console.log("after unshifting and adding the first element to original array:", numsArr); //added that to our original array

let empty = [];
let emptyNewLength = empty.pop();
console.log(emptyNewLength)
console.log(empty)