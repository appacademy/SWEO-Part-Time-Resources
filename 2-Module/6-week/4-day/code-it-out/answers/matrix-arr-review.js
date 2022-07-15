
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


//prompt: implement the matrixIsValid func, traverse through the 2d matrix, find if any of the element is divisibleBy5, return true. After traversing all the elements, if nothing was divisibleBy5, default to return false.

//our task is to find a single VALID number that is divisible by 5. if no VALID number are found after checking every element, return false by default at the end. Think Rows and Columns.

//******your code here */
const matrixIsValid = function(matrix){
    for(let row=0; row<matrix.length; row++){
        const subArr = matrix[row]; //i.e. if row = 0, subArr = [101, 12, 199]
        for(let col = 0; col <subArr.length; col++){ //this work too: col < matrix[row][col].length
            let currentEl = subArr[col]; //this works: matrix[row][col]
            if(divisibleBy5(currentEl)){
                return true;
            }
        }
    }
    //default to false if we traversed through everything and we got no true!
    return false;
}


console.log(matrixIsValid(matrix)); //true

const matrix2 = [
    [101, 12, 199],
    [111, -7, 112],
    [1, 1, 13],
    [-1, -1, 1]
];

console.log(matrixIsValid(matrix2)); //false

console.log("-----------------------Problem 2--------------------------")
//What happens if we tried something like this:
console.log(matrix2[-1]) //give us `undefined`
console.log(matrix2[10]) //give us `undefined` because there are only up to 4 indices (0-3)

let element = matrix2[-1][0]; //first: matrix2[-1] ---> matrix2[-1] = undefined; therefore we are trying to do this: undefined[0] --> give us type error!!!
console.log(element); //uncomment 

//your answer, and why:
/*
Type error, we are trying to access undefined[0] which will give us that error since we cannot index into "undefined". It's actually not because we are indexing into -1, but instead the result of indexing into -1


*/