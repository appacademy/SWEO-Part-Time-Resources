// // const myArr = [1,2,3,4]
// // const myArr = new Array(1,2,3,4)
// // console.log(myArr)

// // Define a class with the class keyword followed by the name with the first
// // letter capital and the rest of the words camel case
// class Taco {
//     // constructor is invoked when you create a new class such as:
//     // new Taco("chicken", ["sour cream", "cheese"])
//     constructor(meat, toppings = []) {
//       // define any instance variables or logic that needs to be run when an
//       // instance of the class is created
//       this.meat = meat
//       this.toppings = toppings
//       this.tortillaType = 'corn'
//       this.allInstances = []
//       this.allInstances.push(this.constructor.name)
//     }
//     // instance method
//     assemble() {
//       return `These are some delicious ${this.meat} tacos on a ${
//         this.tortillaType
//       } tortilla with all the toppings ${this.toppings.join(', ')}.`
//     }

//     changeTortillaType(str){
//         this.tortillaType = str
//     }
//   }
//   // create a instance of a Taco and store in a variable
//   const carnitasTaco = new Taco('carnitas', ['guacamole', 'salsa'])
//   const carnitasTaco2 = new Taco('carnitas', ['guacamole', 'salsa'])
//   const carnitasTaco3 = new Taco('carnitas', ['guacamole', 'salsa'])
//   // call an instance method
// //   console.log(carnitasTaco.assemble())
//   console.log(carnitasTaco)
// //   carnitasTaco.changeTortillaType('flour')
// //   console.log(global.this)


class Instrument {
    constructor(name, family) {
      this.name = name;
      this.family = family;
    }
  
    play() {
      console.log('toot toot toot');
    }
  }



    class Guitar extends Instrument {
      constructor(name, family) {
        super(`Guitar`, 'Strings');
      }
    
    
      strumGuitar() {
        console.log('strumming guitar');
      }
      
    }

    class ChildGuitar extends Guitar{
        constructor(){
            super('Guitar2', 'Strings as well')
        }
    }
  
  class Trumpet extends Instrument {
    constructor() {
      super(`Trumpet`, 'Brass');
    }
  
  
    releaseSpitValve() {
      console.log('releasing spit valve');
    }
  }
  
  
  // What will print to the console?
  const jamesGuitar = new Guitar('Guitar', 'Strings');
//   console.log(jamesGuitar instanceof Array)
  console.log(jamesGuitar)

//   const childGuitar = new ChildGuitar()
//   console.log(childGuitar)
//   const jamesTrumpet = new Trumpet();
//   jamesGuitar.play();
// //   jamesTrumpet.play();
//   jamesGuitar.strumGuitar();
//   jamesTrumpet.releaseSpitValve();