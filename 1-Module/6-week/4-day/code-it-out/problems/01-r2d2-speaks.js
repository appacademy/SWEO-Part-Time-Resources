/*
    Write a RECURSIVE function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.
    
    let code = [0, 1];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms

*/
//hint setTimeout can take in a callback - what if you passed r2d2 to it?

//do this recursively
function r2d2Speaks(code) {
     //base case where code array is empty, then we stop recursing and return 
     if(code.length === 0 ){
        return; //stop recursing, just end the call
     }

     //recursive step and logic to print the front element of the array
     const frontEl = code.shift(); // frontEl = 0 // [0,1] --> [1] 
     
     //handle cases where the frontEl is 1 or is 0
     if(frontEl === 0){
         console.log("beep");
         //after logging "beep", pause for 400ms, and then repeat the recursive process for the rest of the elements
         setTimeout(r2d2Speaks, 400, code);
     }
     else{ //else if frontEl === 1
         console.log("boop");
         //do the same thing
         setTimeout(r2d2Speaks, 800, code)
     }
     
     //nothing left to run
}


let code = [0, 1];
r2d2Speaks(code);

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = r2d2Speaks;
} catch (e) {
    module.exports = null;
}