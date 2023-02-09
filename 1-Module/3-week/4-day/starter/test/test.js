const assert = require("assert");

const keysInObject = require("../problems/01-keys-in-object.js");
const valuesInObject = require("../problems/02-values-in-object.js");
const setKeyInObject = require("../problems/03-set-key-in-object.js");
const getFullName = require("../problems/04-get-full-name.js");
const doesKeyExist = require("../problems/05-does-key-exist.js");
const keyInObjectArray = require("../problems/06-key-in-object-array.js");
const breakDownObj = require("../problems/07-break-down-object.js");
const valuePair = require("../problems/08-value-pair.js");
const appleCounter = require("../problems/09-apple-counter.js");
const restSum = require("../problems/10-rest-sum.js");
const spreadItOut = require("../problems/11-spread-it-out.js");
const arrayConverter = require("../problems/12-array-converter.js");
const stringConverter = require("../problems/13-string-converter.js");
const countScores = require("../problems/14-count-scores.js");

describe("keysInObject()", function() {
  it("should return an array containing all object keys", function() {
    const animals = keysInObject({ dog: "Wolfie", cat: "Jet", bison: "Bilbo" });
    const animalResult = ["dog", "cat", "bison"];

    const foods = keysInObject({
      apple: "tart",
      lemon: "sour",
      mango: "sweet"
    });
    const foodResult = ["apple", "lemon", "mango"];

    assert.deepEqual(animals, animalResult);
    assert.deepEqual(foods, foodResult);
  });
});

describe("valuesInObject()", function() {
  it("should return an array containing all object values", function() {
    const animals = valuesInObject({
      dog: "Wolfie",
      cat: "Jet",
      bison: "Bilbo"
    });
    const animalResult = ["Wolfie", "Jet", "Bilbo"];

    const foods = valuesInObject({
      apple: "tart",
      lemon: "sour",
      mango: "sweet"
    });
    const foodResult = ["tart", "sour", "sweet"];

    assert.deepEqual(animals, animalResult);
    assert.deepEqual(foods, foodResult);
  });
});

describe("setKeyInObject()", function() {
  it("should set a key-value pair into a given object", function() {
    let obj = {};
    const test1 = setKeyInObject(obj, "apple", "yum");
    const result1 = { apple: "yum" };

    let obj1 = { str: "hello" };
    const test2 = setKeyInObject(obj1, "num", 3);
    const result2 = { str: "hello", num: 3 };

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
  });
});

describe("getFullName()", function() {
  it("should return the full name values from within the object", function() {
    const p1 = { firstName: "John", lastName: "Doe" };
    const test1 = getFullName(p1);
    const p2 = { firstName: "Charlie", lastName: "Brown", age: 9 };
    const test2 = getFullName(p2);

    const result1 = "John Doe";
    const result2 = "Charlie Brown";

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
  });
});

describe("doesKeyExist()", function() {
  it("should return true if a key is within an object", function() {
    let obj1 = { bootcamp: "App Academy", course: "Bootcamp Prep" };
    const test1 = doesKeyExist(obj1, "course");
    const test2 = doesKeyExist(obj1, "name");

    const result1 = true;
    const result2 = false;

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
  });
});

describe("keyInObjectArray()", function() {
  it("should return true if a key is within any of the objects within the array", function() {
    let objArray = [
      { name: "Rupert" },
      { age: 42 },
      { planet: "Earth", system: "Milky Way" }
    ];
    const test1 = keyInObjectArray(objArray, "planet");
    const test2 = keyInObjectArray(objArray, "age");
    const test3 = keyInObjectArray(objArray, "food");

    const result1 = true;
    const result2 = true;
    const result3 = false;

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
    assert.deepEqual(test3, result3);
  });
});

describe("breakDownObj()", function() {
  it("should return an array of object keys and values", function() {
    const object1 = { name: "Rupert", age: 5, speak: "Meow" };

    const test1 = breakDownObj(object1);

    const object2 = { location: "NY", borough: "Brooklyn" };
    const test2 = breakDownObj(object2);

    const result1 = ["name", "age", "speak", "Rupert", 5, "Meow"];
    const result2 = ["location", "borough", "NY", "Brooklyn"];

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
  });
});

