const obj1 = { firstName: 'Zaviar' };
const obj2 = { lastName: 'Brown' };
const replaceObj = { age: 25, firstName: 'Z' };
const obj3 = { ...obj1, ...obj2, ...replaceObj };
// const obj3 = { ...obj1, ...obj2 };

console.log(obj3);
