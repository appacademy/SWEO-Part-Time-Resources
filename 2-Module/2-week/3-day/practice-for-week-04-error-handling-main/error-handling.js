// 1.
function sum(array) {
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
	  sum += array[i];
	}

	return sum;
  }

  // function sum(array) {
  // 	try {
  // 		if(!Array.isArray(array)){
  // 			      throw new error();
  // 		}
  // 		let sum = 0;
  // 		for (let i = 0; i < array.length; i++) {
  // 			sum += array[i];
  // 		}
  // 		return sum;
  // 	} catch {
  // 		console.error(`${array} is not an array.`)
  // 	}

  // }

  // let res = sum(null);
  // console.log(res);

  // try {
  // 	let res = sum(null);
  // 	console.log(res);
  // } catch {
  // 	console.log("Not an Array!")
  // }

  try {
	  let res = sum(null);
	  console.log(res);
	} catch (e) {
	  if (e instanceof TypeError) {
		console.error("bad type error");
	  } else {
		console.log(e.message);
	  }
  }


  // try {
  // 	if (!Array.isArray(array)) {
  // 	  throw new Error('Not an array');
  // 	}
  //   } catch(e) {
  // 	console.log(e);
  // }


  // function sayName(name){
  // 	try{
  // 	  if(typeof name !== 'string'){
  // 		console.log("Invalid name, not a string")
  // 		throw new Error('Invalid input not a string')
  // 	  }else{
  // 		console.log(name)
  // 	  }
  // 	}
  // 	 catch(e){
  // 	  sayName(e.message)
  // 	 }
  // }

  // function sayName(name) {
  // 	try {
  // 	  // pseudocode
  // 	  if (typeof name !== "string") throw new TypeError();
  // 	  console.log(name);
  // 	} catch {
  // 	  console.error("Invalid name! Must be a string!");
  // 	}
  //   }


  // function sayName(name) {
  // 	if (typeof name !== "string") {
  // 	  throw new Error("Invalid Name! Must be a string!");
  // 	} else {
  // 	  return name;
  // 	}
  // }

  // try {
  // 	console.log(sayName(1));
  // 	console.log(sayName("Alex"));
  // } catch (error) {
  // 	console.error(error.name + ": " + error.message);
  // }


  function sayName(name) {
	  if (typeof name === "string") {
		console.log(name)
		return
	  }

	  throw new TypeError(":Invalid name! Must be a string!")
   }

  try {
	  sayName("Alex");
	  sayName(1);
  } catch(e) {
	  console.log(e.name + ' ' + e.message)
	  // throw new Error("TypeError: Invalid name! Must be a string!")
  }


  // 2.
  // tests
  // sayName("Alex");
  // sayName(1);
  // Your code here

  // 3.
  function greet(greeting) {
	if (!greeting) {
	  throw new Error("There was no greeting given.");
	}

	console.log(greeting);
  }

  try {
	  greet(greeting);
	} catch (error) {
	  if (error instanceof ReferenceError) {
		console.error(`Hello World`);
	  } else {
		console.log(error.message);
	  }
  }
