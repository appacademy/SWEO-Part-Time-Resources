console.log("------------what is the time complexity - Big O of the following function------------")

//hints are at the bottom

const copyAndAdd = function(array){
    const arrayNums = [];
    //gets front element each time, remove it, if its a number push it to arrayNums
    while(array.length > 0){ //array length changes as input changes O(n). As our input size gets bigger, our while loop has to perform n number of operations
        const ele = array.shift(); //expensive operation. Cuts off front and change the index and memory of the element therefore it's an O(n) operation
        if(typeof ele === 'number'){
            arrayNums.push(ele); //Can assume that .push is O(1) in this situation
        }
    } //nested O(n) inside another O(n) this operation becomes O(n^2)
    

    let total = 0;
    for(let i=0; i<arrayNums.length; i++){ // is O(n) because arrayNums grow with the input
        const num = arrayNums[i];
        total += num;
    } 
    return total;


    //O(n^2) + O(n) --> simplifies down to taking the bigger of the two --> O(n^2)

    //Time complexity: O(n^2);
    //Space Complexity: O(n); //space grows n times in correlation to n inputs
}




const arrayOne = [1,2,3,"hello","wow", 5] //11
const arrayTwo = ["Hi",10,10,"hello","wow", 10] //30
const arrayThree = [10,10,10,10] //30

console.log(copyAndAdd(arrayOne))
console.log(copyAndAdd(arrayTwo))
console.log(copyAndAdd(arrayThree))


// hint: what happens when we have O(n) time complexity inside of another O(n) time complexity block of code?

// hint: what happens if there are two loops but they are not inside of the other, but running after?

// hint: if we are adding multiple terms, do we care about all of them or just the biggest one? (big-o simplification)