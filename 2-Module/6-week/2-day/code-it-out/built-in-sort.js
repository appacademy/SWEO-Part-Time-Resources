//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


//---------------------rules for compare callback function--------------------
//Rule 1: if compare callback return val is positive number (greater than 0) then sort `b` BEFORE `a`
//Rule 2: if compare callback return val is negative number (less than 0) then sort `a` BEFORE `b`
//Rule 3: if compare callback return 0, then keep original order.

console.log("---------------------Problem 1----------------------")
//task: refactor and sort the numbers in descending order (biggest to smallest) by updating the compare callback that will be passed to javascript built-in `sort`

function compareNumbers(a, b) {
    debugger;

    //comment this out
    return a - b; //if a - b (2 - 4) returns a negative number, negative number means sort `a` before `b` so 2 before 4.

    //YOUR CODE HERE: refactor above to sort the numbers in descending order (biggest to smallest)
    
}

const nums = [2, 4, 1, 8,];
nums.sort(compareNumbers); //before: [1,2,4,8]; after: [8,4,2,1]
console.log(nums);


console.log("---------------------Problem 2----------------------")
//given this array, sort the array by the length of the words from least to greatest using sort.
const words = ["ccc", "zeeeebra", "a", "bb", ] // final result --> [ 'a', 'bb', 'ccc', 'zeeeebra' ]

const compareWords = (a, b) => {
    if(a.length < b.length){
        //a ("ccc") should go before b ("zeeeebra")
        //your code here

    }
    if(a.length > b.length){
        //b ("a") should go before a ("zeeeebra")
        //your code here

    }
    else{
        return 0;
    }
}

words.sort(compareWords);

console.log(words); //[ 'a', 'bb', 'ccc', 'zeeeebra' ]