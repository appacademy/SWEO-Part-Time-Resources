class Calculator{
	constructor(){
		this.total = 0;
	}
	add(num){
		return this.total += num;
	}
	subtract(num){
		this.total -= num;
		return this.total;
	}
	divide(num){
		this.total /= num;
		return this.total;
	}
	multiply(num){
		return this.total *= num;
	}
}

const subtractor = new Calculator();
console.log(subtractor.subtract(10))


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}