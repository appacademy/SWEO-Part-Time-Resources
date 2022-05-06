/*NOTES LINK (ctrl + left-click to open): 
https://hackmd.io/ibCTcNIERy2irC8OUTRcFQ?view#Mutability
*/


// mutable example
let nums = [1, 2, 3];
console.log(nums); // nums --> [1,2,3]
nums[0] = 100; //mutates array data updating index 0 w/ new value
console.log(nums); //nums --> [100, 2, 3]

//immutable example
let name1 = "WIZ";
console.log(name1);
name1[1] = "E"; // This will not work
name1[2] = "S"; // This will not work
console.log(name1); //still "WIZ"
//we're unable to mutate or change individual characters in our string. 

// Instead, we'll have to reassign our
// variable to a new string in order to see the change.