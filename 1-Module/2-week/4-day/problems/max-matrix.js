function maxInMatrix(matrix) {
    let biggestNumber = -Infinity; //intial set to the smallest number possible
    //iterate through matrix to get subArrs
    for(let i=0; i<matrix.length; i++){
        let subArray = matrix[i];
      // console.log("sub-arr", subArray)
      for(let j=0; j<subArray.length; j++){
          let number = subArray[j];
            // console.log("number in sub array: ", number);
            //if current number we are looking at is bigger than biggestNumber, replace it.
            if(number > biggestNumber){
              biggestNumber = number;
          }
      }
    }
    return biggestNumber;
  }
  
  
  matrix = [[11,  2,-99],
            [20, 19, 10],
            [47, 72, 56]]
  
  console.log(maxInMatrix(matrix)); // 72
  