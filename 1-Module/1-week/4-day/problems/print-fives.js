
// Example:
// function printFives(num){
// 	for(let i = 0; i<num; i+=5){
//       console.log(i);
//     }
// }

function printFives(num){
    let i = 0;
    while(i < num){
        console.log(i); //0 // 5 / 10
      i = i + 5; 
    }
  }
  
  printFives(20) // prints out:
  // 0
  // 5
  // 10
  // 15
  
  // printFives(100)