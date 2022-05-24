console.log("---------------split-------------");
// This method is only available to strings. It will turn a string into an array.
// the argument is important! The 'separator' string you put in your argument is the character
// the string will split on when creating the elements for the array. 
// ** IMPORTANT NOTE ** whatever separator you use will be removed when the array is created.
let sandyQuote = 'This is not your average, everyday darkness. This is.. ADVANCED darkness';



// Remember that strings are immutable! This method must be set to a variable in order to have
// access to the new array. You can reassign your string's variable to be equal to the new array,
// but you will lose access to that original string value. Creating a new one is common practice.


console.log("---------------join-------------");
// This method is only available to arrays. It is similar to split in that it accepts
// a 'separator' string as an argument. It will return a string where elements of the 
// array are concatenated together with the separator between each element. This method
// DOES NOT MUTATE the original array. It will return a new string.
let spongebobQuote = ['The', 'pioneers', 'used', 'to', 'ride', 'these', 'babies', 'for', 'miles.']




console.log("-------------The beauty of opposite methods------------------")
// When you combine these methods, you can get some pretty cool behavior!
let planktonQuote = 'Holographic meatloaf! My favorite!'




