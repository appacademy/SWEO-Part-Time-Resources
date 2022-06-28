//write a function `linearSearch` that takes in a SORTED array of `n` number of items as the first argument, and the second argument is the `targetEl`. The function will return the index if the `targetEl` is found within `items` and -1 if not. 


//DO THIS WITHOUT INCLUDES, USING FOR LOOP in O(n) time.
function linearSearch(sortedItems, targetEl){
    let index = -1; //defaults to -1

    //if target is found update the index to be the element's index
    for(let i=0; i<sortedItems.length; i++){
        let currentEl = sortedItems[i];
        if(currentEl === targetEl){
            index = i;
        }
    }

    
    return index;
}


console.log(linearSearch([], "apple")); //-1
console.log(linearSearch([1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
    53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
    82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100], 89)); //26