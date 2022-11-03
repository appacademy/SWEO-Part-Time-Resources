// 1.
function sum(array) {
  let sum = 0;
  //!!ADD
  // for (let i = 0; i < array.length; i++) {
    // sum += array[i];
  // }
  //!!END_ADD
  //!!START SILENT
  try {
    for (let i = 0; i < array.length; i++) {
      sum += array[i];
    }
  } catch (e) {
    if (e instanceof TypeError) {
      console.log(e.message);
    } else {
      throw e;
    }
  }
  //!!END
  return sum;
}

let res = sum(null);
console.log(res);

// 2.
//!!ADD
// // tests
// sayName("Alex");
// sayName(1);
//!!END_ADD
//!!START
function sayName(name) {
  if (!(typeof name === "string")) {
    throw new TypeError("Invalid name! Must be a string!");
  }

  console.log(name);
}

try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  console.log("Oops, something went wrong: ", error.message);
}
//!!END

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

//!!START SILENT
try {
  greet("Hola!");
  greet();
} catch(e) {
  console.log("Hello World!");
}
//!!END