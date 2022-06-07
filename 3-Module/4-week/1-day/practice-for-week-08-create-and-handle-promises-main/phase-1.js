function stretch() {
  	return new Promise((resolved, rejected) =>{
		setTimeout(()=>{
			console.log('done stretching')
			resolved('done stretching')
		}, 1000)

	})
}

function runOnTreadmill() {
  // Your code here
    return new Promise((resolved, rejected) =>{
		setTimeout(()=>{
			console.log('done running on treadmill')
			resolved('done running on treadmill')
		}, 500)
	})
	// newP.then((resolved)=>{
	// 	console.log(resolved)
	// })
}

function liftWeights() {
  // Your code here
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log('done lifting weights')
		  	res("done lifting weights");
		}, 2000);
	});
}

function workout() {
  // Your code here

	// stretch();
	// runOnTreadmill();
	// liftWeights();

	// stretch()
	// 	.then((res)=> {
	// 		console.log(res)
	// 		runOnTreadmill()
	// 	})
	// 	.then((res)=>{
	// 		console.log(res)
	// 		liftWeights()
	// 	})
	// 	.then((res)=>{
	// 		console.log(res)
	// 		console.log("done working out")
	// 	})
	const value = stretch()
		.then(runOnTreadmill)
		.then(liftWeights)
		.then(() => {
			console.log("done working out")
			return 1 // gets converted into a promise object
		})

	// console.log(value, 'this is value')
	value.then((res)=>console.log(res))
}



/* ============================ TEST YOUR CODE ============================

Run the file (`node phase-1.js`) and check your output against the expected
output.
*/


workout();
  // should print out the following:
    // done stretching
    // done running on treadmill
    // done lifting weights
    // done working out
