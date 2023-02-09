
// const add = (num1, num2) => {
//   try {
// 		if (typeof num1 === "number" && typeof num2 === "number"){
// 			return num1 + num2;
// 		} else {
// 			throw new TypeError('Please input a number')
// 		}
//   } catch (e) {
//     console.error(e.message);
//   }
// 	return "nothing"
// };
// console.log(add(4, 5))
// console.log(add("banana", "orange"))

// console.log('something')
// console.log('something')
// console.log('something')
// console.log('something')
// console.log('something')
// console.log('something')


function safeDivide(a, b) {
    if (b === 0) {
      throw new Error("cannot divide by zero");
    } else {
      return a / b;
    }
  }
  
  try {
    console.log(safeDivide(30, 0)); // prints 6
  } catch (error) {
    console.error(error.name + ": " + error.message);
  }
  
  console.log("hello");