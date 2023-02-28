// context?

// scope and context are different

// scopre refers to the availability and visibility of variables

// context refers to the value of 'this'

// another definition of this - when it comes to determining the context of a function
// or method
// or what the object/method is executing/invoking that function?

// function test(){
// 	console.log(this)
// }

// test()

class Profile{
	constructor(email, password, username){
		this.email = email
		this.password = password
		this.username = username
		this.friends = []
	}

	getPassword(){
		return this.password
	}

	getEmail(){
		return this.email
	}

	getUserName(){
		return this.username
	}

	changePassword(password){
		this.password = password
		// return this.password
		return this.getPassword()
	}

	changeEmail(email){
		this.email = email
		return this.getEmail()
	}

	showThis(){
		console.log(this)
	}


	showFriend(){
		// console.log(friend)
		// console.log(this.friends[0])
		// console.log(this.friends[0].name)

		this.friends[0].showThis()
		console.log(this.friends[0])
	}
}

class Friend{
	constructor(name){
		this.name = name
	}

	showThis(){
		console.log(this)
	}
}


const userProfile = new Profile('johnsmith@demo.com', 1234, 'johnsmith')
const userProfile2 = new Profile('alex@demo.com', 12345, 'alexb')

// console.log(userProfile.getEmail())
// console.log(userProfile.getPassword())
// console.log(userProfile.getUserName())

// console.log(userProfile.changePassword('new password'))

// console.log(userProfile2.getEmail())

// console.log(userProfile)


// userProfile.showThis()
// console.log(userProfile)

userProfile.friends.push(new Friend('Kate'))

userProfile.showFriend()
