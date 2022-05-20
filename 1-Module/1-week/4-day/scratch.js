// Choose the problem in the most recent set that was the hardest 
// and lets do it together!

// ------------------Conditionals Demo-----------------

function getHeroQuote(hero) {

  if (hero === 'Ironman') {
    console.log('That man is playing Galaga')
  } else if (hero === 'Spiderman') {
    console.log('I\'m Spider-Man. Weird Things Happen To Me All The Time.')
  } else {
    console.log('What the heck, you\'re not a hero')
  }

}

// getHeroQuote('spiderman')

// -------------------While Loop Demo------------------

// let i = 0;

// while (i < 2) {
//   console.log('i is less than 2');
//   i++;
// };

// --------------------For Loop Demo-------------------

// for (let i = 0; i < 2; i++){
//   console.log('i is less than 2')
// }

// -------------------Array Demo------------------

// let nums = [1,2,3]; 
// console.log('original array', nums)
// // let array2 = [4,5,6]
// // console.log(array + array2)
// // console.log(array.concat(5))

// nums.push(4,5); // can one thing, or as many as you'd like
// console.log('after .push',nums);
// nums.pop(); // will only remove the last element.
// console.log('after .pop',nums);
// nums.unshift(-1, 0); // can add one thing, or as many as you'd like
// console.log('after .unshift',nums);
// nums.shift(); // will only remove the first element
// console.log('after .shift',nums);
// let copy = nums.slice(0,2); // starting index, ending index - not inclusive
// // if you want to copy the whole array, dont include any arguments. .slice();
// console.log('using .slice to copy',copy);
// console.log('original array after .slice', nums);
// nums.splice(1, 2); // start at index 1 and delete 2 things
// console.log('after the deletion splice', nums);
// nums.splice(1, 0, 7, 8, 9, 10); // start at index 1, delete 0 things, add all the rest
// console.log('after the addition splice', nums);

console.log('------string immutability demo-----');
let cars = ['ford', 'dodge', 'chevy'];
console.log(cars)
cars[0] = 'jeep';
console.log(cars)
let string = 'dog';
console.log(string)
string[0] = 'b'
string = 'bog'
console.log(string)


// ----------------------Problems----------------------
