/* 
I want to keep track of ALL instances of iceCream
  [x] Create a Static variable that will hold all of the iceCream Instances
  [x] Add each instance to iceCreamTracker at construction time
I want to see how much money I've made on ALL iceCream
  Create a Static method that will iterate over the static variable
  Return the sum of all the prices 
*/

class IceCream {
  constructor(flavor, toppings) {
    // this = {};
    this.flavor = flavor;
    // {flavor: "Vanilla"};
    this.toppings = toppings || [];
    this.price = this.toppings.length * 0.5 + 1.5;
    //{ flavor: 'Chocolate',toppings: [ 'peanut butter', 'caramel', 'Oreo' ],price: };
    IceCream.iceCreamTracker.push(this)
  }

  static iceCreamTracker = [];

  addToppings(...toppings) {
    this.toppings.push(...toppings);
    this.price = 1.5 + this.toppings.length * 0.5;
  }

  static getPrices() { 
    let sum = 0;
    let arr = IceCream.iceCreamTracker;
    for (let i = 0; i < arr.length; i++) { 
      let obj = arr[i];
      sum += obj.price;
    }
    return sum;
  }
}

// let vanilla = new IceCream('Vanilla', ['sprinkles', 'strawberry']);
// let chocolate = new IceCream('Chocolate', ['peanut butter', 'caramel', 'Oreo']);
// let orange = new IceCream('Orange Sherbert');
// console.log(vanilla.flavor);
// console.log(vanilla.iceCreamTracker);
// console.log(IceCream.iceCreamTracker);
// // console.log(vanilla, chocolate, orange);
// console.log(IceCream.getPrices()); // Should return 7
// console.log(vanilla.getPrices());


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
    super('trumpet', 'brass')
    this.spitValveLevel = spitValveLevel;
  }

  emptyValve() { 
    console.log('emptying valve...')
    this.spitValveLevel = 0;
  }
}

class Saxophone extends Instrument { 
  constructor() {
    super('saxophone', 'woodwind');
  }
  
  play() { 
    console.log('squawk squawk squawk');
  }
}

const flute = new Instrument('flute', 'woodwinds'); 
const trumpet = new Trumpet()
const saxophone = new Saxophone();
console.log(flute)
console.log(trumpet);
console.log(saxophone)
flute.play();
trumpet.play();
saxophone.play();
// flute.emptyValve(); //error
// saxophone.emptyValve(); //error
trumpet.emptyValve();