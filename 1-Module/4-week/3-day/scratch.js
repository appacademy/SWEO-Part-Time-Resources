// scope
// global scope
// let animal = 'cow';

// local scope (function scope)

const theAnimal = function(){ // local or function scope
  var animal = 'dog';
  // block scope
  if (true){
    var animal = 'pig';
    console.log('in the block scope', animal)
    
  }
  console.log('in the function scope', animal)
}

theAnimal();
// console.log('in the global scope', animal);



// how they all work together
// can we 'let' the same variable more than 
// once in the same scope?
