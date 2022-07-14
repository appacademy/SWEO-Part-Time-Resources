
//returns true if number is divisible by 5 (no remainders), false otherwise
const divisibleBy5 = (num) => {
    return num % 5 === 0;
}

const matrix = [
    [101, 12, 199],
    [111, -7, 112],
    [55, 25, 13],
    [-5, -5, 25]
];


//prompt: implement the matrixIsValid func, traverse through the 2d matrix, find if any of the element is divisibleBy5.

//our task is to find a single VALID number that is divisible by 5. if no VALID number are found after checking every element, return false by default at the end. Think Rows and Columns.

//******your code here */
const matrixIsValid = function(matrix){
    
}


console.log(matrixIsValid(matrix)); //true

const matrix2 = [
    [101, 12, 199],
    [111, -7, 112],
    [1, 1, 13],
    [-1, -1, 1]
];

console.log(matrixIsValid(matrix2)); //false