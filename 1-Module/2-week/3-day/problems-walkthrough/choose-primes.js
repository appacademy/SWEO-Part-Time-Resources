// create helper function called isPrime that 
// will give us true if the number is prime, false otherwise
let isPrime = function(number){
    //edge case for anything less than 2, 
    if(number < 2){
      //it's not a prime number, return false
      return false
    }
    //13 is a prime number
    //is 13 divisible by these numbers: 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12?
    //if it's divisbily by those numbers above, then return false b/c not prime number
    for(let i=2; i<number; i++){
        if(number % i === 0){
          return false;
      }
    }
      
    //default to return true, if we can't find evidence that the number is not prime
    return true //it's a prime number.
  }
  
  
  //input: [36, 48, 9, 13, 19]  //all numbers
  //output: [ 13, 19 ] //only the prime numbers
  
  //1. define choosePrimes
  let choosePrimes = function(nums){
    //2. isPrimeArr = create the array that contains only prime numbers
    let isPrimeArr = []; //contains only prime numbers
    //3. iterate over nums
    for(let i=0; i<nums.length; i++){
        //4. currentNum = initialize and access the number inside
      let currentNum = nums[i];
      //5. if currentNum is prime
      //5.5 create a helper called isPrime, that well return true if number is prime, false otherwise
      if(isPrime(currentNum)){
        //6. if isPrime(currentNum) yields true: then add it to the isPrimeArr.
        isPrimeArr.push(currentNum);
      }
    }
    return isPrimeArr;
  }
  
  
  
  
  console.log(choosePrimes([36, 48, 9, 13, 19])); // [ 13, 19 ]
  console.log(choosePrimes([5, 6, 4, 11, 2017])); // [ 5, 11, 2017 ]