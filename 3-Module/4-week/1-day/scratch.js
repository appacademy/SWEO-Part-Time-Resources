// const newP = new Promise((resolve, reject)=>{
// 	return reject('Hello world')
// })
// console.log(newP)

// newP.catch((test)=>{
// 	console.log(test)
// })

// const newPromiseTimeout = new Promise((resolve, reject) => {
// 	setTimeout(()=>{
// 		return resolve('Promise is successful')
// 	}, 5000)
// })

// console.log(newPromiseTimeout) // pending
// newPromiseTimeout
// 	.then((res)=>{
// 		console.log(res)
// 	})
// 	.then(()=>{
// 		console.log(newPromiseTimeout)
// 	})
// 	.catch()

// newPromiseTimeout
// 		.then((res)=>new Promise((resolve, reject)=>{
// 			return resolve('Second then')
// 		}))
// 		.then((res2)=>{
// 			console.log(res2)
// 		})


// const all = promise.all([newP, newP1, newP2, newP3])


// all[0]
// all[1]



const newP = new Promise((resolved, rejected)=>{
	// if(true){
	// 	resolved('Hello world')
	// } else {
	// 	rejected('404')
	// }

	setTimeout(()=>{
		resolved('I love javascript')
	}, 5000)
})
// console.log(newP) // pending

newP
	.then((res)=>{
		console.log('successful 1')
		console.log(res)
		return "javascript is fun"
	})
	.then((res)=>{
		console.log('successful 2')
		console.log(res)
		return "promises are cool"
	})
	.then((res)=>{
		console.log('successful 3')
		console.log(res)
	})
	.then((res)=>{
		console.log('successful 4')
		console.log(res)
	})
	.catch((err) =>{
		console.log('your promise has been rejected')
		console.log(err)
	})
