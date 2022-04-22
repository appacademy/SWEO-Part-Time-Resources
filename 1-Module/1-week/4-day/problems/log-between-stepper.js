// function logBetweenStepper(min, max, step){
// 	for(let i=min; i<=max; i+=5){
//     	console.log(i);
//     }
// }

function logBetweenStepper(min, max, step){
    let i = min;
    while(i <= max){
        console.log(i);
      i+=step;
    }
  }
  
  
  // Examples:
  logBetweenStepper(5, 9, 1); // prints out:
  // 5
  // 6
  // 7
  // 8
  // 9
  
  
  logBetweenStepper(-10, 15, 5)  // prints out:
  // -10
  // -5
  // 0
  // 5
  // 10
  // 15