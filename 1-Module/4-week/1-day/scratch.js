let higherOrderFunction = function (callback) {
  callback();
};

let intoAFunction = function () {
  console.log("I'm being passed into a function");
};

let intoAFunctionPt2 = function () {
  console.log("I'm ALSO being passed into a function");
};

console.log(intoAFunction)

higherOrderFunction(intoAFunction);
higherOrderFunction(intoAFunctionPt2);
