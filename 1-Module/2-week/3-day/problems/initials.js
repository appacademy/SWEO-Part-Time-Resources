// Write a function initials(name) that accepts a full name as 
// an arg. The function should return the initials for that name.

let initials = function(name){
  let names = name.split(' ');
  console.log(names)
  let result = '';
  // iterate through the names
  // grab the first letter and capitalize it
  // concatenate it to a string to be returned
  for (let i = 0; i < names.length; i++){
    let firstChar = names[i][0].toUpperCase();
    result += firstChar;
  }
  return result;
}


console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'