//Debugger

//1. Place a breakpoint
//2. Press run & debug
//3. Step through program


//Default Parameters
//A parameter that is given a default value using the assignment operator =
//The default value will be over written if we pass an argument in its place

/*
function addToNum(num, amount = 1) {
    return num + amount;
}

console.log(addToNum(5));
console.log(addToNum(5, 4));

function sayHi(user = "friend") {
    console.log("How are you, " + user + "?");
}

sayHi("Alex");
*/


/*
Write a recursive function reverse(string) that takes in a string and returns
it reversed.
*/

/*
function reverse(str) {
    if (str.length === 0) {
        return str;
    }

    return reverse(str.slice(1)) + str[0];
}
*/

/*
function reverse(str) {
    if (str.length === 0) {
        return '';
    } else {
        return str[str.length - 1] + reverse(str.slice(0, -1));
    }
}
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

    if (power < 0) {
        return (1 / exponent(num, Math.abs(power)))
        //return 1 / num * exponent(num, power + 1);
    }

    return num * exponent(num, power - 1);
}
*/
