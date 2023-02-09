/* Bonus: Currying

    Write a `myCurry(func, numArgs)` method that returns a function that
    collects arguments until the number of arguments collected is equal
    to the original `numArgs` value and then invokes the curried function.

    The returned function collects arguments and returns the same function,
    until the number of arguments is equal to the original numArgs value.
    
    See examples below:
    
    */
   
   function myCurry(func, numArgs) {
     let arr = []
    const innerFunc = (num) => {
      arr.push(num)
      if(arr.length === numArgs){
         return func(...arr)
      } else {
        return innerFunc
      }
     }
     return innerFunc
  }
  

  
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = myCurry;
} catch (e) {
  module.exports = null;
}