describe("valuePair()", function() {
  it("should return an array of object keys and values", function() {
    const object1 = { name: "One", location: "NY", age: 3 };
    const object2 = { name: "Two", location: "SF" };

    const test1 = valuePair(object1, object2, "location");
    const test2 = valuePair(object1, object2, "name");

    const result1 = ["NY", "SF"];
    const result2 = ["One", "Two"];

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
  });
});

describe("appleCounter()", function() {
  it("should return a count of the number of keys that contain the word apple", function() {
    const obj = { banana: "yay!" };
    const test1 = appleCounter(obj); // => 0

    const obj1 = { crabapple: "yum!" };
    const test2 = appleCounter(obj1); // => 1

    const obj2 = { crabapple: "yum!", honeyapple: "super yum", banana: "yay" };
    const test3 = appleCounter(obj2); // => 2

    const obj3 = {
      crabApple: "yum!",
      honeyApple: "super yum",
      banana: "yay",
      bigapple: "NYC"
    };
    const test4 = appleCounter(obj3); // => 3

    const result1 = 0;
    const result2 = 1;
    const result3 = 2;
    const result4 = 3;

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
    assert.deepEqual(test3, result3);
    assert.deepEqual(test4, result4);
  });
});

describe("restSum()", function() {
  it("should add any number of incoming arguments", function() {
    const test1 = restSum(3, 5, 6);
    const result1 = 14;

    const test2 = restSum(1, 2, 3, 4, 5, 6, 7, 8, 9);
    const result2 = 45;

    const test3 = restSum(0, 0);
    const result3 = 0;

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
    assert.deepEqual(test3, result3);
  });
});

describe("spreadItOut()", function() {
  it("should return a single array fron the two arrays in the order they were received", function() {
    const test1 = spreadItOut([3, 5, 6], [1, 2, 3]);
    const result1 = [3, 5, 6, 1, 2, 3];

    const test2 = spreadItOut(["apple", "banana"], [1, 2, 3]);
    const result2 = ["apple", "banana", 1, 2, 3];

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
  });
});

describe("arrayConverter()", function() {
  it("should convert an array into an object with keys are the elements, and the values are the number of occurrences of each element", function() {
    const test1 = arrayConverter(["apple", "apple"]);
    const result1 = { apple: 2 };

    const test2 = arrayConverter(["mango", "pineapple"]);
    const result2 = { mango: 1, pineapple: 1 };

    const test3 = arrayConverter(["apple", "banana", "potato", "banana"]);
    const result3 = { apple: 1, banana: 2, potato: 1 };

    assert.deepEqual(test1, result1);
    assert.deepEqual(test2, result2);
    assert.deepEqual(test3, result3);
  });
});

describe("stringConverter()", function() {
  it("should convert a string into an object with keys are the letters, and the values are the number of occurrences of each letter", function() {
    const apple = stringConverter("apple");
    const appleResult = { a: 1, p: 2, l: 1, e: 1 };

    const banana = stringConverter("banana");
    const bananaResult = { b: 1, a: 3, n: 2 };

    const raccoon = stringConverter("raccoon");
    const raccoonResult = { r: 1, a: 1, c: 2, o: 2, n: 1 };

    assert.deepEqual(apple, appleResult);
    assert.deepEqual(banana, bananaResult);
    assert.deepEqual(raccoon, raccoonResult);
  });
});

describe("countScores()", function() {
  it("should return an object of each person's total score", function() {
    const ppl = [
      { name: "Anthony", score: 10 },
      { name: "Fred", score: 10 },
      { name: "Anthony", score: -8 },
      { name: "Winnie", score: 12 }
    ];
    const result1 = { Anthony: 2, Fred: 10, Winnie: 12 };

    const peeps = [
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Winnie", score: 2 },
      { name: "Fred", score: 2 },
      { name: "Anthony", score: 2 },
      { name: "Winnie", score: 2 }
    ];
    const result2 = { Anthony: 4, Fred: 4, Winnie: 6 };

    assert.deepEqual(countScores(ppl), result1);
    assert.deepEqual(countScores(peeps), result2);
  });
});
