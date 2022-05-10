console.log("------------Original forEach------------")
let peeps = ['kafele', 'cindy', 'jon', 'paloma'];

//This is how we have been using forEach
let callback1 = function (el, i, arr) {
    console.log(el + 'is at idx ' + i);
}

peeps.forEach(callback1);
// kafeleis at idx 0
// cindyis at idx 1
// jonis at idx 2
// palomais at idx 3


console.log("------------Our Own forEach------------")
//Now we are going to create our own forEach
//code it here
let myForEach = function (array, cb) {
    //YOUR CODE HERE
};


let func = function (el, i) {
    console.log(el + 'is at idx ' + i);
};

myForEach(peeps, func);

// should output:
// kafeleis at idx 0
// cindyis at idx 1
// jonis at idx 2
// palomais at idx 3