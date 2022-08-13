/***********************************************************************
Write a function named `filterUserProfiles` that accepts an array of
objects that represent user profiles and a callback function. You
can expect the callback function to take in an object and return
true or false.

`filterUserProfiles` should use the callback function to return an
array of names from the user profiles that, when passed into the
callback function, return true. You can expect all user profiles to
be passed in with a key of "name".

make a plan
create a newwArr
grab each element of the array which is an object
pass each object to our callback function
if it is truthy
  we are going to push the name of the object to our newArr

return our newArr
***********************************************************************/

function filterUserProfiles(users, filter) {
  // Your code here
  // let newArr = []
  // for(let i = 0; i < users.length; i++){
  //   let obj = users[i]
  //   if(filter(obj)){
  //     let name = obj.name
  //     newArr.push(name)
  //   }
  // }
  // return newArr
  const filtered = users.filter(filter)
  return filtered.map(obj => obj.name)
  // return filtered.map(function(obj){
  //   return obj = obj.name
  // })
}

// const facebookUsers = [
//   { name: "John", age: "21", state: "Florida" },
//   { name: "Mary", age: "57", state: "California" },
//   { name: "Judy", age: "47", state: "Texas" },
//   { name: "Mike", age: "32", state: "New York" }
// ];

// console.log(filterUserProfiles(facebookUsers, (user) => user.age > 30)); // ["Mary", "Judy", "Mike"]
// filterUserProfiles(facebookUsers, (user) => user.state === "New York"); // ["Mike"]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = filterUserProfiles;
} catch (e) {
  module.exports = null;
}
