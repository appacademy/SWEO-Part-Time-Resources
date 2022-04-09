function range(start, end) {
	if ( end <= start){
	  return []
	}

	let num = range(start, end -1)
	num.push(end-1)
	// console.log(num, ' this is num')
	return num
}

// console.log(range(1,9))


// function range(start, end, arr = []){
// 	if (end <= start){
// 		return arr
// 	}
// 	arr.push(start)
// 	console.log(arr, ' this is arr')
// 	return range(start + 1, end, arr)
// }

// console.log(range(1,9))

function append(value, array = []) {
	array.push(value)
	return array
}

// console.log(append(1)) // [1]
// console.log(append(4)) // [4]


function greet(name, greeting, message = greeting + ' ' + name) {
	return [name, greeting, message]
}


// console.log(greet("Alex", "Hello"))
// console.log(greet("Patrick", "Hello", "I love javascript"))

function test(a = 1, b){
	console.log(a)
	console.log(b)
}

test(2, 'hello')
