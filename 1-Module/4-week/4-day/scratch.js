// const tripler = function(arr){
//   return arr.map(function(el){
//     return el * 3;
//   })
// }

// const tripler = (arr) => arr.map((el) => el * 3);

// console.log(tripler([1,2,3]));


// const counter = () => {
  // let count = 0;

  // return () => {
    // count++
    // return count;
    // return ++count;

    // postfix and prefix operator
    // count++ ++count
    //count++ increments after count evaluates
    //++count increments before count evaluates
  // }
// }

// const countInstanceOne = counter();

// console.log(counter());

// console.log(countInstanceOne());

// const countInstanceTwo = counter();
// console.log(countInstanceOne()); //2

// console.log(countInstanceTwo());


const robotFactory = () => {
  console.log("Building a robot....")
  const names = [];

  return (name) => {
    names.push(name);
    console.log(names);
    if(names.length > 3){
      return "Initiating self destruct...."
    }
    return 'Hi ' + name + "!";
  }
}

const robotOne = robotFactory();
const robotTwo = robotFactory();



console.log(robotOne('William'));
console.log(robotTwo('Tom'));
console.log(robotOne('Phillip'));
console.log(robotOne('Mylo'));
console.log(robotOne('Grace'));
console.log(robotTwo('Person'));
