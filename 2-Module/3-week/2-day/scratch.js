// Big O Examples

// O(1)
// accessing element of array
// returns element of an input array given the index
function getElement(arr, index) {
  return arr[index];
}

// O(1)
// inserting to end of array
// adds input element to end of input array
function addElement(arr, element) {
  arr.push(element);
}

// O(n)
// adds 5 to every element in the array
function addFiveToArray(arr) {
  arr.forEach((index) => {
    arr[index] = arr[index] + 5;
  });
}

// O(n)
// prints every value of array
function printArr(arr) {
  arr.forEach((el) => {
    console.log(el);
  });
}

// O(n^2)
// add each element to every other element in an array          i     j
function nestedComparison(arr) {
  let result = []
  //                           [0,1,2,3,4,5,6]
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      result.push(j)
    }
  }
}

// time complexity
// array insertions/deletions at the beginning of array will be o(n) (at a minimum)

// array insertions/deletions at the end of an array will always be o(1)

// let total = 0
// console.time("Timer 1")
// const startTime = Date.now()
// for(let i = 0; i < 100000000; i++){
//     total += i
// }
// const endTime = Date.now()
// console.timeLog("Timer 1")

// console.log(endTime - startTime)

function addNums(n) {
  total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
}

let increment = 1000000;
for (let n = increment; n <= 10 * increment; n += increment) {
  startTime = Date.now();
  addNums(n);
  endTime = Date.now();

  console.log(`${endTime - startTime}`);
}


// Count how many animals are in the list
// Time complexity: O(?)
// Space complexity: O(?)
function countAnimals(animals) {
  let count = 0;
  for (let i = 0 ; i < animals.length ; i++) {
    count++;
  }
  return count;
}

// Count how many animals are in the list
// Time complexity: O(?)
// Space complexity: O(?)
function countAnimals2(animals) {
  return animals.length;
}

// Print the first 10 animals in the list
// Time complexity: O(?)
// Space complexity: O(?)
function printTenAnimals(animals) {
  if (animals.length < 10) {
    throw Error("not enough animals")
  }

  console.log(animals[0]);
  console.log(animals[1]);
  console.log(animals[2]);
  console.log(animals[3]);
  console.log(animals[4]);
  console.log(animals[5]);
  console.log(animals[6]);
  console.log(animals[7]);
  console.log(animals[8]);
  console.log(animals[9]);
}



// Print out all the animals
// Time complexity: O(?)
// Space complexity: O(?)
function printAnimals(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
}

// Print out all the animals twice
// Time complexity: O(?)
// Space complexity: O(?)
function printAnimalsTwice(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    console.log(animals[i]);
  }
  for (let j = 0 ; j < animals.length ; j++) {
    console.log(animals[j]);
  }
}

// Print all possible pairs of animals
// Time complexity: O(?)
// Space complexity: O(?)
function printAnimalPairs(animals) {
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      console.log(`${animals[i]} - ${animals[j]}`);
    }
  }
}

// Return an array containing all possible pairs of animals
// Time complexity: O(?)
// Space complexity: O(?)
function getAnimalPairs(animals) {
  const pairs = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      pairs.push([animals[i], animals[j]]);
    }
  }
  return pairs;
}


// Return an array containing all possible pairs of animals
// Time complexity: O(?)
// Space complexity: O(?)
function getAnimalTriples(animals) {
  const triples = [];
  for (let i = 0 ; i < animals.length ; i++) {
    for (let j = 0 ; j < animals.length ; j++) {
      for (let k = 0 ; k < animals.length ; k++) {
        triples.push([animals[i], animals[j], animals[k]]);
      }
    }
  }
  return triples;
}

// Returns the index of the animal if it is in the array
// Returns -1 if it is not in the array
// Time complexity: O(?)
// Space complexity: O(?)
function findAnimal(animals, target) {
  for (let i = 0 ; i < animals.length ; i++) {
    if (animals[i] === target) return i;
  }
  return -1;
}
