//REMOVE E's PRACTICE
/*
function removeEWords(sentence) {
    let words = sentence.split(' ');
    
    let filtered = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (!word.toLowerCase().includes('e')) {
            filtered.push(word);
        }
    }
    return filtered.join(' ');
}
*/

//NESTED LOOPS
//Outer loop
//inner loop

//Outer always executes first, and then the inner loop executes all the way, before returning
//to the outer loop

/*
let fruits = ["apple", "grape", "lemon", "orange", "pear"];

for (let i = 0; i < fruits.length; i++) {
    let fruit1 = fruits[i];
    for (let j = i + 1; j < fruits.length; j++) {
        let fruit2 = fruits[j];
        console.log(fruit1 + ", " + fruit2);
    }
}
*/

//HELPER FUNCTIONS
//A smaller function that has one job, that gets utilized in another function
//SRP- Single Responsibility Principle

//Decomposition - The process of breaking down large problems into smaller, sub-problems

//arr = ["hey", "hi", "howdy"] - return ["HEY!", "HI", "HOWDY!"]

/*
let arr = ["hey", "hi", "howdy"];

function yellString(string) {
    let upperCase = string.toUpperCase();
    return upperCase + "!";
}

function yelledStrings(array) {
    let finalArray = [];

    for (let i = 0; i < array.length; i++) {
        let string = array[i];
        let yelled = yellString(string);
        finalArray.push(yelled);
    }
    return finalArray;
}

console.log(string);

console.log(yelledStrings(arr))
*/

//TRAVERSING THROUGH A NESTED ARRAY
/*
let nestedArray = [["a", "b", "c"], ["d", "e"], ["f", "g", "h"]];

for (let i = 0; i < nestedArray.length; i++) {
    let subArr = nestedArray[i];
    for (let j = 0; j < subArr.length; j++) {
        console.log(subArr[j]);
    }
}
*/