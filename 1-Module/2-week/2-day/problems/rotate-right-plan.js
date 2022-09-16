// ---------understand the problem---------
//take the current last number, rotate it to the right (remove it from the back), then add it the front, then repeat that process(aka for loop) n number of times.

//FUNCTIONS SHOULD NOT MUTATE ORIGINAL ARRAY, ONLY WORK WITH A COPY

//----------plan----------------
//strategy: what we want to do (pseudo code: how do we do it)

//1. define function rotateRight in expression syntax (let rotateRight = function(array, num)...)
let rotateRight = function(array, num){
    //2. make a copy of the original array (copyArr = array.slice() )
    let copyArr = array.slice();
    //3. create a for loop to repeat that process n number of times (for(let i=0; i<num) ...)
    for(let i=0; i<num; i++){
        //4. inside the for loop, each time, remove the last element (lastEl = copyArr.pop()
        let lastEl = copyArr.pop() //gets the last element of the array for us
        //5. we want to then move that last element to the front (copyArr.unshift(lastEl))
        copyArr.unshift(lastEl);
    }
    
    //6. at the very end, after the for loop repeats n times, return the copied array which is the result (return copyArr)
    return copyArr;
}

            


let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

let animals = ['kangaroo', 'wombat', 'koala', 'opossum', ];
console.log(rotateRight(animals, 3)); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]
console.log(animals); // [ 'wombat', 'koala', 'opossum', 'kangaroo' ]