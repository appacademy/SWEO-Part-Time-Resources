// context?

// scope and context are different
// scope is the availability and visibility of variables

// context refers to the value of 'this'
// another definition - when it comes to determining the context
// of the function/method being invoked
// what object is invoking/executing the function

function test(){
	console.log(this)
}

// test()

class Profile{
	constructor(username, password, email){
		this.username = username;
		this.password = password;
		this.email = email;
	}

	getEmail(){
		return this.email
	}

	getUsername(){
		return this.username
	}

	getPassword(){
		return this.password
	}

	changeEmail(email){
		this.email = email
		return this.email
	}

	changePassword(password){
		this.password = password
		return this.password
	}

	showThis(){
		console.log(this)
	}
}


const userProfile = new Profile('johnsmith', 1234, 'johnsmith@demo.com')

const userProfile2 = new Profile('kate', 12345, 'kate@demo.com')

// context = userProfile
// this === userProfile
// userProfile.getUsername()

// console.log(userProfile.getUsername())
// console.log(userProfile.getPassword())
// console.log(userProfile.getEmail())

// userProfile.showThis()
// console.log(userProfile)

console.log(userProfile)
userProfile.changePassword('new password')
console.log(userProfile)

// console.log(userProfile2.getUsername())
// console.log(userProfile2.getPassword())
// console.log(userProfile2.getEmail())
