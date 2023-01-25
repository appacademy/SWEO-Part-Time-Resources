//Each module in Node has access to a "Module" object
//This object contains info on the current file/module

//One of these properties is the module.exports property
//Used to export items from the current module

//How to use
// Assign a new object to the module.exports property
// Give the new object a property for each function or variable that we want to export

function hi(name) {
    console.log(`Hi, ${name}`)
}

function bye() {
    console.log("Bye Brother")
}


// module.exports = {
//     hi,
//     bye
// }

// module.exports.hi = hi;
// module.exports.bye = bye;

//Node made this - let exports = module.exports
//You can ONLY use dot notation on the exports variable

exports.hi = hi;