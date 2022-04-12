'use strict';

class Person{
	constructor(name, age){
		this.age = age;
		this.name = name;
	}

	showContext(){
		// console.log(this);
		// console.log(this.name);
		// console.log(this.age);
		function try_(){
			console.log(this, 'function')
		}

		try_()

		// arrow functions dont have this
		// arrow functions dont have super
		const arrow = () => {
			console.log(this, 'arrow')
		}
		arrow()

		this.clearInterval = ''
	}
}


const newPerson = new Person('Alex', 30);

// context belongs to or refers to whatever objec is invoking
// the function with the this keyword

newPerson.showContext();


// const showContextFunction = newPerson.showContext

// console.log(showContextFunction())

// function globalFunc(){
// 	console.log(this)
// }

// globalFunc()

// setTimeout(newPerson.showContext, 2000)

// setTimeout(()=>{
// 	newPerson.showContext();
// }, 2000)

// const test = () => {
// 	console.log(this)
// }

// test()
