# M2W1D4

## Class Syntax Quiz

- [Class Syntax II Quiz]

## Static Methods and Variables

```js
/* 
I want to keep track of ALL instances of iceCream
  Create a Static variable that will hold all of the iceCream Instances
  Add each instance to that variable at construction time
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

let vanilla = new IceCream('Vanilla', ['sprinkles', 'strawberry']);
let chocolate = new IceCream('Chocolate', ['peanut butter', 'caramel', 'Oreo']);
let orange = new IceCream('Orange Sherbert')
console.log(IceCream.getPrices()); // Should return 7
```

## Inheritance Quiz

- [Inheritance Quiz]
- [Polymorphism Quiz]

## Inheritance and Polymorphism

```js
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
  constructor() {
    Trumpet.total += 1;
    super(`Trumpet ${Trumpet.total}`, 'Brass');
  }

  static total = 0;

  releaseSpitValve() {
    console.log('releasing spit valve');
  }
}

class Saxophone extends Instrument {
  constructor() {
    Saxophone.total += 1;
    super(`Saxophone ${Saxophone.total}`, 'Woodwinds');
  }

  static total = 0;

  soakReed() {
    console.log('soaking reed');
  }
  
}

// What will print to the console?
const james = new Saxophone();
const crystal = new Trumpet();
crystal.play();
james.play();
crystal.soakReed();
james.soakReed();

/* 
We all know that Saxophones make more of a 'squawk squawk squawk'
How can I change just the Saxophones to squawk instead of toot?
*/
```

## Friendly and Evil Dragons Phase (Today and Friday HW)

