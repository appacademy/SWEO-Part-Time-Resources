// function avgVal(arr){
// 	let sum = null;
//   	for(let i=0; i<arr.length; i++){
//     	let num = arr[i]; // [5,10] --> at i = 0 --> 5
//       	sum += num / arr.length;
// 	}
//   	return sum;
// }

function avgVal(arr){
    if(arr.length === 0){
      return null;
  }
    let sum = 0;
    for(let i=0; i<arr.length; i++){
      let num = arr[i]; // [5,10] --> at i = 0 --> 5
        sum += num;
  }
    let average = sum / arr.length;
    return average;
}
