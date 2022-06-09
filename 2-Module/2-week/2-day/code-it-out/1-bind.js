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
        console.log("made by:", creator )
        return `${this.itemName}; ${this.manufacturer}; ${this.price} `;
    }
}

// ------------------Fix the code below:-----------------
debugger;
let macBookAir13 = new AmazonItem("Mac Book Air", "Apple", ["tech", "laptops", "apple"], 999);
let getMacBookDetails = macBookAir13.itemDetails; //method calling

//even though this method (with `this` in it) is invoked in the global context, we actually don't get the global object as our context for `this` instead it is undefined (context is lost); undefined.property / undefined.method is going to give us an error
console.log("----------------bind to bind context-------------");
//first bind the getMacBookDetails using the Function.bind method to then take the macBookAir13 context and make it that method's context



console.log("----------------appply to bind context-------------");

console.log("----------------call to bind context-------------");

