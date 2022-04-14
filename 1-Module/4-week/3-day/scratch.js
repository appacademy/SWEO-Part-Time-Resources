// let myNum = 0;

// let otherFunc = function (arr) {
//   // let myNum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     myNum++;
//     console.log(myNum);
//   }
// };

// let exampleFunc = function (arr) {
//   // let myNum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     myNum++;
//     console.log(myNum);
//   }

// };

// exampleFunc([1, 2, 3]);
// console.log('_____________');
// otherFunc([1, 2, 3]);

// let globalScope = 'I am globally scoped';

// let myFunction = function (functionScope) {
//   let alsoFunctionScope = 'I am also function scoped';

//   if (!functionScope) {
//     let blockScope = 'I am block scoped';
//   }
// };

// myFunction('I am function scoped');

// let car = "vroom";
// function makeSounds(dogSound) {
//   let cow = "moo";
// 	let i = 100

//   if (true) {
//     let turkey = "gobble";

//     for (let i = 0; i < 2; i++) {
// 			// let turkey = "pls don't gobble"
//       console.log(car, dogSound, cow, turkey, i);
//     }
//   }
// }
// makeSounds("woof");

// let anotherTrueValue = true;

// let hungry = false;

// function sayHungry() {
// 	let hungry = true;
//   if (hungry) {
//     console.log("I'm hungry!");
//   } else {
//     console.log("I'm coding");
// 		console.log(hungry)
//   }

// 	// var hungry = true;

// }

// var str = "not apple";

// if (true) {
//   var str = "apple";

//   console.log(str);
// }

// const myStr;

// sayHungry();

// const aNum = [1, 2, 3];

// console.log(aNum);
// aNum.pop()

// console.log(aNum);

// const myFunction = function () {
// 	// const counter = 0;
// 	const arr = [];
// 	const obj = {}
// 	const myName = "Zaviar"
// 	let otherName = "Will"

// 	// for () {
// 	// 	counter++
// 	// }
// }

/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/

const minValueCallback = function (array, cb) {
  // let minVal = Math.min(...array);

  let minVal = array.reduce(function (prev, next) {
    if (prev < next) {
      return prev;
    } else {
      return next;
    }
  });

  // let minVal = Infinity; // array[0]

  // for (let i = 0; i < array.length; i++) {
  // 	if (array[i] < minVal) {
  // 		minVal = array[i]
  // 	}
  // }

  if (cb === undefined) {
    return minVal;
  } else {
    return cb(minVal);
  }
};

// console.log(minValueCallback([64, 25, 49, 9, 100])); // 9
// console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

/*******************************************************************************
Write a function `mapMutator` that accepts an array and a callback as arguments.
The function should pass each element and index into the callback and use the result
to overwrite elements of the original array, mutating the array.

Examples:

let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el) {
    return el * 2;
});
console.log(arr1);  // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
    return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]
*******************************************************************************/

const mapMutator = function (array, cb) {
  array.forEach(function (el, i) {
    array[i] = cb(el, i);
  });

  return array;
};

let arr1 = [4, 2, 6, 5];
mapMutator(arr1, function (el) {
  return el * 2;
});
console.log(arr1); // [ 8, 4, 12, 10 ]

let arr2 = [8, 9, 10];
mapMutator(arr2, function (el, i) {
  return el * i;
});
console.log(arr2); // [ 0, 9, 20 ]


/*******************************************************************************
Write a function `alternatingMap` that accepts an array and two callbacks as
arguments. The function should return a new array containing the results of passing
the original elements into the callbacks in an alternating fashion.

In other words,
    - the first element should be passed to callback 1
    - the second element should be passed to callback 2
    - the third element should be passed to callback 1
    - the fourth element should be passed to callback 2
    - ... and so on

Examples:

let triple = function (n) {
    return 3 * n;
};

let half = function (n) {
    return n / 2;
};
console.log(alternatingMap([7, 3, 2, 9, 8], triple, half));
// [ 21, 1.5, 6, 4.5, 24 ]


let yell = function (s) {
    return s.toUpperCase() + '!';
};

let whisper = function (s) {
    return '..' + s.toLowerCase() + '..';
};
console.log(alternatingMap(['hEy', 'EVERYone', 'whats', 'uP??'], yell, whisper));
// [ 'HEY!', '..everyone..', 'WHATS!', '..up??..' ]

*******************************************************************************/


// let alternatingMap = function(arr, cb1, cb2) {
//     let newArr = arr.map(function(el, i) {
//         if (i % 2 === 0){
//             return cb1(el)
//         } else return cb2(el)
//     })


//     return newArr
// };

let alternatingMap = function (array, cb1, cb2) {
	let result = [];

	for (let i = 0; i < array.length; i++) {
		if (i % 2 === 0) {
			result.push(cb1(array[i]));
		} else {
			result.push(cb2(array[i]));
		}
	}

	return result;
};

/*******************************************************************************
Write a function `xorSelect` that accepts an array and two callback as arguments.
The function should return a new array containing elements of the original array
that result in true when passed in one of the callbacks, but not both.

Examples:

let isEven = function(n) {
return n % 2 === 0;
};

let isPositive = function(n) {
return n > 0;
};

console.log(xorSelect([-2, -1, 1, 2, 3, 4], isEven, isPositive));
// [ -2, 1, 3 ]


let longString = function(s) {
return s.length > 4;
};

let startsA = function(s) {
return s[0] === "a";
};

console.log(
xorSelect(["art", "academy", "app", "cat", "buttery"], longString, startsA)
);
// [ 'art', 'app', 'buttery' ]
*******************************************************************************/

// let xorSelect = function(arr, cb1, cb2) {
//   let newArr = arr.filter(function(el){
//     return ((cb1(el) || cb2(el)) && !(cb1(el) && cb2(el)))
//   })
//   return newArr
// };


// let xorSelect = function(array, cb1, cb2) {
//   let result = []

//   for (let i = 0; i < array.length; i++){
//     if (cb1(array[i]) && !cb2(array[i])){
//       result.push(array[i])
//     } else if (cb2(array[i]) && !cb1(array[i])){
//       result.push(array[i])
//     }

//   }
//   return result
// };


let xorSelect = function(arr, cb1, cb2) {
let newArr = []

for(let i = 0; i < arr.length;i++){
	let el = arr[i]

	if((cb1(el) || cb2(el)) && !(cb1(el) && cb2(el))){
		newArr.push(el)
		// }else {
		//   !cb1(el), cb2(el)
	 }

}
return newArr
}