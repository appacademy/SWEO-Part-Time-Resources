let multiplyBy10 = function(num){
    return num * 10;
}

let subtract1 = function(num){
    return num - 1;
}

// console.log(multiplyBy10(5));


let higherOrderFunction = function(num, cb1){
    let cb1Value = cb1(num); //return value of cb1(num) is stored in cb1value
    return cb1Value;
}

//what will this print out?
console.log(higherOrderFunction(10, subtract1)) 
//higherOrderFunction is the function that invokes the subtract1 function and gives it the number '10' in this case


// //what will this print out?
console.log(higherOrderFunction(10, multiplyBy10))
