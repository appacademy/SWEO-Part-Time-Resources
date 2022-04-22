//----------------------understanding truthy and falsy----------------------
// console.log(300 === 300);

// if(300 === 300){
// 	console.log("300!!!!"); //this will print because the expression (300 === 300) will evaluate to true
// }

// console.log(300 === true);
// if(300 === true){
// 	console.log("TRUELY 300!!");
// }

// if([]){
// 	console.log("EMPTY ARRAY");
// }

//[] --> under the truthy umbrella
// true --> under the truthy umbrella
// console.log([] === true); //even though both under truthy, they are not equal to each other.


// if (false === false) {  //false === false --> true --> true is TRUTHY
//     console.log("IS THIS TRULY FALSE?");
// }

// if (0) { //0 fallse under the falsy umbrella!
//     console.log("first index is always 0");
// }

// if (0 === 0) { // 0 === 0 --> true --> true is truthy
//     console.log("0___0");
// }

// console.log(0 === false); //0 is not strictly equal to false

if (true) { 
    if (true === 'true'){ //expression of true === 'true' --> false --> false is a falsy value
        console.log("trueception");
    }
}