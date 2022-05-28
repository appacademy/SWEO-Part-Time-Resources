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

//do this recursively
function r2d2Speaks(code) {
    //base case to stop r2d2Speaks when we run out of cases
    if(code.length === 0) return;

    //part1: account for 2 cases
    // const frontEl = code[0];
    const frontEl = code.shift(); //i.e. 0 //recursive step + gives us front element

    //if 0, print beep, then pause 400ms, and then continue on to the rest
    if(frontEl === 0){
        console.log("beep");
        //setTimeout will recursive call r2d2Speaks for us on the rest of the items
        setTimeout(r2d2Speaks, 400, code); //code = [1,1,0] (note that 0 was removed by (code.shift() earlier)
    }

    //if 1, print boop, then pause for 800ms, and then contiue on with the rest
    else if(frontEl === 1){
        console.log("boop");
        setTimeout(r2d2Speaks, 800, code);
    }
}

let code = [0, 1, 1, 0];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}