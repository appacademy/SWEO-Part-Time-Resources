//Debugging
/*
let str = "Hello World";

console.log(str);
*/

//Steps for VS Code debugger
//1. Add a breakpoint
//2. (IF you have the option) Press run and debug
//3. Slowly step through the program

//Default Parameters
//A parameter that is given a default VALUE in case we don't pass in an argument
//When we do pass in an argument, it will overwrite the default value

//Example

/*
function addToNum(num, amount = 1) {
    return num + amount;
}

console.log(addToNum(5, -5));
*/

/*
function sayHi(userName = "brother") {
    console.log(`Hello ${userName}, how are you?`);
}

sayHi();
*/

/*
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
*/

/*
function reverse(str) {
    if (!str.length) {
        return str;
    }

    return reverse(str.slice(1)) + str[0];
}

console.log(reverse("house"));
*/

/*
Write a recursive function called `exponent` that takes two integers, 
`num` and `power`, and returns `num` raised to the `power`th power. Your
function should work when `num` or `power` are positive OR negative.

exponent(3, 2); // 9
exponent(2, -2); // 1/4 (or 0.25)
exponent(5, 5); // 3125
*/

/*
function exponent(num, power) {
    if (power === 1) {
        return num;
    }

    if (power <= 0) {
        return (1/num) * exponent(num, power +1);
        // return (1 / exponent(num, Math.abs(power)));
    }

    return num * exponent(num, power - 1)
}

console.log(exponent(2, -2));
*/
