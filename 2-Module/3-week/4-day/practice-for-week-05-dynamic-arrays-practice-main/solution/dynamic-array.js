class DynamicArray {

  constructor(defaultSize=4) {
	  this.data = new Array(defaultSize)
	  this.capacity = defaultSize;
	  this.length = 0;
  }

  read(index) {
	return this.data[index];
  }
  unshift(val) {
	for (let i = this.length; i > 0; i--) {
		this.data[i] = this.data[i - 1];
	}

	this.data[0] = val;
	this.length++;
  }

//   unshift(val) {
// 	const newArr = [val]
// 	const arrLength = this.length
// 	const currArr = this.data.reverse()
// 	for(let i = 0; i < arrLength; i++){
// 		const currentEl = currArr.pop()
// 		newArr.push(currentEl)
// 	}
// 	this.length += 1
// 	this.data = newArr;

// 	return newArr
// 	}
}


// []


module.exports = DynamicArray;
