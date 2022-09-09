
// const add = (num1, num2) => {
//   try {
    
// 		if (typeof num1 === "number" && typeof num2 === "number"){
// 			return num1 + num2;
//             const something = ''
// 		} else {
// 			throw new TypeError('Please input a number')
// 		}
//   } catch (error) {
//     console.error(error.message);
//     // console.log(error)
//   }
//   return 'something'
// }
//   console.log(add(3, 5))
//   console.log((add("banana", "orange")));

//   console.log('something')
//   console.log('something')
//   console.log('something')
//   console.log('something')
//   console.log('something')
//   console.log('something')

const safeDivide = (a, b) => {
    if(b === 0){
        throw new Error('cannot divide by zero')
    } else {
        console.log(a / b)
        return a / b
    }
}

try{
    console.log(safeDivide(81, 9))
    safeDivide(10, 0)
} catch(e){
    console.log(`${e.name}: ${e.message}`)
}

console.log('something else')
