/*
All the marbles:

    Write a function that takes in any number of marble objects and returns the total weight of all marbles.
    Marble objects are structured as the following:
    
    const marble1 = { color: 'red', weight: 20 };
    const marble2 = { color: 'purple', weight: 100 };
    const marble3 = { color: 'blue', weight: 40 };

    console.log(allTheMarbles(marble1, marble2)) // prints 120;
    console.log(allTheMarbles(marble1, marble2, marble3)) // prints 160;
    console.log(allTheMarbles()) // prints 0;
*/

//takes in an arbitrary amount of arguments (we need rest! take in all the args and puts them in a single array)
const allTheMarbles = (...marblesArr) => {
    //create a result counter to keep track of the total weight
    let totalWeight = 0;
    //iterate through the marblesArr to get each obj
    for(let i=0; i<marblesArr.length; i++){
        //get current object into a variable
        const marbleObj = marblesArr[i];
        // console.log(marbleObj); //i.e. { color: 'red', weight: 20 }

        //grab the weight and put it into a variable
        const marbleWeight = marbleObj["weight"];
        //update totalWeight by adding the new marbleWeight
        totalWeight += marbleWeight;
    }
    return totalWeight
}

const marble1 = { color: 'red', weight: 20 };
const marble2 = { color: 'purple', weight: 100 };
const marble3 = { color: 'blue', weight: 40 };

console.log(allTheMarbles(marble1, marble2)) // prints 120;

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = allTheMarbles;
} catch (e) {
    module.exports = null;
}