//all objects in javascript share a common parent class, the Object parent class! (Object.keys...)
//and because of inheritance, the class receives the parent's methods and properties


const fruitsObj = {
    pears:1,
    apple:2
}

const objToString = fruitsObj.toString(); //format the object in a string in 'Object' own way.
console.log(objToString); //[object Object]
// console.log(fruitsObj); //{ pears: 1, apple: 2 }

const arrayToString = [1,2,3].toString();
console.log(arrayToString + ',4'); //1,2,3,4

