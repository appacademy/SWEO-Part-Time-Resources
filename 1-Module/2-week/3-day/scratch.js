
let nums = [2, 4, 6, 5, 7]

function multiThree(num) {
    return num * 3;
}

let tripleArray = function(array) {
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        let num = array[i];
        resultArray.push(multiThree(num));
    }
    return resultArray;
}

console.log(multiThree(456))

console.log(tripleArray(nums))


//SRP - Single Responsibility Principle
// Functions or blocks code should PREFERABLY have ONE job

