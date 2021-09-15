/* EAST */
/*
What did we learn? / Initial Questions

Numbers
  JavaScript doesn't care about types of numbers... just numbers is numbers
  Modulo is new what does it do?
    Gives you the remainder for division 

Comparisons
  Short circuit can be a thing
  learned how to spell circuit

*/

// console.log(7 % 2); // 1
// console.log(22 % 2); // 0
// console.log(2 % 22); // 2
// console.log(-7 * 2); // -14
// console.log((2 + 5) * 2) // 14

// console.log(2 / "bread");
// // NaN is not equal to NaN
// console.log(NaN === NaN);
// console.log(isNaN(NaN));

// // Not operator !
// console.log(!true);

// // && - AND

// console.log(true && true);
// console.log(false && true); // false
// console.log(false && asdf) // it can short circuit

// // || - OR
// console.log(false || false) //false
// console.log(true || false) // true
// console.log(true || asdf) // it can short circuit
  

// console.log('a' < 'b');  // true (dictionary order)
// console.log('cat' < 'cats'); // true
// // WARNING
// console.log("A" < "a") // case matters
// console.log("Zebra".toLowerCase() < "apple") // More on this tomorrow

// // or equal tos
// console.log(7 <= 7);
// console.log(7 >= 7);

// SINGLE = is ASSIGNMENT
// DOUBLE == is loose equality
// TRIPLE === a strict equality

// console.log(2 == "2"); //true
// console.log(2 === parseInt("2")) // true
// // DOUBLE VS TRIPLE
// console.log(false == 0) // true
// console.log(false === 0) // false

// //Variable Declaration
// let carrot;
// console.log(carrot);

// //Variable Assignment/ Reassignment
// carrot = "orange";
// console.log(carrot);

// // Variable Init
// let apple = "red";

// let num = 0;
// console.log(num);
// // num = num + 1;
// // num += 1; // take the old num, add one to it, REASSIGN it to num
// // num++;
// // num += 5;


// // NOTE: sometimes ++ has some unexpected behavior
// num++ // I want you to assign num to num then add one
// ++num // I want you to add one to num then assign it to num
// console.log(num);

// num *= 5 // num = num * 5;
// num /= 2 // num = num / 2;
// num %= 6 // num = num % 6;
// console.log(num)

// let a = 5;
// // a is 5
// console.log(a);

// let b = a;
// console.log(a,b);
//     // b = a
//     // a += 1
// // take the value of a and put it into b // 5
// // then add one to a // 6

// let c = ++a;
// console.log(a,c);
//     // a += 1
//     // c = a
// // add one to a // 7
// // then the value of a and put it into c. //7
// console.log(a, b, c);

/* WEST */
/* What did you learn? Initial questions?
echo vs console.log
JS doesn't care what the number is just that it's a number

Boolean... nada

Comparison Operators.. nah 

Variables - INIT VS DECLARATION VS ASSIGNMENT

*/

// console.log(4, 4.5, -7);
// // PEMDAS - Order of Operations
// console.log((5 + 4) * 2); // 13
// // Modulo
// console.log(7 % 5); // 2
// console.log(20 % 2); // 0
// console.log(2 % 20); // 2
// // NaN - WARNING
// console.log(2 / "apple");
// console.log(NaN === NaN);
// console.log(isNaN(NaN));

// // NOT - !
// console.log(!!!!!!!!!!!!!!!!true)

// // AND - &&
// console.log(true && true) // true
// console.log(false && true) // false 
// console.log(true && false) // false
// console.log(false && asdf) // short circuiting

// OR - ||
// console.log(false || false) // false
// console.log(false || true) // true
// console.log(true || false) // true
// console.log(true || asdf) // short circuiting

// Exclusive Operators
// console.log(1 < 2) //true
// console.log(2 < 2) // false
// console.log(1 > 2) // false
// console.log(2 > 2) // false

// Inclusive Operators
// console.log(1 <= 2) //true
// console.log(2 <= 2) // true
// console.log(1 >= 2) // false
// console.log(2 >= 2) // true

// // Strings
// console.log("a" < "b"); // true
// console.log("zebra" < "apple"); // false
// // WARNING - Captials come before lower... case matters.
// console.log("Zebra" < "apple"); // true
// console.log("Zebra".toLowerCase() < "apple"); // false

// Equality

// loose equality => ==
// strict equality => ===
// loose inequality => !=
// strict inequality => !==

// console.log(2 == "2"); // true
// console.log([] == 0); // true

// console.log(2 === "2") // false
// console.log([] === 0); // false
// console.log(2 === parseInt("2")) //true

// // Inequality 
// console.log(2 != "2"); // false
// console.log([] != 0); // false

// console.log(2 !== "2") // true
// console.log([] !== 0); // true
// console.log(2 !== parseInt("2")) //false

// WARNING - = is assignment operator

// // Declaration
// let kitchen; // undefined
// console.log(kitchen);

// // Assignment or Reassignment
// kitchen = "plates";
// console.log(kitchen);
// kitchen = "cups";
// console.log(kitchen);

// // Initialization
// let livingroom = "TV";
// console.log(livingroom);


// let num = 0;
// console.log(num);

// num = num + 1;
// console.log(num);

// num += 1
// console.log(num);

// num++;
// ++num;
// console.log(num);

// num += 1
// num *= 3
// num /= 7
// num %= 3

// let x = 7; // init
// console.log(x);
// x++; // x = x + 1
// console.log(x);
// x - 2; // random expression for no reason
// console.log(x);
// x *= 3; // x = x * 3
// console.log(x);

//isSweet || !hasFruit