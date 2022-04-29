function maxColumn(matrix) {
    //how do we traverse columns first then rows?
    
    //how can we represent how many columns there are?
    let numberOfCols = matrix[0].length; //[ 5,  9, 21, 10].length --> gives 4 columns
    
    //how can we represent how many rows there are?
    let numberOfRows = matrix.length;
    
    //array to hold results at each column
    let result = [];
    
    //traverse the columns first, then rows
    //outer for loop gets paused
    for(let col=0; col<numberOfCols; col++){
      //biggestNumber at the current column
      let biggestNumberAtCol = -Infinity
      console.log("-----current col:-----", col);
      for(let row=0; row<numberOfRows; row++){
        //how do we acces / index into the number that we want?
        //matrix[row][col]
        let number = matrix[row][col] //5 //9 //12
        console.log("number in column:", number);
        if(number > biggestNumberAtCol){
            biggestNumberAtCol = number;
        }
      }
      result.push(biggestNumberAtCol);
    }
    return result;
  }
  
  
  matrix = [
    [ 5,  9, 21, 10],
    [ 9, 19,  6, 11],
    [12, 14, 15, 10]
  ]
  
  console.log(maxColumn(matrix)); // [12, 19, 21, 11]
  
  