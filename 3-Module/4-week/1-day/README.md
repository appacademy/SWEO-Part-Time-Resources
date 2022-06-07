why promises?
to prevent callback hell
and to turn asynchronous code into synchronous code
what are promises?
promises is a class

function callback(
	function callback(
		function callback(
			function callback(
				function callback(

				)
			)
		)
	)
)


a promise comes in three states:

-pending : when a promise is not yet resolved nor rejected

-resolved : happens when a promise is successful
-rejected : happens when a promise is not successful


some promise functionalities:
- A promise can only succeed or fail once -- callbacks will not be invoked multiple times.

- A promise cannot change its state from fulfilled to rejected or vice-versa

- If a promise has already been settled and a callback is added that matches the promise's state, that callback will be invoked immediately.

syntax:

const newP = new Promise(executor)

const newP = new Promise((resolved, rejected)=>{
	if(true){
		resolved(value)
	} else {
		rejected(reason)
	}
})

// promise chaining
newP.then((success)=> console.log(success), (error)=> console.log(error))
	.then(resolvedState, rejectedState)
	.then(resolvedState, rejectedState)


newP.then(resolvedState)
    .then(resolvedState)
	.then(resolvedState)
	.catch()


newP.then((resObj)=>{
	console.log(resObj.header)
	console.log(resObj.status)
})
