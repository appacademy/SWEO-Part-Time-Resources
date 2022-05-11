console.log("-------------What is scope?-------------")
let getAverage = function(...argsArr){
    let total = 0;
    console.log("args:", argsArr);
    for(let i=0; i<argsArr.length; i++){
        let arg = argsArr[i];
        total += arg;
    }
    //what variables or functions are available for this line of code? (can be called)

    return total / argsArr.length;
}

console.log(getAverage(10,20,30)); // 60 / 3 --> 20
console.log(getAverage(100, 0)); // 100 / 2 --> 50
console.log(getAverage(20, 20, 20, 20, 20, 20, 20, 20)); //  --> 20