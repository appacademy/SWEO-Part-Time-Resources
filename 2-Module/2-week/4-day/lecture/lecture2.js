// /*
// I want to keep track of ALL instances of iceCream
//   Create a Static variable that will hold all of the iceCream Instances
//   Add each instance to that variable at construction time

//   I want to see how much money I've made on ALL iceCream
//   Create a Static method that will iterate over the static variable
//   Return the sum of all the prices
// */

// class IceCream {
//   constructor(flavor, toppings) {
//     this.flavor = flavor;
//     this.toppings = toppings || [];
//     this.price = 1.5 + this.toppings.length * 0.5;
//     this.addToSold(this);
//     //   IceCream.soldIceCream.push(this)
//   }
//   static soldIceCream = [];

//   static countCash() {
//     let counter = 0;
//     for (let i = 0; i < this.soldIceCream.length; i++) {
//       let ele = this.soldIceCream[i];
//       counter += ele.price;
//     }
//     return counter;
//   }
//   // static totalPrice() {return this.soldIceCream.reduce((a, b) => a + b.price, 0)}

//   addToSold(entity) {
//     IceCream.soldIceCream.push(entity);
//   }
// }

// class Gelato extends iceCream {
//   constructor(flavor, toppings) {
//     super(flavor, toppings);
//     this.upcharge = 2;
//   }
//   //Function overloading: sending a different number or type of parameters to a particular function.
//   tallyUpcharges(num) {
//     let counter =0
//     if (num === typeof number) {
//       return num + num;
//     }
//     else if(num === typeof(array)) {
//       for(let i = 0;i<num.length;i++){
//         let ele = num[i]
//         counter+=ele
//       }
//     }
//   }
// }

// let vanilla = new IceCream("Vanilla", ["sprinkles", "strawberry"]);
// let chocolate = new IceCream("Chocolate", ["peanut butter", "caramel", "Oreo"]);
// let orange = new IceCream("Orange Sherbert");
// // console.log(IceCream.soldIceCream);
// // console.log(orange);
// // console.log(IceCream);
// // console.log(IceCream.totalPrice())
// // console.log(orange.countCash());

// //Function overloading: sending a different number or type of parameters to a particular function.
// // class DemoOverload{
// //   public int add(int x, int y){  //method 1
// //   return x+y;
// //   }

// //   public int add(int x, int y, int z){ //method 2
// //   return x+y+z;
// //   }

// //   public int add(double x, int y){ //method 3
// //   return (int)x+y;
// //   }

// //   public int add(int x, double y){ //method 4
// //   return x+(int)y;
// //   }
// // }


// I want to keep track of ALL instances of iceCream
//   Create a Static variable that will hold all of the iceCream Instances
//   Add each instance to that variable at construction time
// I want to see how much money I've made on ALL iceCream
//   Create a Static method that will iterate over the static variable
//   Return the sum of all the prices
// */

class IceCream {
  constructor(flavor, toppings) {
    this.flavor = flavor;
    this.toppings = toppings || [];
    this.price = 1.5 + this.toppings.length * 0.5;
    // IceCream.totalIceCream.push(this)
    this.addToTotal(this)
  }
  static totalIceCream = []


 static countCash(){
    let count = 0;
    for(let i = 0; i < this.totalIceCream.length;i++){
      let ele = this.totalIceCream[i];
      count += ele.price
    }
    return count
 }



  addToTotal(obj){
    IceCream.totalIceCream.push(obj)
  }

}

let vanilla = new IceCream('Vanilla', ['sprinkles', 'strawberry']);
let chocolate = new IceCream('Chocolate', ['peanut butter', 'caramel', 'Oreo']);
let orange = new IceCream('Orange Sherbert')

// console.log(vanilla.totalIceCream)
// console.log(IceCream.totalIceCream)
// console.log(IceCream.totalIceCream)
// console.log(IceCream.countCash())
console.log(IceCream.addToTotal())
