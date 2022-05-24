console.log("--------------- setInterval ---------------------------");
//similar to setTimeout, but adds the callback to the message queue between each delay to be evaluated

console.log("--------------- Problem 1 ---------------------------");
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// setInterval(foo, 1000, 'potato', 'tomato');

// however we see that there's no way to stop, no end, it's gona keep going!

console.log("--------------- Problem 2 ---------------------------");
//we can clear the setInterval immediately by putting the result of the setInterval (which is an object) and passing it to the global function `clearInterval` which will clear out the setInterval.
const foo2 = (a, b) => {
    console.log('time is up');
    console.log(`${a} ${b}`);
}

const interval = setInterval(foo2, 1000, 'potato', 'tomato');
// console.log(interval);
clearInterval(interval); //if we run this right after, it immediately clears the message queue of all the items from setInterval

//however, the above doesn't serve us too much purpose, so instead, 
//we'll clear the interval from the callback once a condition is met
console.log("--------------- Problem 3 ---------------------------");
const countIntFunc = (count, delay) => {
    //at each delay, setInterval is executing the anonymous callback which decreases count by 1 each time. 
    const intervalObj = setInterval(() => { 
        console.log('time is up');
        count--;

        if (count === 0) { //we the have a condition here for when count is 0 on the final call, it will execute the clearInterval object (clearing itself)
            clearInterval(intervalObj);
        }
    }, delay);

}

countIntFunc(3, 500);

console.log("--------------- Problem 4 ---------------------------");
const intervalCount2 = (count, delay) => {
    const intervalObj = setInterval(() => {
        console.log('time is up');
        count--;

        if (count === 0) {
            clearInterval(intervalObj);
        }
    }, delay);
}

intervalCount2(3, 1000);


// //what will happen first? fibonacci(45) or the setInterval
let fibonacci = (term) => {
    //base cases
    if (term === 0) return 0;
    if (term === 1) return 1;
    if (term === 2) return 1;

    //recursive case + recursive step
    let answer = fibonacci(term - 1) + fibonacci(term - 2);
    // console.log(answer);
    return answer;
}
console.log(fibonacci(45));
