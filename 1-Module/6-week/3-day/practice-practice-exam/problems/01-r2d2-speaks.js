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

//problem neeeds needs to be solved recursively!
//hint setTimeout can take in a function (try r2d2, itself :p)

function r2d2Speaks(code) {
    //base case: when code is empty, then stop the execution of r2d2Speaks
    if(code.length === 0){
        return; //this stops the continuation of recursive calls because there's nothing left inside code array
    }

    //1) get the front element, then handle the 2 main cases 
    const front = code.shift(); //recursive step, remove the front element in code and placing in the front variable. //i.e. 0

    //handle case where front is 0
    if(front === 0){
        console.log("beep");
        setTimeout(r2d2Speaks, 400, code) //call setTimeout on r2d2Speaks to process the setTimeout for the REST of the elements in code
    }

    //handle case where front is 1
    else if(front === 1){
        console.log("boop"); //print first
        setTimeout(r2d2Speaks, 800, code); //then pause, then evaluate the REST of the items in code array.
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