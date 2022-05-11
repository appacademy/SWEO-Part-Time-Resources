console.log("------------Original forEach------------")
let peeps = ['kafele', 'cindy', 'jon', 'paloma'];

//This is how we have been using forEach
let callback1 = function (el, i, arr) {
    console.log(el + 'is at idx ' + i);
}

peeps.forEach(callback1); //forEach only returns undefined, if we never have a return statement, it will always default to returning undefined

// kafeleis at idx 0
// cindyis at idx 1
// jonis at idx 2
// palomais at idx 3


console.log("------------Our Own forEach------------")
//Now we are going to create our own forEach
//code it here
let myForEach = function (array, cb) {
    //iterate through every element in array
    for(let i=0; i<array.length; i++){
        //define the element
        let currentEle = array[i];
        //apply the cb to the element
        //remember to pass index and array to the callback as well
        cb(currentEle, i, array);
    }
    //NO RETURN
};


let func = function (el, i, array) {
    console.log(el + 'is at idx ' + i);
    console.log("this is my array:")
};

myForEach(peeps, func);

// should output:
// kafeleis at idx 0
// cindyis at idx 1
// jonis at idx 2
// palomais at idx 3