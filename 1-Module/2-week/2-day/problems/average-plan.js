// Avg Val
// Write a function avgVal(arr) that accepts an array as an arg. The function should return the average of all values in the array. If the array is empty, it should return null.

//---------------understanding the problem------------------
//input --> [5, 10]
//output --> 7.5
//add everything in the input array, then take the average of it

//---------------plan-------------------
//1. define avgVal as a function expression syntax (...your pseudo code...)
let avgVal = function(array){
    //1.5 Handle the edge case where array is empty (no length). 
    if(array.length === 0) {
        //1.6 return null if condition met.
        return null;
    }
        
   
    //2. create a sum variable to keep count of the nums we add from the original array()
    let sum = 0;
    //3. iterate over the array of nums, then get the number
    for(let i=0; i<array.length; i++){
        //4. take number and add it to the sum variable
        let currentNum = array[i];
        sum+=currentNum;
    }
    
    //5. after for loop, create a variable called average. Take the sum / length of array
    let average = sum / array.length;
    //6. take the average variable and return it.
    return average;
}







console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null