// function eliminateType(arr) {
//   // Your code here
//   return function(str){
//     let returnArr = []
//     //Check if our str is the type of the current element
//     let copy = arr.slice()
//     // console.log("Arr", arr)
//     copy.forEach(el =>{
//       // console.log("EL", el)
//       // console.log("Str", str)
//       //if the type of the element is not equal to our string -- add it to returnArr
//       if(typeof(el) !== str){
//         returnArr.push(el)
//       }

//     })

//     return returnArr
//   }
// }c
function eliminateType(arr){

    return function(str){
      return arr.filter(el =>{ // return false
    return typeof(el) !== str
    })
    }
  }
