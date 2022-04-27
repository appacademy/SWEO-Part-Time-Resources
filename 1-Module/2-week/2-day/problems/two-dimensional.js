let twoDimensionalSum = function(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        let subArray = arr[i];
      for(let j=0; j<subArray.length; j++){
          sum += subArray[j];
      }	
    }
    return sum;
  }
  
  
  
  let arr1 = [
      [1, 3],
      [-4, 7, 10],
      [2]
  ];
  console.log(twoDimensionalSum(arr1)); // 19
  
  let arr2 = [
      [],
      [3, 1, 2],
  ];
  console.log(twoDimensionalSum(arr2)); // 6