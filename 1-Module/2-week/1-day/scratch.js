//SEMI COLON CHEAT SHEET

//MOST OF THE TIME semi colons are optional and the code will work with or without

//Semicolons are only obligatory when you have two or more statements on the SAME LINE

// let apple = 'apple'; let i = 0

// let fruit = 'pear'
// let idk = 'idk'

// for (let i = 0; i < 0; i++) {
//     console.log(); //This one is optional as well because there is only one statement within this block
//     i++;
// }

// DO NOT put semi colons after closing squiggly brackets


//NESTED LOOP

let fruits = ['pear', 'orange', 'apple', 'cherry', 'pineapple', 'lemon'];

for (let i = 0; i < fruits.length; i++) {
    console.log('OUTER LOOP -----------')
    for (let j = i + 1; j < fruits.length; j++) {
        console.log(fruits[i], fruits[j])
    }
}