function linearSearch (arr, target) {
  // some condition ? return this if true : return this is false
  return arr.filter((el, i) => el === target ? i: false).length === 1 ? arr.filter((el, i) => el === target ? i: false)[0] : -1
    // for(let i = 0 ; i < arr.length ; i++){
    //   if(arr[i] === target){
    //     return i
    //   }
    // }
    // return -1
};

function binarySearch(arr, target) {

//   // Set integers pointing to the high and low range of possible indices
//   let low = 0;
//   let high = arr.length -1
//   // While high and low indices do not overlap...
//   while(low <= high){
//     // Find the midpoint between high and low indices
//     let mid = Math.floor((low + high) / 2)    
//     let compare = arr[mid]
//     // Compare the target value to the midpoint value
//     if(compare === target){
//       // If the target equals the midpoint...
//         // Return the midpoint index
//       return mid
//     }
//       // If the target is higher than the midpoint...
//     else if(target > compare){
//       // Move the low pointer to midpoint + 1
//       low = mid + 1
//     }
//     // If the target is less than the midpoint...
//     // if(target < compare){
//       else{
//       // Move the high pointer to midpoint - 1
//       high = mid -1
//     }
//   }
//   // Return -1 if the loop exits with overlapping pointers
//   return -1
}

module.exports = [linearSearch, binarySearch]