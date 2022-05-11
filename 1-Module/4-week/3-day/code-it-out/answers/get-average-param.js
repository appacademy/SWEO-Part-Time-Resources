/***********************************************************************
Write a function getAverage that will take in an arbitrary number of arguments (unknown amount) 
where each argument represents a number. Find the average of all arguments


Examples:
console.log(getAverage(10,20,30)); // 60 / 3 --> 20
console.log(getAverage(100, 0)); // 100 / 2 --> 50
console.log(getAverage(20, 20, 20, 20, 20, 20, 20, 20)); //  --> 20
***********************************************************************/
//tool do we have to take/gather in as many arguments as we can? 

let getAverage = function(...argsArr){
    let total = 0;
    console.log("args:", argsArr);
    for(let i=0; i<argsArr.length; i++){
        let arg = argsArr[i];
        total += arg;
    }
    return total / argsArr.length;
}

console.log(getAverage(10,20,30)); // 60 / 3 --> 20
console.log(getAverage(100, 0)); // 100 / 2 --> 50
console.log(getAverage(20, 20, 20, 20, 20, 20, 20, 20)); //  --> 20