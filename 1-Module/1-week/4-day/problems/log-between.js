// Examples:
function logBetween(lowNum, highNum){
	// for(let i=lowNum; i<=highNum; i++){
	// console.log(i);
	// }
  	let i = lowNum;
  	while(i<=highNum){
    	console.log(i);
      	i = i + 1;
    }
}

logBetween(-1, 2); // prints out:
// -1
// 0
// 1
// 2

logBetween(14, 6); // => prints nothing

logBetween(4, 6); // prints out:
// 4
// 5
// 6