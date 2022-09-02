// blank on purpose
const arr = ['one', 2, 3.1, {four: 4, five: 5}];
let json = JSON.stringify(arr);
console.log(json);
// ["one",2,3.1,{"four":4,"five":5}]

let js = JSON.parse(json);
console.log(js)
// [ 'one', 2, 3.1, { four: 4, five: 5 } ]