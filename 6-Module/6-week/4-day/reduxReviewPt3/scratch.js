const obj1 = { firstName: 'Zaviar' };
const obj2 = { lastName: 'Brown' };
const updateObj = { age: 25, firstName: 'Z' };

const obj3 = { ...obj1, ...obj2, ...updateObj };

console.log(obj3);
