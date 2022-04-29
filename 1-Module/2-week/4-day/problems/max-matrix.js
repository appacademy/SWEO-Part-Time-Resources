function maxInMatrix(matrix) {
    let biggestNumber = matrix[0][0]; //by default 11 will be biggest number
    for(let i=0; i<matrix.length; i++){
        let subArrayRow = matrix[i]; //for i = 0 --> [11,  2,-99]
      console.log("---------subArrayRow:--------", subArrayRow);
      for(let j=0; j<subArrayRow.length; j++){
          let number = subArrayRow[j]; //j = 0; --> 11
            console.log("number:", number);
            if(number > biggestNumber){
            //replace the biggestNumber with new number
              biggestNumber = number;
          }
      }
    }
    return biggestNumber;
  }
  
  
  matrix = [
    [11,  2,-99],
    [20, 19, 10],
    [47, 72, 56]
  ]
  
  console.log(maxInMatrix(matrix)); // 72
  