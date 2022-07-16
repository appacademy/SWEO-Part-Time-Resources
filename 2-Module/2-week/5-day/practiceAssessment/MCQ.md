# PA MCQ

```js
class Dog {
  constructor(name) {
    this.name = name;
    this.sound = 'woof';
  }

  speak() {
    return `${this.name} says '${this.sound}'`
  }
}

let fido = new Dog("Fido");
let fidoSpeak = fido.speak;


console.log(fidoSpeak()); // ERROR
```

- How would you fix the error in the code above?
  - bind the speak method to the fido instance

- Which of the following descriptions would throw a JavaScript ReferenceError?
  - The code returns a variable but misspells the variable name
  - Invoking a variable that has not been declared
  - Invoking a function that has not been declared

- Which of the following are true of "fat arrow" => functions?
  - Can sometimes omit the return keyword
  - Will establish context based on the scope where it was defined
  - Can sometimes omit {} around the code

```js
describe ('Mystery function', function () {

  it('should work correctly', function () {

    expect(mystery("antelope")).to.equal("ante");

    expect(mystery("bandicoot")).to.equal("bandi");

    expect(mystery("cheetah")).to.equal("cheetah");

    expect(mystery("dromedary")).to.equal("drome");

    expect(mystery("elephant")).to.equal("ele");

  });

});
```

- Based on these test specs, what should the mystery function do?
  - Return the first two syllables of the input word

- Which of these best describes TDD?
  - Creating test specs that describe the functionality of code to be written, then writing code to meet those tests