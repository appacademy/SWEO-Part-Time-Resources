function maxInCol(matrix, col){

}

function minInRow(row){
  let min = row[0];

  for(let i = 1; i < row.length; i++){
    let ele = row[i];

    if(ele < min){
      min = ele;
    }
  }

  return min;
}

function luckyNumbers(matrix){

}


let matrix1 = [
  [5, 9, 21], //0
  [9, 19, 6], //1
  [12, 14, 15], //2
];


console.log(minInRow(matrix1[0]))

// console.log(luckyNumbers(matrix1)); // [12]

let matrix2 = [
  [5, 10, 8, 6],
  [10, 2, 7, 9],
  [21, 15, 19, 10],
];

// console.log(luckyNumbers(matrix2)); // [10]
