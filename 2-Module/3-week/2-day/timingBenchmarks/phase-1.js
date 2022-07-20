// Remember time complexity is soley based on input! If the loop is not based on our input - it's probably constant!
// If there is no loop, it's definitely constant!
// if there is a loop based on our input - that loop is linear.
// if there is a function called inside the loop, we find the time complexity of that function and factor that in
// if the function inside the loop is linear - and our loop is linear - that's n things happening n amount of times 
// and our time complexity will be quadratic for that function.
// if the function inside the loop is quadratic - and our loop is linear - that's n^2 things happening n times, 
// and our time complexity would be cubic O(n^3)! We didnt go over that one today.

// Adds up positive integers from 1-n
function addNums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++){ // single loop based on our input makes this linear O(n) time complexity.
    sum += i;
  }
  return sum;
}

// time = linear O(n)
// space variables: n = integer (constant) / sum = integer (constant) / i = integer (constant)
// space = constant O(1)


// Adds up values of addNums(1) through addNums(n)
function addManyNums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++){ // single loop based on our input makes this linear O(n) time complexity.
    sum += addNums(i); // linear function being ran n times - that's n amount of things happening n amount of times makes this now Quadratic time complexity O(n^2)
  }
  return sum;
}

// time = quadratic O(n^2)
// space variables: n = integer (constant) / sum = integer (constant) / i = integer (constant)
// space = constant O(1)

module.exports = [addNums, addManyNums];