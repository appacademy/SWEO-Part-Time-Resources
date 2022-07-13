let globalScope = 'I am globally scoped'

let myFunction = function(functionScope){
  let alsoFunctionScope = "I am also function scoped"

  if(true){
    let blockScope = 'I am block scoped'
  };
};

/---------------------------------------/

myFunction("I am function scoped");

let car = "vroom";
function makeSounds(dogSound) {
  let cow = "moo";

  if (true) {
    let turkey = "gobble";

    for (let i = 0; i < 2; i++) {
      console.log(car, dogSound, cow, turkey, i);
    }
  }
}
makeSounds("woof");

/---------------------------------------/

let hungry = false;

function sayHungry() {
  let hungry = true;
  if (hungry) { //hungry is being called, but where is hungry defined?
    console.log("I'm hungry!");
  } else {
    console.log("I'm coding");
  }
}

sayHungry();
