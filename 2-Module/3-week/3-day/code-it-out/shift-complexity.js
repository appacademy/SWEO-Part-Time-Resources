console.log("------------what is the time complexity - Big O of the following function------------")

//hints are at the bottom

const copyAndAdd = function(array){
    const arrayNums = []; //O(1) time, but O(n) linear space
    //gets front element each time, remove it, if its a number push it to arrayNums
    while(array.length > 0){ //while loop creates ~n number of operations based on n number of inputs // while loop is O(n)

        //using pop() would be more ideal cause we are not reassignment all the element's index and location in memory.
        const ele = array.shift(); //shift is an expensive operation that costs us O(n) time complexity. //shift will take out the front and change the rest of the element's position in memory / index therefore the time complexity correlates to the number of inputs in the array. //O(n) 
        if(typeof ele === 'number'){
            arrayNums.push(ele); //Can assume that .push is O(1) in this situation
        }
    } //the while loop + the content within it yield us O(n * n) --> O(n^2)    

 
    let total = 0; 
    for(let i=0; i<arrayNums.length; i++){    //O(n), this arrayNums grow as our original array increases in size for the worst case situation.
        const num = arrayNums[i];
        total += num;
    }
    return total;
}

//time complexity = O(n) + O(n^2) + any constant time complexity --> O(n^2)
//space complexity = O(n)


const arrayOne = [1,2,3,"hello","wow", 5] //11
const arrayTwo = ["Hi",10,10,"hello","wow", 10] //30
const arrayThree= [10,10, 100] //120

console.log(copyAndAdd(arrayOne))
console.log(copyAndAdd(arrayTwo))
console.log(copyAndAdd(arrayThree))


// hint: what happens when we have O(n) time complexity inside of another O(n) time complexity block of code?

// hint: what happens if there are two loops but they are not inside of the other, but running after?

// hint: if we are adding multiple terms, do we care about all of them or just the biggest one? (big-o simplification)