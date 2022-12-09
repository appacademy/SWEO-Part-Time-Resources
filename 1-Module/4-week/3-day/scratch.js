// Scope => Global, Local or Function, Block, Lexical
// What is scope? The Set of variables available for use within a program
//Global Scope
let gVar = 'global';


const func = () => { //Local or Function
  gVar = 'local';

  console.log('Inside Function:', gVar )
  if ( true ) { // Block
    let bVar = 'block'
    console.log('Inside Block:', gVar);
  }
  
}

// func();
// console.log( gVar );

// var => function scoped
// let/const => block scoped


let func2 = () => {
  // var trash;
  if ( true ) {
    console.log( trash );
    console.log( car );
    let car = 'honda'
    var trash = 'soda can'
  }
  console.log( trash );
}

// func2();

let person = 'Rae';

function sayHello() {
  let person = 'Jeff';

  function greet() {
    console.log( 'Hi, ' + person + '!');
  }

  greet();
}

// sayHello();


// Closures
// What is a closure? => "A closure is the combination of a function and the lexical environment within which that function was declared."

function climbTree( treeType ) {
  let treeString = 'You climbed a ';

  function sayClimbTree() {
    return treeString + treeType;
  }

  return sayClimbTree();
}

const sayFunction = climbTree('Pine');
console.log( sayFunction );

function makeAdder( x ) {
  // return function( y ) {
  //   return x + y;
  // }
  // return ( y ) => x + y
  let addFunction = (y) => {
    return x + y;
  }

  return addFunction;
}


const add5 = makeAdder( 5 );
const add2 = makeAdder( 2 );
// console.log( add5 );
// console.log( add5(2) ); //7
// console.log( add2(6) ); //8

function elephantCollector() {
  const elephants = ['Dumbo'];

  return function( name ) {
    elephants.push( name );
    return elephants;
  }
}

const elephantParade2 = elephantCollector();
const elephantParade = elephantCollector();
elephantParade('Sandy');
elephantParade('Augi');
console.log( elephantParade('Raena') );
console.log( elephantParade2('Raena') );
