console.log("--------------- setInterval ---------------------------");
//similar to setTimeout, but adds the callback to the message queue between 
// each delay to be evaluated

//TLDR: just gona run the callback after each delay infinitely unless we clear 
// the setInterval obj.

console.log("--------------- Problem 1 ---------------------------");

/* START

const foo = (a, b) => {
    console.log('time is up');
    console.log(`${a} ${b}`);
}

setInterval(foo, 1000, 'potato', 'tomato');

END */

// As we see that there's no way to stop, no end, it's gona keep going!


// The above doesn't serve us too much purpose, so instead, 
// we'll clear the interval from the callback once a condition is met

console.log("--------------- ClearInterval ---------------------------");

/* START

const countIntFunc = (count, delay) => {
    //at each delay, setInterval is executing the anonymous callback which decreases count by 1 each time. 

    const intervalObj = setInterval(() => { //anonymous wrapper
        console.log('Time to clear is', count, 'seconds');
        count--;

        if (count === 0) { //we the have a condition here for when count is 0 on the final call, it will execute the clearInterval object (clearing itself)
            clearInterval(intervalObj);
        }
    }, delay);

}

countIntFunc(7, 1000);

END */