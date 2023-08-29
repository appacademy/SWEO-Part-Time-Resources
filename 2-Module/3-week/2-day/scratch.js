/*
O(n) and O(n2) 
*/

// function addNums(n) {
//   total = 0;
//   for (let i = 1 ; i <= n ; i++) {
//     total += i;
//   }
//   return total;
// }


// num = 5000
// for (let i = 0; i < 25; i++) {
// 	num *= 1.5;
// 	startTime = Date.now();
// 	addNums(num);
// 	endTime = Date.now();
// 	console.log(`${endTime - startTime}`); 
// }




function addNested(n) {
  total = 0;
  for (let i = 1 ; i <= n ; i++) {
    for (let j = 1; j <= n; j++) {
			total += j
		}
  }
  return total;
}


num = 50
for (let i = 0; i < 25; i++) {
	num *= 1.5;
	startTime = Date.now();
	addNested(num);
	endTime = Date.now();
	console.log(`${endTime - startTime}`); 
}
