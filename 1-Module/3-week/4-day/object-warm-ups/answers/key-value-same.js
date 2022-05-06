//given an object, check if both its key and its corresponding value are the same,
//if so, add the key or value to an array and return it. (see example input and output below).

//write this function
let keyValueSame = function(obj){
    //define result array
    let resArr = [];

    //iterate through object to get each key
    for(let key in obj){
        //define value from giving key to object
        let value = obj[key]
        //if value === key 
        if(value === key){
            //add value to array
            resArr.push(value);
        }
    }
    //at the end, return result
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


