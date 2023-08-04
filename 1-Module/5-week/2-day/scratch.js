/*
Below are 3 examples of a function that uses recursion
to solve the same problem again and again.
Set up a number and multiply every number from 1 up to that number given
and return an end result of the final product.
*/

let recursiveProduct = (limit) => {
	if (limit === 1) return 1
	return recursiveProduct(limit - 1) * limit
} 


// console.log(recursiveProduct(1))
// console.log(recursiveProduct(2))
// console.log(recursiveProduct(3))
console.log(recursiveProduct(4))







let dualArgProduct = (num, product = 1) => {
	if (num === 0) return product
	return dualArgProduct(num - 1, product * num) 
}


// console.log(dualArgProduct(1))
// console.log(dualArgProduct(2))
// console.log(dualArgProduct(3))
console.log(dualArgProduct(4))








let restedProd = (...nums) => {
	if (nums.length === 0) return 1
	else {
		let num = nums.pop()
		return num * restedProd(...nums)
	}
}


// console.log(restedProd(1))
// console.log(restedProd(1, 2))
// console.log(restedProd(1, 2, 3))
console.log(restedProd(1, 2, 3, 4))
