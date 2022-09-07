//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


//---------------------rules for compare callback function--------------------
//Positive rule: if compare callback return val is positive number (greater than 0) then sort `b` BEFORE `a`
//Negative rule: if compare callback return val is negative number (less than 0) then sort `a` BEFORE `b`
//Neutral rule: if compare callback return 0, then keep original order.

console.log("---------------------Problem 1----------------------")
//task: refactor and sort the numbers in descending order (biggest to smallest) by updating the compare callback that will be passed to javascript built-in `sort`

function compareNumbers(a, b) {
    debugger;

    //-----------sort in ascending order implicit--------
    //comment this out
    // return a - b; //if a - b (2 - 4) returns a negative number, negative number means sort `a` before `b` so 2 before 4.

    //-----------sort in ascending order explicit--------
    //i.e. a = 2, b = 4, we want a to go before b when comparing.
    // if(b > a){
    //     //number does not matter, only positive or negative.
    //     return -100 //negative return rule: sort `a` BEFORE `b`
    // }

    // //i.e a = 4, b = 1,  I want `b` to be sorted first before `a` (1 should go before 4 in ascending order)
    // if(a > b){
    //     //number does not matter, only positive or negative.
    //     return 12//positive return rule: sort `b` BEFORE `a`
    // }
    // else{
    //     return 0;
    // }

    //-----------sort in DESCENDING order --------
    //YOUR CODE HERE: refactor above to sort the numbers in descending order (biggest to smallest)

    // a = 2, b = 4,
    return b - a;
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
        return -1000

    }
    if(a.length > b.length){
        //b ("a") should go before a ("zeeeebra")
        //your code here
        return 1

    }
    else{
        return 0;
    }

    // robert's solution
    // return a.length - b.length;
}

words.sort(compareWords);

console.log(words); //[ 'a', 'bb', 'ccc', 'zeeeebra' ]