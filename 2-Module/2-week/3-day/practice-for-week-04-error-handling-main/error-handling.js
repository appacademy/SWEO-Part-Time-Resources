// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

try {
	let res = sum(null);
	console.log(res);
  } catch (e){
	console.log(e.message);
}


// 2.
// tests
const sayName = (name) => {
	if (typeof name === "string") {
		console.log(name);
	} else {
		throw new TypeError("Invalid name! Must be a string!");
	}
};



try {
	sayName("Alex");
	sayName(1);
} catch (error) {
	console.log(error.message);
}


// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("Hello World.");
  }

  console.log(greeting);
}




try {
	greet();
} catch (error) {
	console.error(error.message);
} finally {
	console.log('I will always run')
}
