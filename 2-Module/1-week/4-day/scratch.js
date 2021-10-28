/* 
Static Variable? - A variable on a class, access over time, belongs to the class (not an instance of that class)
Static Methods? - A method that is called on the Class name (not on an instance)



I want to keep track of ALL instances of iceCream
  [x] Create a Static variable that will hold all of the iceCream Instances
  [x] Add each instance to the allIceCream variable at construction time
I want to see how much money I've made on ALL iceCream
  Create a Static method that will iterate over the static variable
  Return the sum of all the prices 
*/
class IceCream {
  constructor(flavor, toppings) {
    this.flavor = flavor;
    this.toppings = toppings || [];
    this.price = 1.5 + (this.toppings.length * .5);
    IceCream.allIceCream.push(this);
  }

  static allIceCream = [];

  addToppings(...toppings) {
    this.toppings.push(...toppings);
    this.price = 1.5 + this.toppings.length * 0.5;
  }

  static getPrices() { 
    return IceCream.allIceCream.reduce((accum, {price}) => accum + price, 0)
  }
}

// let vanilla = new IceCream('Vanilla', ['sprinkles', 'strawberry']);
// let chocolate = new IceCream('Chocolate', ['peanut butter', 'caramel', 'Oreo']);
// let orange = new IceCream('Orange Sherbert');
// console.log(IceCream.allIceCream);
// console.log(vanilla.allIceCream); // undefined
// // console.log(vanilla.getPrices()) // error
// console.log(IceCream.getPrices()); // Should return 7

class Instrument { 
  constructor(name, family) { 
    this.name = name;
    this.family = family;
  }

  play() { 
    console.log('toot toot toot');
  }
}

class Trumpet extends Instrument { 
  constructor(spitValveLevel) { 
    super('trumpet', 'brass');
    this.spitValveLevel = spitValveLevel;
  }

  emptySpitValve() { 
    if (this.spitValveLevel) { 
      console.log('emptying spit valve')
      this.spitValveLevel = 0;
    }
  }
}

class Saxophone extends Instrument {
  constructor() {
    super('saxophone', 'woodwind');
  }

  play() { 
    console.log('squawk squawk squawk')
  }
}


const trumpet = new Trumpet(5);
trumpet.play();

const sax = new Saxophone();
sax.play();

