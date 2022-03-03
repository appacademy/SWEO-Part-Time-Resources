//? What is a class?
// - Blueprint for something I want to use over and over again

// String primitive type has no methods

// class MyArray {
// 	constructor() {

// 	}
// }

// const myMyArr = MyArray() // throws an error

// const myArr = new Array(5, 'hellow', null, [1, 2]);
// const myArr = new Array('hellow');
// myArr[3] = undefined
// myArr.push(35);
// class Array {
// 	constructor() {
// 		this.arr = []
// 		this.length = 0
// 	}

// 	push() {
// 		this.length++
// 	}
// }

// const myArr = [8, 2];
// const l = 'length';
// console.log(myArr);
// console.log(myArr[0]);
// console.log(myArr[l]);
// console.log(myArr.slice());

// const myObj = {
//   aProp: 25,
//   aFunc: () => {
//     console.log('Hey look at me');
//   },
// };

// console.log(myObj.aProp);

// class ChipotleBurrito {
//   constructor(meat, fillings = [], wrapCount = 1) {
//     let protein = meat;
//     this.fillings = fillings;
//     this.tortillaType = 'corn';
//     this.wrap = wrapCount;
//     this.printExample(protein);
//   }

//   doorDash() {
//     let wrapStr;
//     if (this.wrap === 1) {
//       wrapStr = 'single';
//     } else {
//       wrapStr = 'double';
//     }
//     return `Order me a ${protein} burrito with a ${wrapStr} ${
//       this.tortillaType
//     } tortilla with these fillings: ${this.fillings.join(', ')}`;
//     // return `Order me a ${this.protein} burrito with a ${
//     //   this.wrap === 1 ? 'single' : 'double'
//     // }`;
//   }

//   printExample(string) {
//     console.log(string);
//   }
// }

// const myOrder = new ChipotleBurrito(
//   'Chicken',
//   ['White Rice', 'Black Beans', 'Sour Cream', 'Salsa', 'Guac'],
//   2
// );

// const baylenOrder = new ChipotleBurrito('Carnitas', [
//   'Brown Rice',
//   'Pinto Beans',
// ]);

// console.log(typeof myOrder);

// // console.log(myOrder);
// console.log(myOrder.doorDash());
// console.log(
//   '*****************************************************************'
// );
// console.log(baylenOrder.doorDash());

// const aFunc = (aNum, aStr) => {
// 	console.log(aNum, aStr)
// }

// console.log(aFunc(["string"]))

// const myObj = {
//   aStr: 'Heyyyoooo',
//   aNotherFunc: function () {
//     console.log(this);
//   },
//   anInnerObj: {
//     aProp: 25,
//     aFunc: function () {
//       console.log(this);
//     },
//   },
// };

// myObj.anInnerObj.aFunc();
// myObj.aNotherFunc();
// let b = 2;
// a = 1;
// function baylensExample() {
//   console.log(this);
// }

// baylensExample();

// class GamingPc {
//   constructor(gpu, cpu, rgb) {
//     this.gpu = gpu;
//     this.cpu = cpu;
//     this.rgb = rgb;
//     // this.mobo = mobo;
//     // this.pws = pws;
//     // this.fans = fans;
//     // this.ram = ram;
//     // this.pcCase = pcCase;
//     // this.storage = storage;
//   }

//   willItRun(name) {
//     if (name === 'Elden Ring') {
//       if (Number(this.gpu[0]) < 2) {
//         this.bottleneck(this.gpu);
//       } else console.log('Good to Game');
//     }
//   }

//   bottleneck(...components) {
//     console.log('Your bottleneck is your', components[0]);
//   }
// }

// const zavPC = new GamingPc('2080', 'i7-9700k', true);
// const baylensPC = new GamingPc('1060', 'i3-6100k', true);

// zavPC.willItRun('Elden Ring');
// baylensPC.willItRun('Elden Ring');

// class Dog {
//   constructor(name, breed, weight, injury, favToy) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
//     this.injury = injury;
//     this.favToy = favToy;
//   }

//   wagTail() {}

//   fetchBall() {}

//   countWags() {}
// }



// // Choose either class, 3 params, 1 method - async

// class Icecream {
// 	constructor() {

// 	}
// }

// class Bike {
// 	constructor() {

// 	}
// }