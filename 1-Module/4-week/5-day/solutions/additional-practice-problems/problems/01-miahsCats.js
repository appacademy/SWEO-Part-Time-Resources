/***********************************************************************
Write a FAT ARROW function `miahsCats(obj)` that takes an object, containing
extremely important information about Miah's cats as an argument
and returns an integer representing how many keys and values
in the input object containing the string "cute" or "adorable".

****NOTE: You should account for upper and lowercase letters!****
Checkout MDN documentation on how to solve this issue.


Examples:

obj1 = {"Finn": "Smart lil boy, maximum cuTe", "Jake": "Not a dog, still cUte"}
miahsCats(obj2) // 2

obj2 = {"CuteFace": "Has an adoRable face, loves snuggles", "Baby": "Very chonky lady, adorable fluffy face"}
miahsCats(obj3) // 3

obj3 = {"Princess": "So much sass, cute AND fluffy", "adorable-boy": "Cute and funny"}
miahsCats(obj1) // 3



***********************************************************************/

const miahsCats = obj => {
    //!!START
    let count = 0;
    for(let entry of Object.entries(obj)) {
        if(entry[0].toLowerCase().indexOf("cute") > -1) count++;
        if(entry[0].toLowerCase().indexOf("adorable") > -1) count++;
        if(entry[1].toLowerCase().indexOf("cute") > -1) count++;
        if(entry[1].toLowerCase().indexOf("adorable") > -1) count++;
    }
    return count;
    //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = miahsCats;
} catch(e) {
    module.exports = null;
}