






class Dog {
	constructor(name){
		this.name = name
	}
	static makeJet(){
		return new Dog('Jet')
	}
	changeName(newName){
		this.name = newName
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