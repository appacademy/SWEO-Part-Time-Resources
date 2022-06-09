// scope
// global scope

// local scope (function scope)

// block scope

// how they all work together
// can we 'let' the same variable more than 
// once in the same scope?

// let animal = 'cow';

function hello(){

  const animal = 'dog';

  if(true){
    let animal = 'pig'
    console.log('in the block scope', animal)
  }
  
  console.log('in the function scope', animal);
}


hello();
// console.log('in the global scope', animal);