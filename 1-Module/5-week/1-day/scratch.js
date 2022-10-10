// let firstName = "Will";
// let lastName = "Duffy";

// let greeting = `Hello, ${firstName} ${lastName}!`;

// console.log(greeting);


// const nameFunc = str => {
// 	return str
// }

// let greeting = `Hello, ${nameFunc(firstName)} ${lastName}!`;
// console.log(greeting);

//--------------------------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];

// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	let eachNum = arr[i]
// 	sum += eachNum
// }

// console.log(sum)


const recurseSum = (arr) => {
    debugger
    if (arr.length === 1) {
          return arr.pop();
      }
    return arr.pop() + recurseSum(arr);
  };

  console.log(recurseSum(arr));
