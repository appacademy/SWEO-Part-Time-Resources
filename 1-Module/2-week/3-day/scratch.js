let nums = [2, 4, 6, 5, 7];

function triple(number) {
    return number * 3;
}


function triplesArray(arr) {
    let tripledArr = [];

    for (let i = 0; i < arr.length; i++) {
        tripledArr.push(triple(arr[i]))
    }
    return tripledArr;
}

console.log(triplesArray(nums))

//SRP - Single Responsibilty Principle
// As often as we possibly can, we should write code that only has one job
