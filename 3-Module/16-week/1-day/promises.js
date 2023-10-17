let newPromise = new Promise((res, rej) => {
	if (true) { // some logic happens, and its a good result
		console.log('Im a success!')
		setTimeout(() => res(12345), 500)
	} else { // Not what we wanted, rejection
		console.log('Im a failed promise!')
		rej('this is the rej argument?')
	}
})

let asyncFuncWrapper = async () => {
	try {
		console.log(newPromise)
		await newPromise
		console.log('still in the try')
		console.log(newPromise)
	} catch (error) {
		console.log('error has been caught', error)
	}
}

newPromise
	.then(() => {},
	() => {})
	.catch()


asyncFuncWrapper()

