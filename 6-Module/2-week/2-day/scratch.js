// const person = { firstName: "Blake", lastName: "Watts", 1: 489 };

// const emptyObj = {};

// // console.log(Object.entries(person).length);

// console.log(person["middleName"]);

let person = { firstName: "Blake" };
const personDetailsObj = { lastName: "Watts", age: 28, dog: "paisley" };

person = Object.assign({}, person, personDetailsObj);

console.log(person);
