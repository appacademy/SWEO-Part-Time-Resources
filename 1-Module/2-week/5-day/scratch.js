// // Plan
// - create initial res = [];
// - create dir variable = "r"
// - while (array.length)
// - if direction = "r", grab first subArr
//   - change dir = "d"
// - if direction = "d", iterate thru rest of subarrays and pop off last val
//   - change dir = "l"
// - if direction = "l", pop off last subarr and reverse values
//   - change dir = "u"
// - else, iterate thru rest of subarrays and take off from front
  
  
function spiralOrder(matrix) {
    let res = [];
    let dir = "r";
    
    while (matrix.length) {
      if (dir === "r") {
        let firstSubArr = matrix.shift();
        res.push(...firstSubArr)
        console.log(res)
        dir = "d"
      } else if (dir === "d") {
        for (let i = 0; i < matrix.length; i++) {
          let subArr = matrix[i];
          let lastVal = subArr.pop();
          
          res.push(lastVal);
          console.log(res)
          dir = "l";
        }
      } else if (dir === "l") {
        let lastSubArr = matrix.pop();
        res.push(...lastSubArr.reverse());
        console.log(res)
        dir = "u";
      } else {
        for (let i = matrix.length - 1; i >= 0; i--) {
          let subArr = matrix[i];
          res.push(subArr.shift());
          console.log(res);
          
          dir = "r";
        }
      }
    };
    
    return res;
  };