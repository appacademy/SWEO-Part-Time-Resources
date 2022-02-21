/***********************************************************************
Write a function named `filterUserProfiles` that accepts an array of
objects that represent user profiles and a callback function. You
can expect the callback function to take in an object and return
true or false.

`filterUserProfiles` should use the callback function to return an
array of names from the user profiles that, when passed into the
callback function, return true. You can expect all user profiles to
be passed in with a key of "name".

const facebookUsers = [
  { name: "John", age: "21", state: "Florida" },
  { name: "Mary", age: "57", state: "California" },
  { name: "Judy", age: "47", state: "Texas" },
  { name: "Mike", age: "32", state: "New York" }
];

filterUserProfiles(facebookUsers, (user) => user.age > 30); // ["Mary", "Judy", "Mike"]
filterUserProfiles(facebookUsers, (user) => user.state === "New York"); // ["Mike"]
***********************************************************************/
// write a function that takes an array of objs and a callback 
// create a new results array 
// loop over every element of that array 
// inside the loop I need to check if passing the element to the callback results in true 
// if so I need to push the name into my Results array 
// return results array at the end 
// function filterUserProfiles(users, filter) {
//     let resultsArray = []
//     users.forEach(el => {
//       if(filter(el)){
//         resultsArray.push(el.name)
//       }
//     })
//     // for(let i = 0; i < users.length; i++){
//     //   let myUser = users[i]
//     //   let callbackResult = filter(myUser)
//     //   if(callbackResult){
//     //     resultsArray.push(myUser.name)
//     //   } 
//     // }
//     return resultsArray
//     //  return users.filter(el => filter(el)).map(el => el.name)
// }
const filterUserProfiles = (users, filter) => users.filter(el => filter(el)).map(el => el.name)

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = filterUserProfiles;
} catch (e) {
  module.exports = null;
}