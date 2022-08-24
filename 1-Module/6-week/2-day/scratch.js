// // Sync
// console.log('one');
// console.log('two');
// console.log('three');

//Sync
// const foo = () => {
//   console.log('two');
// }

// console.log('one');
// foo();
// console.log('three');

//Async
// console.log('one');

// setTimeout(() => {
//     console.log('two2')
// }, 0)

// setTimeout(() => {
//   console.log('two');
// }, 1000);


// console.log('three');

// setTimeout

// setTimeout(() => {
//   console.log('the time is up')
// }, 1000);

// console.log('end');

// const test = (a, b) => {
//   console.log("time is up");
//   console.log(`${a} ${b}`);
// };

// let timeoutObj = setTimeout(test, 0, "hello", "world");

// console.log(timeoutObj)

// clearInterval(timeoutObj);

//setInterval

const test = (a, b) => {
  console.log("time is up");
  console.log(`${a} ${b}`);
};

// setInterval(test, 1000, "hello", "world");
// let timeoutObj = setInterval(test, 1000, "hello", "world");

// setTimeout(() => {
//     clearInterval(timeoutObj);
// }, 5000)


const wrapperFunc = (count, delay) => {

  const intervalObj = setInterval(() => {
    console.log('interval');
    count--;
    if(count === 0){
      console.log('end');
      clearInterval(intervalObj);
    }
  }, delay)

}

wrapperFunc(10, 1000);
