//given an object, check if both its key and its corresponding value are the same,
//if so, add the key or value to an array and return it. (see example input and output below).

//write this function
let keyValueSame = function(obj){
    //create new array
    let resArr = [];

    //iterate through the object to get the keys
    for(let key in obj){
        //get the value from the key
        //determine if key === value
        let value = obj[key];
        if (key === value){
            //if so, add to resArr.
            resArr.push(value);
        }
    }
    //return our answer
    return resArr;
}


let animals = {
    cat: "cat",
    dog: "corgi",
    turtle: "turtle",
    hamster: "teemo", 
}
console.log(keyValueSame(animals)) //  animals obj (input) --> ["cat", "turtle"] (output)

//animals has a key of 'cat' and its value is also 'cat'
//animals has a key of 'turtle' and its value is also 'turtle'


