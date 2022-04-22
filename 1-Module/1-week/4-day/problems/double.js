function doubler(numbers) {
    //-------understanding the problem: -------
    //wants us to take numbers, 
    //multiply each item inside numbers by 2, then provide the result
    
    //-------plan in english / pseudo code--------
    //1) new arr = we will need a new array to store the new changes
    //2) iterate over the original numbers array, and for each num
    //3) new num = multiply each old num by two
    //4) new arr = new arr combine with new num
    //5) at the end, return the new arr
    let newArr = [];
    for(let i=0; i<numbers.length; i++){
      let oldNum = numbers[i];
        let newNum = oldNum * 2;
      newArr = newArr.concat(newNum);
      
    }
    return newArr;   
  }
  
  console.log(doubler([1, 2, 3, 4])); // => [2, 4, 6, 8]
  console.log(doubler([7, 1, 8])); // => [14, 2, 16]