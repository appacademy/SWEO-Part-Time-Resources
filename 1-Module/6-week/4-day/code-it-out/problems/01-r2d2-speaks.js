/*
    Write a RECURSIVE function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.
    
    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/
//hint setTimeout can take in a callback - what if you passed r2d2 to it?

//do this recursively
function r2d2Speaks(code) {
    //base case, if array code reaches length of 0, we've reach stopping point, no more recursion
    if(code.length === 0){
        return;
    }

    //recursive step to get first element and remove it from code
    const first = code.shift();

    if(first === 0){
        console.log("beep");
        setTimeout(r2d2Speaks, 400, code); //code being passed in as argument
    }
    else{
        console.log("boop");
        setTimeout(r2d2Speaks, 800, code); //code being passed in as argument
    }

}

let code = [0, 1];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}