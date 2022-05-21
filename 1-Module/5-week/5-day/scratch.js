(function () {
    console.log("I run immediately");
})();


(function (name) {
    console.log(`Hello, ${name}!`)
})("Wes");


// console.log(name); //will give an error