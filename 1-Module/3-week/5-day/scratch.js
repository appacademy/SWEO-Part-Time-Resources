let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//forEach - can't return anything
let sumFE = 0;

array.forEach( (i, idx) => {
  sumFE += i;
  // console.log( i, idx );
} )

console.log('forEach: ', sumFE);
//map - returns an array
/*
let res = [];
for (let i = 0; i < array.length; i++) {
  res.push( array[i] * 2 );
}

let res = array.map( el => el * 2 );
*/
let newArr = array.map( (el, idx) => {
  if (el % 2 === 0) return 'even';
  else return 'odd';
} );
let regular = array.map( function(el) {
  return el * 2;
});

console.log('map: ', newArr);
// console.log( regular );

//filter - return an array of elements that returned truthy
// let filtered = array.filter( (el, idx) => {
//   if ( el % 2 === 0 ) {
//     return true;
//   } else {
//     return false;
//   }

//   return el % 2 === 0;
// })
let filtered = array.filter( (el) => el % 2 === 0 )

console.log('filter: ', filtered)
//reduce - returns a single variable
let sum = array.reduce( ( counter, el ) =>  {
  return counter += el * 3;
}, 0)
console.log('reduce: ', sum );

let words = ['how', 'are', 'you', 'luke']
/* 
let accum = ''

for (let i = 0; i < words.length; i++) {
  accum += el + ' ';
}
*/
let sent = words.reduce( (accum, el) => {
  return accum += ' ' + el + ' ';
}, '')
console.log( sent );