/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

function num1() {
    return 1;
}
async function num2() {
    return 2;
}

console.log('num1', num1());                //=> num1 1
console.log('num2', num2());                //=> num2 Promise { 2 }
num2().then(result => console.log(result))  //=> 2



/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function waiting() {
    const value = await num2();
    console.log('waiting', value);
}

waiting();  //=> waiting 2



/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

async function waitForMyPromise() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve('done!!!');
        }, 1000)
    });

    const result = await promise;
    console.log('my promise is', result);
}

waitForMyPromise(); //=> my promise is done!!!



/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

new Promise((resolve) => {
    setTimeout(() => {
        resolve('done!');
    }, 1500)
}).then(r => console.log('then my other promise is', r));

// Phase 3 and 4 should print in the following order:
    // my promise is done!!!
    // then my other promise is done!!!



/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function doStuff() {
  await wait(2000)
  console.log('The waiting is over!')
}

doStuff(); //=> The waiting is over!



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const tryRandomPromise = (random) => new Promise((resolve, reject) => {
    if (random > 0.5) {
        resolve('success!!!');
    } else {
        reject('random error');
    }
});

for (let i=1; i<10; i++) {
    const random = Math.random();
    wait(2000 + random*1000)
        .then(() => tryRandomPromise(random))
        .then(result => console.log('random try #', i, result))
        .catch(error => console.error('random try #', i, error));
}

// output can look something like this:
    // random try # 3 random error
    // random try # 8 random error
    // random try # 5 random error
    // random try # 1 random error
    // random try # 9 random error
    // random try # 6 success!!!
    // random try # 7 success!!!
    // random try # 2 success!!!
    // random try # 4 success!!!



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

const tryTryAgain = async (i) => {
    const random = Math.random();

    // no need for try-catch if there's no possibility of error (rarely happens)
    await wait(3000 + random*1000);

    // usually you need to wrap the await to gracefully handle the error
    try {
        const result = await tryRandomPromise(random);
        console.log('random again #', i, result);
    } catch (error) {
        console.error('random again #', i, error);
    }
};

for (let i=1; i<10; i++) {
    tryTryAgain(i);
}

// output can look something like this:
    // random again # 7 random error
    // random again # 2 random error
    // random again # 1 success!!!
    // random again # 6 success!!!
    // random again # 5 success!!!
    // random again # 8 success!!!
    // random again # 4 success!!!
    // random again # 9 success!!!
    // random again # 3 success!!!



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

console.log('END OF PROGRAM');