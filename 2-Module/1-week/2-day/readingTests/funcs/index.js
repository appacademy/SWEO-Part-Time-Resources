function isFive(num){
    return num === 5;
}

function isOdd(num){
    if (typeof num !== "number") throw new Error("THAT'S NOT A NUMBER!")
    return num % 2 !== 0;
}

function myRange(min, max, step=1){
    const range = [];
    while (min <= max){
        range.push(min)
        min += step;
    }
    return range;
}

module.exports = {
    isFive,
    isOdd,
    myRange,
}