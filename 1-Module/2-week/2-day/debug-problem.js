// https://open.appacademy.io/learn/js-py---pt-apr-2022-online/week-1---intro-to-javascript/pairs-maker

console.log("-----debug this problem-----")
/*
Provided this incorrect function below. Debug the problem by following these hints.

- Rewrite to console.log the return value first, before returning it.

- try changing a few things. There are 2 incorrect bugs in this function. They are very subtle, but look at the inputs and outputs. 
*/

let uniquePairsMaker = function (arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let letter = arr[i];
        for (let j = 0; j < arr.length; j++) {
            let secondLetter = arr[j];
            newArr.unshift([letter, secondLetter]);
        }
    }
    console.log(newArr);
    return newArr;
}

uniquePairsMaker(['a', 'b', 'c', 'd']); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

uniquePairsMaker(['Rosemary', 'Alex', 'Connor']); // =>
  // [ [ 'Rosemary', 'Alex' ],
  //   [ 'Rosemary', 'Connor' ],
  //   [ 'Alex', 'Connor' ] ]
