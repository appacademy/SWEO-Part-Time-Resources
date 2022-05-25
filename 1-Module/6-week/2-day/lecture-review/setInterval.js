console.log("--------------- setInterval ---------------------------");
//similar to setTimeout, but adds the callback to the message queue between each delay to be evaluated

//TLDR: just gona run the callback after each delay infinitely unless we clear the setInterval obj.

console.log("--------------- Problem 1 ---------------------------");
// const foo = (a, b) => {
//     console.log('time is up');
//     console.log(`${a} ${b}`);
// }

// setInterval(foo, 1000, 'potato', 'tomato');

// // however we see that there's no way to stop, no end, it's gona keep going!


//however, the above doesn't serve us too much purpose, so instead, 
//we'll clear the interval from the callback once a condition is met

console.log("--------------- Clear setInterval ---------------------------");
const countIntFunc = (count, delay) => {
    //at each delay, setInterval is executing the anonymous callback which decreases count by 1 each time. 

    const intervalObj = setInterval(() => { //anonymous wrapper
        console.log('time is up');
        count--;

        if (count === 0) { //we the have a condition here for when count is 0 on the final call, it will execute the clearInterval object (clearing itself)
            clearInterval(intervalObj);
        }
    }, delay);

}

countIntFunc(2, 500);