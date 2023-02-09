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

function miahsCats(obj) {
    const newArr = []
    const keys = Object.keys(obj)
    const mappedKeys = keys.map((key) => key.toLowerCase());
    const values = Object.values(obj)
    const mappedValues = values.map((value) => value.toLowerCase());
    let concated = [...mappedKeys, ...mappedValues]

    for(let i = 0; i<concated.length; i++){
        const ele = concated[i]
        if(ele.includes('cute') || ele.includes('adorable')){
            newArr.push(ele)
        }
    }
    // let filtered = concated.filter(ele => ele.includes('cute') || ele.includes('adorable')) // other option using filter

    // return filtered.length // other option using line 40
    return newArr.length
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try{
    module.exports = miahsCats;
} catch(e) {
    module.exports = null;
}