// const tripler = function (arr){
//   return arr.map(function(el) {
//     return el * 3;
//   })
// }

// const tripler = (arr) => {
//   return arr.map((el) => {
//     return el * 3
//   });
// }

// const tripler = arr => arr.map(el => el * 3);

// console.log(tripler([1,2,3]));



// const counter = () => {
//   let count = 0;

//   return () => {
//     count++;
//     return count;
//   }
// }


// const counterInstanceOne = counter();

// console.log(counterInstanceOne());
// console.log(counterInstanceOne());
// console.log(counterInstanceOne());

// const counterInstanceTwo = counter();
// console.log("version 2",counterInstanceTwo())
// console.log("version 2",counterInstanceTwo())
// console.log("version 2",counterInstanceTwo())
// console.log("version 2",counterInstanceTwo())
// console.log("version 2",counterInstanceTwo())


// console.log("version 1", counterInstanceOne());

// console.log(counter()());


const robotFactory = () => {
  console.log('building robot');
  const names = [];

  return (name) => {
    names.push(name);
    if(names.length > 3) {
      return "Initiating self destruct caused by: " + names.join(" ");
    }
    return 'Hello ' + name + "!";
  }
}


const robotOne = robotFactory();
const robotTwo = robotFactory();

console.log(robotOne('William'));
console.log(robotOne("Gred"));
console.log(robotOne('Phillip'));
console.log(robotOne('Grace'));

console.log(robotTwo('Tom'));
console.log(robotTwo('Person'));
