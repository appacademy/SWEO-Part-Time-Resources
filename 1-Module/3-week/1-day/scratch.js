//I: [1,2,3,4] ->
//O: [[0,1], [1,2], [2,3], [3,4]]

//I: ["Tom", "William", "Phillip"] ->
//O: [[0, "Tom"], [1, "William"], [2, "Philip"]]

// function zip(arr){
//   let res = [];

//   for(let i = 0; i < arr.length; i++){
//     let el = arr[i];
//     res.push([i, el])
//   }

//   return res;
// }

// console.log(zip(["Tom", "William", "Phillip"]));
// console.log(zip([1,2,3,4]));


/*
examples:
  input: 12
  output: [3, 5, 6, 9, 10]

  input: 20
  output: [3, 5, 6, 9, 10, 12, 18]

functions should return array
  - all positive nums
  - less than input
  - divisible by three OR five
  - NOT divisible by three AND five

plan:
  - call function fizzBuzz
  - create results array
  - loop over every num between 1 and input
    - if divisible by 3 OR by 5 (using %)
      - if !(divisible by 3 AND 5)
        - push i into results array
  - return results array


refactor:
1. xor function
2. Input === expr1, expr2 === boolean expressions
3. Output -> boolean
4. True if only one of expressions is true, otherwise false.
*/

function xor(expr1, expr2){
  return (expr1 || expr2) && !(expr1 && expr2);
}


function fizzBuzz(num) {
  let resultsArr = [];

  for (let i = 3; i < num; i++) {

    let expr1 = i % 3 === 0;
    let expr2 = i % 5 === 0;

    if(xor(expr1, expr2)){
      resultsArr.push(i);
    }

  }

  return resultsArr;
}


// console.log(fizzBuzz(12)); // [3, 5, 6, 9, 10]
console.log(fizzBuzz(20)); // [3, 5, 6, 9, 10, 12, 18]
