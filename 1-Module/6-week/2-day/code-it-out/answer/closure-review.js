/***********************************************************************
Write a function named `hiddenCounter(num)`. This function will do two things - first
it will take in a `num` value (which represents a number), then it will return a function.

the inner function returned by hiddenCounter will increment the `num` by 1 if the `num` passed in to hiddenCounter is positive and decrease the `num` by 1 (-1) if the `num` passed in is negative

Look below to see how this function is invoked:

let negativeCounter = hiddenCounter(-5); //returns a function
console.log(negativeCounter()); // returns -6
console.log(negativeCounter()); // returns -7

let positiveCounter = hiddenCounter(5); // returns a function
console.log(positiveCounter()); // returns 6
console.log(positiveCounter()); // returns 7
console.log(positiveCounter()); // returns 8


***********************************************************************/

const hiddenCounter = (num) => {
    //the inner function makes a CLOSURE around `num` and access/update it, etc.
    //closure: the ability for the inner func to access the outer funcs variables / scope
    return function(){
        if(num >= 0){
            num += 1;
        }
        else if(num <0){
            num -=1;
        }
        return num;
    }
}

let negativeCounter = hiddenCounter(-5); //returns a function
console.log(negativeCounter()); // returns -6
console.log(negativeCounter()); // returns -7

let positiveCounter = hiddenCounter(5); // returns a function
console.log(positiveCounter()); // returns 6
console.log(positiveCounter()); // returns 7
console.log(positiveCounter()); // returns 8