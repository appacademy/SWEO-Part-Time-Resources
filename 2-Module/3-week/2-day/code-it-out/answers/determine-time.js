console.log("----------What is the big O?----------");
//describes our solution's general shape and its growth curve
//TLDR: how fast does our operations grow/increases in comparison to the elements (n) used and how efficient is it?

//different types of complexity or growth:
    // - constant: O(1) "big O of 1", if there's operations for different element inputs we still consider that O(1) --> 10 operations --> O(10) --> O(1)
    // - linear: O(n) 
    // - quadratic: O(n^2)
    // - more to come...

//key concept of Big-O is that we are typically only concerned with the very large values (n --> number of elements that we input) --> therefore we only really care about the worst case scenarios (i.e for example if we are trying to iterate through an array of random numbers 1-100 and tried to find the number 7, in the worst case, we will have to iterate through the whole array in order to find the number 7)

//Chart link: https://www.bigocheatsheet.com/


console.log("----------Determine the time complexity for each problem below:----------");
// 3 options:
//      - constant: O(1)
//      - linear: O(n)
//      - quadratic: O(n^2)

console.log("----------Problem 0----------");
//time complexity: O(m - n) --> O(n)
//space complexity: O(n)
function range(min, max) { //max = 100,000, min = 0, max - min = 100,000 elements
    let result = [];
    for (let i = min; i <= max; i++) {
        result = result.push(i); //100,000 elements in result
    }
    return result;
}


console.log("----------Problem 1----------");
//time complexity: O(n + m) --> O(whichever is the bigger one between n or m) --> O(n)
//space complexity: O(1)
function addTwoNums(num1, num2) {
    let total = 0;

    for (let i = 0; i < num1; i++) {
        total += 1;
    } //100

    for (let i = 0; i < num2; i++) {
        total += 1;
    } //200 

    return total;
}
console.log(addTwoNums(5, 6))

console.log("----------Problem 2----------");
//time complexity: O(n) //n represents however big our array is.
//space complexity: O(1) //our space is not increasing with the amount of elements input
function removeFirst(array) {
    //when we remove something in the front of the array
    // [1,2,3,4]; we remove 1. We have to perform n - 1 number of operations on the rest of the elements in order to change their place in memory correctly. (i.e. change the number 2 in the array's index to be now 0 instead of 1)
    array.shift();
    return array;
}

//.pop() is O(1) because if we remove the element at the end of the array, we do not have to reassign the index of everything else.
//[1,2,3,4] --> we remove 4, but do not have to reassign index for 1,2,3

const arr = [1, 2, 3]
console.log(removeFirst(arr));


console.log("----------Problem 3----------");
//time complexity: O(1) 
//space complexity: O(1)
function addFirstAndLast(nums) {

    const firstNum = nums[0];
    const lastNum = nums[nums.length - 1];

    return firstNum + lastNum;
}


console.log("----------Problem 4----------");
//time complexity: O(n number of items in array2d * m in number of items in each sub array) --> O(n^2) --> represents quadratic time
//space complexity: O(1)
function sumTwoDArray(array2d) {
    let total = 0; //number and we reassign that number each time to have the old number + the new number
    for (let i = 0; i < array2d.length; i++) {
        const subArr = array2d[i];
        for (let j = 0; j < subArr.length; j++) {
            const ele = subArr[j];
            total += ele;
        }
    }
    return total;
}
console.log(sumTwoDArray([[1, 2], [3]]))

//if they are specific and say that the subArray can only have 3 elements. but the array2d can have n number of arrays, then the math --> n * 3 --> O(3n) --> O(n)

//since we don't know the strict amount of elements in each sub array and we don't know the amount of arrays. Then we can assume that it could be as big as possible. O(n * m)


console.log("----------Problem 5----------");
//time complexity: O(1)
//space complexity: O(1)

//array of 100 elements vs. array of 1,000,000 elements. Do the number of operations change for each one? Or do they remain the same?

//what is the operations for 100 elements vs. operations for 1,000,000, elements
function printFirst10Nums(array) {
    const first10Arr = []; 
    //10 sspace is used even when we had an input array of 1,000,00 elements.
    //only 10 space is used even when we had an input array of 10 elements.

    for (let i = 0; i < 10; i++) { //always contant 10 number of operations and always 10 number of extra space added.
        console.log(array[i]);
        first10Arr.push(array[i]);
    }
    return first10Arr;

}

const array100 = []
for(let i=0; i<100; i++){
    array100.push(i);
}

const array1million = []
for(let i=0; i<1000000; i++){
    array1million.push(i);
}


const res100 = printFirst10Nums(array100)//same time and space
const res1000000= printFirst10Nums(array1million); //same time and space

const start = Date.now();
console.log("res100:", res100);
const end = Date.now();
const runTime = end - start;
console.log(runTime);

const start2 = Date.now();
console.log("res1m:", res1000000);
const end2 = Date.now();
const runTime2 = end - start;
console.log(runTime2);