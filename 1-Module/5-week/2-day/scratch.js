// The CallStack
// function foo() {
//   console.log('a')
//   bar();
//   baz();
//   console.log('e')
// }
// function bar() {
//   console.log('b')
//   baz();
//   console.log('d')
// }
// function baz() {
//   console.log('c')
// }

// foo();

// Recursion => function calls itself within itself
// Base Case = The conditions to stop recursing
// Recursive Case = The condition to continue/start recursing
// Recursive Step = The step you are taking to reach your base case

// function echo( word ) {
//   if ( word.length > 1 ) {
//     console.log( word.toUpperCase() )
//     let response = echo( word.slice(1) )

//     console.log(response);
//     return word;
//   } else {
//     console.log( word.toUpperCase() );
//     return word;
//   }
// }

// echo('wody');

function drinkWater( bottle ) {
  if (bottle.water > 0) {
    exercise( { water: bottle.water - 1 } );
  } else {
    console.log( 'Whew! Good Workout. ');
    return;
  }
}

function exercise( bottle ) {
  console.log( 'Just a few more reps!' );
  drinkWater( bottle );
};

exercise({water: 5});
