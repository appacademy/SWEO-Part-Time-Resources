class CallCenter{
	constructor(name) {
		this.name = name;
	}

	sayHello = () => {
		console.log("Hello this is " + this.name);
	}

    callMeLater(delay) {
        return setTimeout(() => this.sayHello(), delay); //remember arrow functions will bind the context from the block of code that it is declared in (not invoked). In this cass, the instance of CallCenter once the instance is created.
    }
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}