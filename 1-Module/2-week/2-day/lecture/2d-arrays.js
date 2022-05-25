console.log("-----------------------------------------------------------------------------------");
console.log("---------------------------access data 2d arrays example---------------------------");
console.log("-----------------------------------------------------------------------------------");

let notebooks = [['note1', 'note2', 'note3'], 
                 ['note4', 'note5', 'note6'], 
                 ['note7', 'note8', 'note9']]
                 
// In order to access each inner array, you just index as you would any element.
// console.log(notebooks[1]);
// console.log(notebooks[1][1])


// in order to access each element inside of an inner array, you must first index
// into that array, then add another index representing the element inside.



console.log("-----------------------------------------------------------------------------------");
console.log("----------------------------iterating over 2d arrays-------------------------------")
console.log("-----------------------------------------------------------------------------------");

// 2D arrays are also referred to as matrices (matrix singular). You can think of 
// each subarray as a row and each element in a subarray as being an element in a column.
// use good descriptive variables to keep yourself from getting confused!

let meals = [['eggs', 'toast', 'bacon'], 
             ['sushi', 'tea'], 
             ['steak', 'asparagus', 'potatoes']]


for (let i = 0; i < meals.length; i++){
  let subArray = meals[i];
  console.log('-------', subArray)
  for (let j = 0; j < subArray.length; j++){
    let ele = subArray[j];
    console.log(ele);
  }
}


