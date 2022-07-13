//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


//---------------------rules for compare callback function--------------------
//Positive rule: if compare callback return val is positive number (greater than 0) then sort `b` BEFORE `a`

//Negative rule: if compare callback return val is negative number (less than 0) then sort `a` BEFORE `b`

//Neutral rule: if compare callback return 0, then keep original order.

console.log("---------------------Problem 1----------------------")
//task: refactor and sort the numbers in descending order (biggest to smallest) by updating the compare callback that will be passed to javascript built-in `sort`

function compareNumbers(a, b) {
    debugger;

    // -----------sort in ascending order implicit--------
    // comment this out
    // return a - b; //if a - b (2 - 4) returns a negative number, negative number means sort `a` before `b` so 2 before 4.

    //-----------sort in ascending order explicit--------
    //i.e. a = 2, b = 4, we want a to go before b when comparing.
    // if(a < b){
    //     //it doesn't matter what negative num we return, as long as it's a negative number
    //     return -1
    //     // return -1000
    // }
    // //i.e a = 4, b = 1,  I want `b` to be sorted first before `a` (1 should go before 4 in ascending order)
    // if(a > b){
    //     return 1; //positive means we will swap and b will go before a
    //     // return 1000000;
    // }
    // //otherwise, do sort nothing
    // else{
    //     return 0;
    // }

    //-----------sort in DESCENDING order --------
    //YOUR CODE HERE: refactor above to sort the numbers in descending order (biggest to smallest)
    //----implicity------
    return b - a;

    //----explicit------
    // if(a < b){
    //     //if a is less than b, that means b is bigger so it needs to go before a (descending order). So return positive number to swap.
    //     return 1;
    // }
    // if(a > b){
    //     //we want to keep a before b, so no need to swap
    //     return -1;
    // }

    // return 0;


    
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
        return -1; 

    }
    if(a.length > b.length){
        //b ("a") should go before a ("zeeeebra")
        //your code here
        return 1; //this will do the swap where b will now go before a 
    }
    else{
        return 0;
    }
}

words.sort(compareWords);

console.log(words); //[ 'a', 'bb', 'ccc', 'zeeeebra' ]