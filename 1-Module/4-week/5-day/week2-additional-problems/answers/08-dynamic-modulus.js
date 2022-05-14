/*
    Dynamic Modulus Function Creator

    Write a function called `dynamicModulus(num)`. The dynamicModulus function will
    return a new function that will allow us to create new separate custom
    modulus functions.


    Look below to see how this function is invoked:

    const modulusTwo = dynamicModulus(2); // returns a function
    console.log(modulusTwo(5)); // prints 1

    const modulusTen = dynamicModulus(10); // returns a function
    console.log(modulusTen(13)); // prints 3

    const modulusNine = dynamicModulus(9); // returns a function
    console.log(modulusNine(30)); // prints 3


*/

const dynamicModulus = (num) => {
    return (num2) => {
        return num2 % num; //5 % 2 --> 1
    }
    
    // // 1) define the inner function
    // const innerFunc = num2 =>{
    //     //3) return the logic
    //     return num2 % num;
    // }

    // // 2) step 2 return inner func
    // return innerFunc
}
const modulusTwo = dynamicModulus(2); // returns a function
console.log(modulusTwo(5)); // prints 1

const modulusTen = dynamicModulus(10); // returns a function
console.log(modulusTen(13)); // prints 3

const modulusNine = dynamicModulus(9); // returns a function
console.log(modulusNine(30)); // prints 3

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = dynamicModulus;
} catch (e) {
    module.exports = null;
}

