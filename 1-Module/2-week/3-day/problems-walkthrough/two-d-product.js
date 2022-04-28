//1. define our function twoDimensionalProduct
let twoDimensionalProduct = function(array){
    //2. create variable called total that keeps track of all numbers multiplied to it
    let total = 1; //not 0, because any num multiplied to 0 will be 0.
    
    //3. iterate through the outer array and 
    for(let i=0; i<array.length; i++){
      //4. initial the subArray within the outer array.
        let subArray = array[i]; //ex: @i=0, subArray = [6,4]
        //5. iterate through the subArray
        for(let j=0; j<subArray.length; j++){
          let num = subArray[j]; //@j=0 --> 6
            //6. since we have the value, we want to multiply it to total
            total *= num;
      }
  }

    //7. at the end, return the total after multiplying all the numbers
    return total;

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