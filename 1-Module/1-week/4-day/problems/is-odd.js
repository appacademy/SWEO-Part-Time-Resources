function isOdd(num) {
	// if(num % 2 === 1){
	// return true;
	// }
	// else if(num % 2 === -1){
	// return true;
	// }
	// return false;
  	if( num % 2 !== 0){
    	return true;
    }
  	return false;

  
}



console.log(20 % 2)
console.log(21 % 2)
console.log(-17  % 2)
console.log(-18 % 2)


console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true