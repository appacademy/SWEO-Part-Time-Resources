

// const callbackHell = () => {
//     setTimeout(() => {
//       console.log("It's been 1 seconds");
//       setTimeout(() => {
//         console.log("It's been 2 seconds");
//         setTimeout(() => {
//           console.log("It's been 5 seconds");
//         }, 3000);
//       }, 1000);
//     }, 0010);
//   };
//   callbackHell();

//   const wait = (seconds) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve();
//       }, seconds * 1000);
//     });
//   };

//   wait(1)
//     .then(() => console.log("It's been 1 second"))
//     .then(() => wait(1))
//     .then(() => console.log("It's been 2 seconds"))
//     .then(() => wait(3))
//     .then(() => console.log("It's been 5 seconds"));

    //   add5AfterPause(0).then((resolve) => console.log(resolve)); // 5


    //     add5AfterPause(0)
    //     .then((nextNum) => add5AfterPause(nextNum))
    //     .then((finalNum) => console.log(finalNum)); // 10


    // const add5AfterPause = (num) => {
    //     return new Promise((resolve) => {
    //       setTimeout(() => {
    //         resolve(num + 5);
    //       }, 1000);
    //     });
    //   };


//         add5AfterPause(0)
//   // returns 5
//   .then((nextNum) => add5AfterPause(nextNum))
//   // nextNum = 5, returns 10
//   .then((sum) => console.log(sum))
//   // sum = 10, console.log() doesn't return anything (undefined)
//   .then((anotherNum) => add5AfterPause(anotherNum))
//   // anotherNum = undefined, returns NaN (undefined + 5 = NaN)
//   .then((thisWontWork) => console.log(thisWontWork)); // NaN

//   add5AfterPause(0)
//   .then((nextNum) => add5AfterPause(nextNum))
//   .then((sum) => {
//     console.log(sum); // 10
//     return sum;
//   })
//   .then((anotherNum) => add5AfterPause(anotherNum))
//   .then((thisWontWork) => console.log(thisWontWork));


  const add5AfterPause = (num) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        //! Comment out one of these to compare

        resolve();
        // this prints because resolve does not end function execution
        console.log('done stretching');

        //! Comment out one of these to compare
        // this would not pass 100 to our .then()

      }, 1000);
    });
  };

  add5AfterPause(0) // After resolve
    .then((res) => add5AfterPause(res)) // After resolve
    .catch((msg) => console.log(msg))
    // .then((sum) => console.log(sum)); // 10
