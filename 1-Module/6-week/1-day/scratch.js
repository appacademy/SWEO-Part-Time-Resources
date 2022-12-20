// Asynchronous JavaScript
// Event Loop includes the Callstack and Message Queue

// Callstack - how javascript keeps track of the current task in progress
// Message Queue
// how javascript keeps track of all the tasks
// Callstack is - Last In First Out
// Message Queue is - First In First Out
// Enqueueing => Pushing
// Dequeuing  => Popping

function somethingSlow() {
  console.log('slow')
  // 4000 ms to return
}
// function foo() {
//   console.log('foo')
// }
// function bar() {
//   console.log('bar')
//   baz()
// }
// function baz() {
//   console.log('baz');
// }

// setTimeout(foo, 1500);
// setTimeout(bar, 1000);
// somethingSlow();

//0ms - enqueue foo
//    - enqueue bar
//start somethingSlow in the callstack(4000)
//1000ms - bar is ready to run (at the front of the line)
//1500ms - foo is ready to run
//4000ms - somethingSlow finishes and pops off the callstack
//       - bar starrts
//         adds a stackframe for baz
//         baz pops, the bar pops
//4002ms - foo starts
//       - foo pops

// console.log('one');
// foo()
// console.log('two');

// console.log('start');
// setTimeout( function() {
//   console.log('Time Is Up');
// }, 0);
// setTimeout( function() {
//   console.log('No for real, frfr');
// }, 1);
// console.log('end');

// setTimeout(callback, delay in milliseconds, arg1, arg2, ...)
function food(food1, food2) {
  console.log(`${food1} for breakfast.`)
  console.log(`${food2} for lunch.`)
}
let foods = ['pancake', 'beef bacon', 'cereal']

// let res = setTimeout(food, 10000, ...foods);
// console.log(res);
// clearTimeout(res);

let getTime = (time) => {
  let res = setTimeout(() => {
    console.log(time);
  }, time);

  if (time > 10000) {
    clearTimeout(res)
  }
}

// getTime(1000);
// getTime(2000);
// getTime(50000000);

let int = setInterval(food, 5000, 'mangos', 'fish sandwich');
clearInterval(int);
let countTimes = (time) => {
  let count = 0;

  let int = setInterval(function food(food1, food2) {
    console.log(`${food1} for breakfast.`)
    console.log(`${food2} for lunch.`)
    count++;
    if (count === 3) {
      clearInterval(int);
    }
  }, time, 'mangos', 'fish sandwich');
}
// countTimes(1000);

setTimeout( () => {
  console.log( 'Time is Up')
}, (30*60*1000));