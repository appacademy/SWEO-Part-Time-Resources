const adjList = {
  1: [2, 5], //[[1, 2], [1, 5]]
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
};

// const aShortestPath = (start, end) => {
//   let queue = [[start]];
//   let visited = new Set().add(start);

//   while(queue.length){
//     // console.log(queue);
//     let curPath = queue.shift(); //[1,2]
//     // console.log(curPath);
//     let lastNode = curPath[curPath.length - 1];
//     // console.log(lastNode);

//     if(lastNode === end) return curPath;

//     adjList[lastNode].forEach(el => {
//       if(!visited.has(el)){
//         visited.add(el);
//         queue.push([...curPath, el]);
//       }
//     });
//   };
//   return false;
// };

// console.log("First Test:");
// console.log(aShortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log("Second Test:");
// console.log(aShortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log("Third Test:");
// console.log(aShortestPath(6, 1)); // -> false


const degreesOfSeparation = (start, end) => {
  let queue = [[start]];
  let visited = new Set().add(start);

  while(queue.length){
    // console.log(queue);
    let curPath = queue.shift(); //[1,2]
    // console.log(curPath);
    let lastNode = curPath[curPath.length - 1];
    // console.log(lastNode);

    if(lastNode === end) return curPath.length - 1;

    adjList[lastNode].forEach(el => {
      if(!visited.has(el)){
        visited.add(el);
        queue.push([...curPath, el]);
      }
    });
  };
  return false;
}


console.log("First Test:");
console.log(degreesOfSeparation(1, 3)); // -> 2
console.log("Second Test:");
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log("Third Test:");
console.log(degreesOfSeparation(6, 1)); // -> false
