
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
// console.log(vanilla.iceCreamTracker); // undefined because we are calling a static variable through an instance of our class, not our class
// console.log(IceCream.iceCreamTracker);
// // console.log(vanilla, chocolate, orange);
// console.log(IceCream.getPrices()); 
// console.log(vanilla.getPrices());  // throw an error because getPrices is a static method and we are trying to call it on an instance of our class







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

  play(){
    console.log('squak squak squak')
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
  
}

const nelson = new Instrument('clarinet', 'woodwinds')

nelson.play()

// const james = new Saxophone();
const crystal = new Trumpet(2);
crystal.play(); // squak squak squak
// james.play();
// crystal.soakReed();
// james.soakReed();