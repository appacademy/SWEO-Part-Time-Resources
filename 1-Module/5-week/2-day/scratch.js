// CallStack
// Adding an item ( Stack Frame) is called Pushing
// Removing an item is called Popping
// First In Last Out

// function foo() {
  // console.log('a');
  // bar();
  // console.log('e');
  // foo();
// }
// function bar() {
// console.log('b')
// baz();
// console.log('d')
// }
// function baz() {
// console.log('c')
// }

// foo();
// foo();

// Recursion => calling a function inside itself
  // Base Case => When do we want to stop recursing
  // Recursive Case => When do we want to recurse
  // Recursive Step => The step we take to get to our base case


// function echo( word ) {
//   if ( word.length > 1 ) {
//     console.log( word.toUpperCase() );
//     let response = echo( word.slice(1) );

//     console.log( response );
//     return word;
//   } else {
//     console.log( word.toUpperCase() );
//     return word;
//   }
// }

// let echoWord = echo('howdy');
// console.log(echoWord)


function exercise( bottle ) {
  console.log( 'Just a few more reps!');
  drinkWater( bottle );
}
function drinkWater( bottle ) {
  if ( bottle.water > 0 ) {
    exercise({water: bottle.water - 1});
  } else {
    console.log( 'Whew! Good workout!');
    return;
  }
}

exercise({water: 5});
