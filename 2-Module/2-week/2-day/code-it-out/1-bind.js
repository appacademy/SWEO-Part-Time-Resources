//Given the code below, it will throw an error. The context has been lost (this === undefined), Find a way to bind the getMacBookDetails method back to the context of `macBookAir13` instance.
class AmazonItem {
    constructor(name, manufacturer, category, price ) {
        this.itemName = name;
        this.manufacturer= manufacturer;
        this.category = category;
        this.price = price;
    }

    itemDetails(title, creator) {
        console.log(this);
        console.log(title);
        console.log("made by:", creator)
        return `${this.itemName}; ${this.manufacturer}; ${this.price} `;
    }
}

// ------------------Fix the code below:-----------------
debugger;
let macBookAir13 = new AmazonItem("Mac Book Air", "Apple", ["tech", "laptops", "apple"], 999);
let getMacBookDetails = macBookAir13.itemDetails; //method calling

// console.log(getMacBookDetails()); //TypeError: Cannot read properties of undefined (reading 'itemName') //means ==> `this` is undefined, undefined.itemName is invalid!

console.log("----------------bind to bind context-------------");



//after trying to bind using function method `bind`, try other methods
console.log("----------------appply to bind context-------------");

console.log("----------------call to bind context-------------");






