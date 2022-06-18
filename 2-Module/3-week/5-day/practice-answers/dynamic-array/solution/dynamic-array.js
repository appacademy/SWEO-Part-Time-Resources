//! Dynamic Array Practice
class DynamicArray {

  constructor(defaultSize=4) {
    this.capacity = defaultSize
    this.data = new Array(defaultSize)
    this.length = 0
    // Fill this out
  }

  read(index) {

    // Fill this out
    // You may not use any built-in JS array functions
    if (index >= this.length) return undefined
    return this.data[index]

  }

  unshift(val) {

    // Fill this out
    // You may not use any built-in JS array functions

  
    for (let i = this.length; i > 0; i--){ //start from one after the end
      this.data[i] = this.data[i - 1] //move the last element over to the right one, and keep doing that
    }

    //add the newest element to the front.
    this.data[0] = val
    this.length++


  }

}


module.exports = DynamicArray;