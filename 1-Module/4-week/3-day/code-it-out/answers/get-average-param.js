/***********************************************************************
Write a function getAverage that will take in an arbitrary number of arguments (unknown amount) 
where each argument represents a number. Find the average of all arguments


Examples:
console.log(getAverage(10,20,30)); // 60 / 3 --> 20
console.log(getAverage(100, 0)); // 100 / 2 --> 50
console.log(getAverage(20, 20, 20, 20, 20, 20, 20, 20)); //  --> 20
***********************************************************************/
//tool do we have to take/gather in as many arguments as we can? 

let getAverage = function(...numsArr){
    let total = 0;
    // console.log(numsArr);
    for(let i=0; i<numsArr.length; i++){
        let num = numsArr[i];
        total = total + num; //reassigning total with a new total after adding num to original total
    }
    let average = total / numsArr.length;
    return average;
}

console.log(getAverage(10,20,30)); // 60 / 3 --> 20
console.log(getAverage(100, 0)); // 100 / 2 --> 50
console.log(getAverage(20, 20, 20, 20, 20, 20, 20, 20)); //  --> 20