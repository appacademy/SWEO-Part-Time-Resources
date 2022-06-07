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

//first bind the getMacBookDetails using the Function.bind method to then take the macBookAir13 context and make it that method's context
let boundGetMacD = getMacBookDetails.bind(macBookAir13); //.bind returns us a exotic function that we know the context of

console.log(boundGetMacD()); //invoking the boundGetMacD function, we will get the return value of our data, and then we log it


console.log("----------------appply to bind context-------------");
let macData = getMacBookDetails.apply(macBookAir13, ["-----mac 13----"])
console.log(macData);
console.log("----------------call to bind context-------------");
let macData2 = getMacBookDetails.call(macBookAir13, "-----mac 13----", "steve jobs")
console.log(macData2);



// console.log(getMacBookDetails()); //TypeError: Cannot read properties of undefined (reading 'itemName') //means ==> `this` is undefined, undefined.itemName is invalid!

