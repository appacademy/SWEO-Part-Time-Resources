/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

inputs and outputs:
input: string --> "apple"
output: object --> {a: 1, p: 2, l: 1, e: 1}

unlike a variable which can ONLY keep track of one item for us.
let a = 0;

***********************************************************************/

function stringConverter(string) {
    //create an empty object so that we can populate the letters and its count
    let countObj = {};
    //iterate over the string to get each letter
    for(let i=0; i<string.length; i++){
        let letter = string[i]; //current letter
        //check if letter exists in counterObj, 
        if(countObj[letter] !== undefined){ // this means that the letter already exists in the countObj
            //if letter does exists, then we increment it by 1
            countObj[letter] += 1;
        }
        //else we intially set the letter inside the object to have the value of 1
        else{
            countObj[letter] = 1;
        }
    }


    // let allKeys = Object.keys(countObj);
    // console.log("allKeys:", allKeys)
    return countObj;
}

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
