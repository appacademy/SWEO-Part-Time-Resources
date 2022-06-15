console.log("----------What is the big O and time complexity?----------");
//Answer: describes our solution's general and its growth curve in regards to the amount of elements vs. the operations

//TLDR: the relationship or how fast does our operations grow / increases in comparison to the elements (n) used (#elements vs #operations)

//different types of time complexity that we've learned so far:
    // - constant: O(1)
            // - n number of inputs will yield a CONSTANT number of operation
            // even if our element / inputs grow, the number of operations will never grow (horizontal line)
    // - linear: O(n)
            // - n number of inputs/elements will yield n number of operations
    // - quadratic: O(n^2)
            // - n number of inputs will yield n^2 number of operations
    // - MORE TO COME LATER~!

//Check out this chart link!~ Chart link: https://www.bigocheatsheet.com/



//key concept in Big-O is that we are typically only concerned with the very large values  (n ---> number of elements that we input) ---> therefore we only care about the WORST case scenarios (iterating through an array of numbers and we tried to find the number 7 in there, the worst case is that we have to iterate through the whole array all the way down the end and the last element will yield us 7)


console.log("----------Determine the time complexity for each problem below:----------");
// 3 options:
//      - constant: O(1)
//      - linear: O(n)
//      - quadratic: O(n^2)


//What we should do first when determining time complexity: 
//      - Determine if there's a change in number of operations from 2 different input values
//      - array of 100 elements vs. array of 1,000,000 elements. Do the number of operations that the function does change for each one(i.e. for loop n times)? Or do they remain the same?


//space complexity: amount of extra space we use by performing the function with different inputs

console.log("----------Problem 0----------");

//time complexity: linear --> O(n)
//space complexity: O(n)

//number of elements vs. number of operations
function range(num) { //num --> 5
    let result = []; //constant operation --> 1
    for (let i = 0; i <= num; i++) { //operation of this for loop changes with the amount of input that gets added by num. So if num is 5. For loop will execute ~5 times, and if num is 10 --> for loop will execute ~10 times
        result.push(i); 
    }
    return result; //constant operation --> 1

    //1 + 1 + n --> O(n)
}
//n number of inputs (num) will yield n number of operations.

console.log(range(5));
console.log(range(10));
console.log(range(100));



console.log("----------Problem 1----------");
//time complexity: O(n + m) more specific (we choose the biggest variable either n or m)-->  O(n) --> linear time complexity
//space complexity: 
function addTwoNums(num1, num2) { //num1 = 1, num2  = 500
    let total = 0;


    for (let i = 0; i < num1; i++) {
        total += 1;

    } //10

    for (let i = 0; i < num2; i++) {
        total += 1;
    } //5

    return total;
}
console.log(addTwoNums(5, 6))

console.log("----------Problem 2----------");
//time complexity: O(n) --> linear time complexity
//space complexity: O(1)--> we are only mutating the input, not taking copy or creating extra space --> extra space we use. not the input space given.
function removeFirst(array) {
    array.shift(); //aren't we just doing 1 operation? removing the first element of the array?
    //everytime we remove the FRONT or FIRST element in the array, it will change the index of the rest of the elements in the array.
    //[0,1,2,3] --> if we take out 0, we have to execute an operation to change the index of 1 to be 0 now rather than 1 (original index). Same thing will happen for 2, 3, etc.
    //if we had 20 elements, we will have to shift and change the index for 20 elements. If we had 2000 elements we will have to change the index (operations) for 2000 elements.
    return array;
}

const arr = [1, 2, 3]
console.log(removeFirst(arr));


console.log("----------Problem 3----------");
//time complexity: O(1) 
//space complexity: 
function addFirstAndLast(nums) {

    const firstNum = nums[0]; //O(1)
    const lastNum = nums[nums.length - 1]; //O(1)

    return firstNum + lastNum; 
}

const twoNums = [1, 2];

const millionNums = [];
for (let i = 0; i < 1000000; i++) {
    millionNums.push(999999999999);
}

startTime2 = Date.now();
addFirstAndLast(twoNums); //takes in array of 2 elements --> 2 total operations (getting first and last)
endTime2 = Date.now();

startTime1m = Date.now();
addFirstAndLast(millionNums); //takes in array of 1million elements --> 2 total operations even if its 1million elements --> 2 total operations
endTime1m = Date.now();


console.log(`${endTime2  - startTime2 }ms`);   // 2ms
console.log(`${endTime1m - startTime1m}ms`);   // 1ms

console.log("----------Problem 4----------");
//time complexity: O(n number of arrays in array2d * m represents the number of elements in the subarrays) --> O(n * m) --> O(n^2) --> quadratic
//space complexity: O(1) we are just reassigning that space memory with a new value.
function sumTwoDArray(array2d){
    let total = 0;
    for(let i=0; i<array2d.length; i++){
        const subArr = array2d[i];
        for(let j=0; j<subArr.length; j++){
            const ele = subArr[j];
            total += ele;
        }
    }
    return total;
}
console.log(sumTwoDArray([[1,2,3,4,5,6], [3], [], [5,6,7,8,9,9]]))


console.log("----------Problem 5----------");
//time complexity: O(1)
//space complexity: 

//comparing the amount of elements input vs the amount of operations
function printFirst10Nums(array){
    const first10Arr = []; //O(1)
    for(let i=0; i<10; i++){ //O(1)
        //i < 10; 10 is a constant number, so even if we input 1million elements to the array, we are only still performing 10 operations here. Same with an input of 20 elements. We still only perform 10 operations.
        console.log(array[i]);
        first10Arr.push(array[i]);
    }
    return first10Arr;
}

//if I input an array of 20 elements; how many operations?
console.log(printFirst10Nums([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))

//if I input an array of 10 elements; how many operations?

console.log(printFirst10Nums([0,1,2,3,4,5,6,7,8,9]))


//if I input an array of 10000 elements; how many operations?

const tenThousandEle = [];
for (let i = 0; i < 10000; i++) {
    tenThousandEle.push(i);
}
console.log(printFirst10Nums(tenThousandEle))