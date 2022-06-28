//write a function `linearSearch` that takes in a SORTED array of `n` number of items as the first argument, and the second argument is the `targetEl`. The function will return the index if the `targetEl` is found within `items` and -1 if not. 


//DO THIS WITHOUT INCLUDES, USING FOR LOOP in O(n) time.

//if we had 4.5 billion elements, then we need to operate on 4.5 billion of them.
function linearSearch(sortedItems, targetEl){
    let index = -1; //O(1)
    for(let i=0; i<sortedItems.length; i++){ //O(n)
        let currentEl = sortedItems[i]; //O(1)
        if(currentEl === targetEl){ //O(1)
            index = i;
        }
    }
    return index; //O(1)

    //O(n + 4) --> O(n);
}


console.log(linearSearch([], "apple")); //-1
console.log(linearSearch([1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52,
    53, 57, 63, 66, 67, 68, 69, 74, 76, 79,
    82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100], 89)); //26