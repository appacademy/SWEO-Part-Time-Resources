// --------------- Problem 1 ---------------------------
// const foo = (a, b) => {
//   let num = 0;
//   while (num < 9000000000) {
//     num++;
//   }
//   console.log('time is up');
//   console.log(`${a} ${b}`);
// };

// setInterval(foo, 1000, 'potato', 'tomato');

// --------------- Problem 2 ---------------------------
const foo = (a, b) => {
    console.log('time is up');
    console.log(`${a} ${b}`);
}

const interval = setInterval(foo, 1000, 'potato', 'tomato');
clearInterval(interval);

// --------------- Problem 3 ---------------------------
const intervalCount = (count, delay) => {
    const intervalObj = setInterval(() => {
        console.log('time is up');
        count--;

        if (count === 0) {
            clearInterval(intervalObj);
        }
    }, delay);
}

intervalCount(5, 2000);
