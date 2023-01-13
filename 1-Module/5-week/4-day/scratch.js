/*
Write a recursive function `iceCreamShop(flavors, favorite)` that takes in an
array of ice cream flavors available at the ice cream shop, as well as the
user's favorite ice cream flavor. Recursively find out whether or not the shop
offers their favorite flavor.

Examples:
iceCreamShop(['vanilla', 'strawberry'], 'blue moon'); // false
iceCreamShop(['pistachio', 'green tea', 'chocolate', 'mint chip'], 'green tea'); // true
*/

/*
function iceCreamShop(flavors, favorite) {
    if (!flavors.length) {
        return false;
    }

    if (flavors.pop() === favorite) {
        return true;
    }

    return iceCreamShop(flavors, favorite);
}
*/

/*
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
*/

/*
function addToTwelve(arr) {
    if (arr.length < 2) {
        return false;
    }

    if (arr[0] + arr[1] === 12) {
        return true;
    }

    return addToTwelve(arr.slice(1))
}
*/

//ISPALINDROME
//Takes in a string and sees if it is a palindrome or not

//Examples : 
/*
console.log(test("madam")) // true
console.log(test("abdb")) // false
console.log(test("ab")) // false
console.log(test("a")) // true
*/

// function isPalindrome(str) {
//     if (str.length <= 1) {
//         return true;
//     }
//     if (typeof str !== 'string') {
//         return "Bro cmon";
//     }

//     if (str[0] !== str[str.length - 1]) {
//         return false;
//     }

//     return isPalindrome(str.slice(1, -1));
// }

// console.log(isPalindrome("abdf"))


//Flatten
/*
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
*/

/*
function flatten(arr) {
    let newArray = [];


    arr.forEach(function (el) {
        if (Array.isArray(el)) {
            newArray.push(...flatten(el))
        } else {
            newArray.push(el);
        }
    })

    return newArray;
}
*/

