console.log("------------what is the time complexity - Big O of the following function------------")

//hints are at the bottom

const copyAndAdd = function(array){
    const arrayNums = [];
    //gets front element each time, remove it, if its a number push it to arrayNums
    while(array.length > 0){
        const ele = array.shift();
        if(typeof ele === 'number'){
            arrayNums.push(ele); //Can assume that .push is O(1) in this situation
        }
    }
    
    let total = 0;
    for(let i=0; i<arrayNums.length; i++){
        const num = arrayNums[i];
        total += num;
    }
    return total;
}


const arrayOne = [1,2,3,"hello","wow", 5] //11
const arrayTwo = ["Hi",10,10,"hello","wow", 10] //30

console.log(copyAndAdd(arrayOne))
console.log(copyAndAdd(arrayTwo))


// hint: what happens when we have O(n) time complexity inside of another O(n) time complexity block of code?

// hint: what happens if there are two loops but they are not inside of the other, but running after?

// hint: if we are adding multiple terms, do we care about all of them or just the biggest one? (big-o simplification)