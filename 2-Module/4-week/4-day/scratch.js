//   function simpleHash(str) {
//     let hashValue = 0;
  
//     for (let i = 0 ; i < str.length ; i++) {
//       hashValue += str.charCodeAt(i);
//     }
  
//     return hashValue;
//   }
// console.log(simpleHash('listen'));
// console.log(simpleHash('brooooo'));
// console.log(simpleHash('Its brittney'));
// console.log(simpleHash('Its brittney'));
// console.log(simpleHash('Its brittney'));
// console.log(simpleHash('Its brittney'));



// const isUnique = (arr) => {
//   let set = new Set(arr);
//   return set.size === arr.length;
// };

// console.log(isUnique([1, 2, 3])); // t or f
// console.log(isUnique([1, 2, 3, 1])); ///t or f

// const mySet = new Set()
// let thing = {name: 'jamees'}

// mySet.add(1)
// mySet.add(2)
// mySet.add(3)
// mySet.add(1)
// mySet.add(thing)
// mySet.add([1,2,3,4,5,6,7,8,9])
// mySet.add([1,2,3,4,5])

// console.log(mySet, 'before deletion')
// mySet.delete(thing)
// console.log(thing, 'line 40')
// console.log(mySet, 'afeter deletion')
// for(let item of mySet){
//   console.log(item)
// }