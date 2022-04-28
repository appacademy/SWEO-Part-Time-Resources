//understand problem
//mutate not return new array
//inputs:  ['a', 'b', 'c', 'd', 'e'] , rotate 2 times
//outputs: [ 'd', 'e', 'a', 'b', 'c' ]

let rotate = function(array, num){

    let newNum = (num + array.length)  % array.length;
    for(let i=0; i<newNum; i++){
        array.unshift(array.pop()); //pop removes element and gives us the element
    }
    
  }
  
  
  
  let arr = ['a', 'b', 'c', 'd', 'e'];
  rotate(arr, 2);
  console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]
  
  let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
  rotate(animals, -1);
  console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]