console.log("---------------Mutability---------------")
//Mutability is the concept of certain pieces of data 
//being able to be changed or updated in memory.

//examples of mutable datatypes
//-objects
//-arrays


//examples of immutable datatypes (primitives). 
//immutable: We cannot update that data in the memory, we can only create,read, and delete (no update)
//-string
//-number
//-bigint
//-boolean
//-undefined
//-symbol 
//-null

console.log("---------------Mutability Example---------------")
let nums = [1,2,3];
console.log("original nums:", nums);
nums[0] = 100;
console.log("updated nums:", nums)

console.log("---------------immutability Example---------------")
let name1 = "WIZ";
console.log("original name:", name1); //origina WIZ
name1[0] = "E";
name1[1] = "S";
console.log("changed name:", name1); //still the same WIZ

console.log("---------------Reassignment of Variable---------------")
//IMPORTANT: Reassignment IS NOT mutability
let name2 = "JEZZE";
console.log("Original name2:", name2);
name2 = "JESSE"; //reassignment --> we are pointing the variable name2 to a NEW STRING
console.log("Re-assigned name:", name2)