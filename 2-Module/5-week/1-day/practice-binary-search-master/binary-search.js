function linearSearch (arr, target) {
<<<<<<< HEAD
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
=======
  return arr.indexOf(target)

  // for(let i =0; i < arr.length; i++){
  //   if(arr[i] === target){
  //     return i
  //   }
  // }
  // return -1
  

};

let example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

function binarySearch(arr, target) {

  // Set integers pointing to the high and low range of possible indices
  let low = 0
  let high = arr.length - 1
  // While high and low indices do not overlap...
    while(low <= high){
      // Find the midpoint between high and low indices
      let mid = Math.floor((low + high) / 2)
      // console.log('************')
      console.log("MidPoint", mid)
      // console.log('************')
      console.log("Array", arr.slice(low, high + 1))
      // console.log('************')
      console.log(arr[mid])
      // console.log('************')
      let compare = arr[mid]
      // Compare the target value to the midpoint value
      // If the target equals the midpoint...
      if(target === compare){
        // Return the midpoint index
        return mid
      }
      // If the target is higher than the midpoint...
      if(target > compare){
        // Move the low pointer to midpoint + 1
        low = mid + 1
      }
      // If the target is less than the midpoint...
      if(target < compare){
        // Move the high pointer to midpoint - 1
        high = mid -1
      }
    }

  // Return -1 if the loop exits with overlapping pointers
  return -1

}
binarySearch(example, 8)

>>>>>>> 2022-Jan-W

module.exports = [linearSearch, binarySearch]