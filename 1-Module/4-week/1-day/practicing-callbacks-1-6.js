function myForEach(array, cb) {
	for (let i = 0; i < array.length; i++) {
		cb(array[i], i, array)
	}
}


function myMap(array, cb) {
	let newArr = []
	for (let i = 0; i < array.length; i++) {
		let newEle = cb(array[i])
		newArr.push(newEle)
	}
	return newArr
}


function multiMap(val, n, cb) {
	let i = 0;
	while (i < n) {
		val = cb(val)
		i++
	}
	return val
}


function myFilter(array, cb) {
	let newarr = []
	for (let el of array) {
		if (cb(el) === true) {
			newarr.push(el)
		}
	}
	return newarr
}


function selectiveMap(array, selector, mapper) {
	let newarr = []
	for (let i = 0; i < array.length; i++) {
		if (selector(array[i])) {
			newarr.push(mapper(array[i]))
		} else newarr.push(array[i])
	}
	return newarr
}


function reject(array, cb) {
	let newarr = [];
	for (let el of array) {
		if (!(cb(el))) newarr.push(el)
	}
	return newarr
}
