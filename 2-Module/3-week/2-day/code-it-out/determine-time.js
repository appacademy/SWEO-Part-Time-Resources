console.log("----------What is the big O and time complexity?----------");
//Answer:

//Check out this chart link!~ Chart link: https://www.bigocheatsheet.com/


console.log("----------Determine the time complexity for each problem below:----------");
// 3 options:
//      - constant: O(1)
//      - linear: O(n)
//      - quadratic: O(n^2)


//What we should do first when determining time complexity: 
//      - Determine if there's a change in number of operations from 2 different input values
//      - array of 100 elements vs. array of 1,000,000 elements. Do the number of operations that the function does change for each one(i.e. for loop n times)? Or do they remain the same?

console.log("----------Problem 0----------");

//time complexity:
//space complexity:
function range(num) {
    let result = [];
    for (let i = 0; i <= num; i++) {
        result = result.push(i); 
    }
    return result; 
}



console.log("----------Problem 1----------");
//time complexity: 
//space complexity: 
function addTwoNums(num1, num2) {
    let total = 0;

    for (let i = 0; i < num1; i++) {
        total += 1;
    }

    for (let i = 0; i < num2; i++) {
        total += 1;
    }

    return total;
}
console.log(addTwoNums(5, 6))

console.log("----------Problem 2----------");
//time complexity: 
//space complexity: 
function removeFirst(array) {
    array.shift();
    return array;
}

const arr = [1, 2, 3]
console.log(removeFirst(arr));


console.log("----------Problem 3----------");
//time complexity: 
//space complexity: 
function addFirstAndLast(nums) {

    const firstNum = nums[0];
    const lastNum = nums[nums.length - 1];

    return firstNum + lastNum;
}

const twoNums = [999999999999, 999999999999];

const millionNums = [];
for (let i = 0; i < 1000000; i++) {
    millionNums.push(999999999999);
}

startTime2 = Date.now();
addFirstAndLast(twoNums);
endTime2 = Date.now();

startTime1m = Date.now();
addFirstAndLast(millionNums);
endTime1m = Date.now();

console.log(`${endTime2  - startTime2 }`);   // 2ms
console.log(`${endTime1m - startTime1m}`);   // 1ms

console.log("----------Problem 4----------");
//time complexity: 
//space complexity:
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
console.log(sumTwoDArray([[1,2], [3]]))


console.log("----------Problem 5----------");
//time complexity: 
//space complexity: 
function printFirst10Nums(array){
    const first10Arr = [];
    for(let i=0; i<10; i++){
        console.log(array[i]);
        first10Arr.push(array[i]);
    }
    return first10Arr;
    
}


