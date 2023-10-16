let newPromise = new Promise((res, rej) => {
	setTimeout(() => {
		if (false) res('Ive been fulfilled!');
		else rej('Ive been rejected')
	}, 1000);
})

let asyncyFunc = () => {
	newPromise
		.then(res => {
			console.log('.then our res', res)
		})
		.then(res => {
			console.log('.then our res', res)
		})
		.then(res => {
			console.log('.then our res', res)
		})
		.catch(rej => {
			console.log('our rej', rej)
		})
}

async
try {

} catch (e) {
	console.log(e)
}

asyncyFunc()
