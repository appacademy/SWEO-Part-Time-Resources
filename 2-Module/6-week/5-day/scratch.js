const numbers1 = [3, 1, 4, 1, 5];
const numbers2 = [3, 1, 4, 1, 5];
const sorted1 = numbers1.sort((a, b) => a - b); //least to greatest
const sorted2 = numbers2.sort((a, b) => b - a); //greatest to least


console.log(sorted1)
console.log(sorted2)
