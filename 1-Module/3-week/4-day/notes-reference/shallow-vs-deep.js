let a = ["a", "b", [1]];

//shallow copy with .slice or using ... spread
// let aCopy = a.slice();
let aCopy = [...a]

console.log("original:", a);
console.log("copied:", aCopy)

console.log("--------update the copied 'a' to be 'z'-----");
aCopy[0] = 'z';
console.log("original2:", a);
console.log("copied2:", aCopy);

console.log("--------update the copied [1] to be [100]-------")
//index into the first element in the SUBARRAY [1] to get 1 and change to 100
aCopy[2][0] = 100;

console.log("original3:", a); //also change to [100]
console.log("copied3", aCopy); //changed to [100]

console.log("--------make a copy of the inner array (subArray)as well------")
//give aCopy[2] at that index a new array of [200]
aCopy[2] = [200] 
console.log("original4:", a); //doesn't get affected still [100]
console.log("updated inner array of copiped:", aCopy)
console.log("--------update copied inner array to [1000] from [200]---------")
aCopy[2][0] = 1000;
console.log("original5:", a); //also change to [100]
console.log("copied5", aCopy); //changed to [1000]