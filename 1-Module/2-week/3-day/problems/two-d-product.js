//1. define the function
let twoDimensionalProduct = function(array){
    let product = 1;
    //first for loop will go over the rows inside the outer array.
    for(let i=0; i<array.length; i++){
        let subArr = array[i];
  
      // console.log("subArr", subArr);
      // console.log("---outer forloop----");
      //second for loop will go through the columns in each row.
      for(let j=0; j<subArr.length; j++){
          let number = subArr[j];
            // console.log(number);
            product = number * product; //reasign product with old product * number
      }
    }
    return product;
  }
  
  
  
  
  
  let arr1 = [
      [6, 4],
      [5],
      [3, 1]
  ];
  console.log(twoDimensionalProduct(arr1)); // 360
  
  let arr2 = [
      [11, 4],
      [2]
  ];
  console.log(twoDimensionalProduct(arr2)); // 88