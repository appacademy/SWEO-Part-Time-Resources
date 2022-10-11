

// let firstName = "JIMMY";
// let lastName = "Bob";

// // console.log("Hello," + " " + firstName + " " + lastName + "!")
// // console.log(`Hi my name is will ${newVariable}`)
// let obj = {
//     name: "JOHNNY"
// }
// let greeting = `Hello, ${obj.name} ${lastName}!`;

// console.log(greeting)

// // console.log('That\'s')

// // console.log(`that's ${firstName} \$\{\}`)


// console.log(greeting);


// const nameFunc = str => {
// 	return str
// }

// let greeting = `Hello, ${nameFunc(firstName)} ${lastName}!`;
// console.log(greeting);

//--------------------------------------------------------------------------------------
const arr = [1, 2, 3, 4, 5];

const myFunc = (arr) =>{
 
    debugger;
    let sum = 0;
    debugger;
    for (let i = 0; i < arr.length; i++) {
        debugger;
        let eachNum = arr[i]
        sum += eachNum
        debugger;
        // console.log("SUM", sum)
    }
    return sum
}

console.log(myFunc(arr))


// const recurseSum = (arr) => {
//     debugger;
//     if (arr.length === 1) {
//         debugger;
//           return arr.pop();
//       }
//       debugger;
//     return arr.pop() + recurseSum(arr);
//   };

//   console.log(recurseSum(arr));
