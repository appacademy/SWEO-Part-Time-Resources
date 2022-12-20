//? The Event Loop
//* CallStack Review
// Keeps track of the current 'task' in progress by using Stack-Frames
// Pushing - Adding stack-frames to the CallStack
// Popping - Removing stack-frames from the Callstack
// LIFO / FILO - Last In, First Out / First In, Last Out
//* Message Queue
// Keeps track of 'tasks' that cannot be executed until the current task if finished.
// Enqueueing - Adding 'tasks' to the Message Queue
// Dequeueing - Removing 'tasks' from the Message Queue
// FIFO / LILO - First In, First Out / Last In, Last Out

//TODO Pseudo-code Example
/*
  function somethingSlow() {
    takes 4000ms
  }
  function foo() {
    console.log('foo');
  }
  function bar() {
    console.log('bar');
    baz();
  }
  function baz() {
    console.log('baz')
  }
 
  setTimeout(foo, 1500);
  setTimeout(bar, 1000);
  somethingSlow();

  0ms    - somethingSlow added to CallStack
         - foo start waiting
         - bar start waiting
  1000ms - bar is ready to run
  1500ms - foo is ready to run 
  4000ms - somethingslow Pops of the stack
           bar gets on the stack
  4001ms - bar finishes, foo gets on the stack
  4002ms - the stack and queue are empty

*/

//? Asynchronicity
//TODO Synchronous Examples
// console.log(1)
// console.log(2)
// console.log(3)
//TODO Asynchronous Examples
// console.log('start');
// setTimeout(() => {
//   console.log('time up')
// }, 0);
// setTimeout(() => {
//   console.log('for real, frfr');
// }, 0);
// console.log('end')

//? setInterval && setTimeout
// setTimeout
// ( callback, delay in milliseconds, arg1, arg2, ... );
function showFood(food1, food2) {
  console.log(`${food1} for breakfast`);
  console.log(`${food2} for lunch`);
}

// let res = setTimeout( showFood, 2000, 'pancakes');
// clearTimeout(res);

let func = (time) => {
  let count = 0;
  let res = setInterval((food1, food2) => {
    showFood(food1, food2);
    count++
    if (count === 3) {
      clearInterval(res);
    }
  }, time, 'pancakes', 'couscous');
}

// func(2000);