class Dog{
	constructor(name){
		this.name = name;
	}
	static makeJet(){
		const newDog = new Dog("Jet");
		return newDog;
	}

	changeName(newName){
		this.name = newName;
	}
	speak(word){
		return `${this.name} says ${word}`
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}