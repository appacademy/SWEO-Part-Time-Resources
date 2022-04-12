class Person {
	constructor(name, age){
		this.age = age;
		this.name = name;
		this.clearInterval = ''
	}

	showContext(){
		console.log(this)
		console.log(this.name)
		console.log(this.age)
	}

	changeName(){
		// this.name = 'Hello'
		this.clearInterval = 'Hi im clear interval'
	}
}


const newPerson = new Person('Alex', 30)

// newPerson.showContext();

// we lose our context
// func = showContext(){
// 	console.log(this)
// 	console.log(this.name)
// 	console.log(this.age)
// }
// let func = newPerson.showContext()

// context = console.log
// console.log(func())


// const globalFunc = () => {
// 	console.log(this)
// }

// function globalFunc(context){
// 	// console.log(context())
// 	console.log(this.clearInterval)
// 	context()
// 	// console.log(context.clearInterval)
// 	console.log(this)
// }

// globalFunc()

// setTimeout(newPerson.showContext, 2000)

// setTimeout(()=> {
// 	newPerson.showContext();
// }, 2000)

// setTimeout(cb, )

// globalFunc(newPerson.changeName)
