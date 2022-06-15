// export function substract(num1, num2){
// 	console.log(num1 - num2)
// }

export default function divide(num1, num2){
	console.log(num1 / num2, ' divide')
}

function substract(num1, num2){
	console.log(num1 - num2, ' minus')
}

function multiply(num1, num2){
	console.log(num1 * num2)
}

let randomNumber = 123


// named exports
export {
	substract,
	multiply,
	randomNumber,
}
