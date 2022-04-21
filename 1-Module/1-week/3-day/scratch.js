// ----------string example-----------
// Example:
console.log('hello ' + 'world');  // 'hello world'

// Write 3 more expressions below:

// +
let firstName = "wes";
let lastName = "trinh";
let fullName = firstName + " " + lastName; //"wes trinh"
console.log("My full name is: " + fullName);

// []
let firstLetter = firstName[0];
console.log("first letter: ", firstLetter);

let lastLetter = fullName[fullName.length - 1] //fullname.length = 9.
console.log("length - 1:", fullName.length - 1);
console.log("last letter of my name:", lastLetter);

// .length extra
console.log("--------extra-------");
// console.log(firstName.length);
//fullName.length === 9;
//firstName.length === 3;
console.log((fullName + firstName).length); // 9 + 3 = 12;


console.log("--------indexOf example-------");
let my_nba_team = "nets";
console.log(my_nba_team.indexOf("warriors")); //-1
console.log(my_nba_team.indexOf("ets")); // 1


