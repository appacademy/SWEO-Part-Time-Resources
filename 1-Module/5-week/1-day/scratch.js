// let firstName = 'Foul';
// let lastName = 'Tarnished';

// const giveAName = (str) => {
//   return str;
// };

// let greeting = `Hello, ${giveAName(firstName)} ${lastName}!` + " Haha";

// console.log(greeting);

// const arr = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   let eachNumber = arr[i];
//   sum += eachNumber;
// }

// console.log(sum);

// const recurseSum = (arr) => {
//   if (arr.length === 1) return arr.pop();

//   return arr.pop() + recurseSum(arr);
// };

// // const array = [1];

// console.log(recurseSum(arr));

const firstTime = ([1, 2, 3, 4, 5]) => {
  // if (arr.length === 1) return arr.pop();

  return 5 + secondTime([1, 2, 3, 4]); // 5 + 10 => 15
};

const secondTime = ([1, 2, 3, 4]) => {
  // if (arr.length === 1) return arr.pop();

  return 4 + thirdTime([1, 2, 3]); // 4 + 6 => 10
};

const thirdTime = ([1, 2, 3]) => {
  // if (arr.length === 1) return arr.pop();

  return 3 + fourthTime([1, 2]); // 3 + 3 => 6
};

const fourthTime = ([1, 2]) => {
  // if (arr.length === 1) return arr.pop();

  return 2 + fifthTime([1]); // 2 + 1 => 3
};

const fifthTime = ([1]) => {
  if (arr.length === 1) return 1; // 1

  // return arr.pop() + sixthTime(arr);
};