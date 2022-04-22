function threeOrSeven(num) {
    if(num % 3 === 0){//if it's divisible by 3
        console.log("WE HIT 3");
      return true
    }
    else if(num % 7 === 0){ //if it's divisible by 7 //21 % 7 has no remainder
      console.log("WE HIT 7");
        return true
    }
    else{
        return false;
    }
  }
  
  function threeOrSeven(num) {
    let resultFromExpression = (num % 3 === 0 || num % 7 === 0); // it's divisible by 3 || divisible by 7 // evals to boolean value result
    return resultFromExpression;
  }
  
  console.log(threeOrSeven(3));   // => true
  console.log(threeOrSeven(42));  // => true
  console.log(threeOrSeven(8));   // => false
  console.log(threeOrSeven(21));   // => true // 21 is divisible by 3 and 7, however condition to check for 3 comes first. everything else will not be executed.
  console.log(threeOrSeven(14));  //tre