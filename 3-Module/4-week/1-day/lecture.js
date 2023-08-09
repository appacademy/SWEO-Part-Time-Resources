// function getUserInfo(userId, callback) {
// // Simulate an API request that takes 1 second to complete
// 	setTimeout(() => {
// 		const userInfo = {
// 			id: userId,
// 			name: "John Doe",
// 			email: "john.doe@example.com",
// 		};
// 		callback(userInfo);
// 	}, 1000);
// }

function getUserInfo(userId) {
	// Simulate an API request that takes 1 second to complete
	return new Promise((resolve)=> {
		setTimeout(() => {
			const userInfo = {
				id: userId,
				name: "John Doe",
				email: "john.doe@example.com",
			};
			// callback(userInfo);
			resolve(userInfo)
		}, 1000);
	})
}

// function getUserPosts(userId, callback) {
// // Simulate an API request that takes 2 seconds to complete
// 	setTimeout(() => {
// 		const userPosts = [
// 			{ id: 1, title: "Post 1", body: "This is post 1" },
// 			{ id: 2, title: "Post 2", body: "This is post 2" },
// 			{ id: 3, title: "Post 3", body: "This is post 3" },
// 		];
// 		callback(userPosts);
// 	}, 2000);
// }

function getUserPosts(userId) {
	// Simulate an API request that takes 2 seconds to complete
	return new Promise((resolve, reject)=> {
		setTimeout(() => {
			const userPosts = [
				{ id: 1, title: "Post 1", body: "This is post 1" },
				{ id: 2, title: "Post 2", body: "This is post 2" },
				{ id: 3, title: "Post 3", body: "This is post 3" },
			];
			// callback(userPosts);
			// resolve(userPosts)
			reject("NO POSTS FOR USER")
		}, 2000);
	})
}

// function getPostsComments(postId, callback){
// 	// Simulate an API request that takes 4 seconds to complete
// 	setTimeout(() => {
// 		const postsComments = {
// 			1 : [
// 				{id: 1, comment: "very nice"},
// 				{id: 2, comment: "well said"}
// 			],
// 			2 : [
// 				{id: 3, comment: "this is a comment"}
// 			],
// 			3 : [
// 				{id: 4, comment: "this is another comment"},
// 				{id: 5, comment: "another one"}
// 			]
// 		}
// 		callback(postsComments[postId]);
// 	}, 4000);
// }

function getPostsComments(postId){
	// Simulate an API request that takes 4 seconds to complete
	return new Promise((resolve) => {
		setTimeout(() => {
			const postsComments = {
				1 : [
					{id: 1, comment: "very nice"},
					{id: 2, comment: "well said"}
				],
				2 : [
					{id: 3, comment: "this is a comment"}
				],
				3 : [
					{id: 4, comment: "this is another comment"},
					{id: 5, comment: "another one"}
				]
			}
			// callback(postsComments[postId]);
			resolve(postsComments[postId])
		}, 4000);
	})
}

// callback hell
// function displayUserInfoAndPosts(userId) {
// 	getUserInfo(userId, (userInfo) => {
// 		console.log(`User ID: ${userInfo.id}`);
// 		console.log(`User Name: ${userInfo.name}`);
// 		console.log(`User Email: ${userInfo.email}`);
// 		getUserPosts(userId, (userPosts) => {
// 			console.log(`User Posts: ${JSON.stringify(userPosts)}`);
// 			userPosts.forEach(posts => {
// 				getPostsComments(posts.id, (postsComments)=> {
// 					console.log(`Posts Comments: ${JSON.stringify(postsComments)}`)
// 				})
// 			});
// 		});
// 	});
// }

// .then chaining
// function displayUserInfoAndPosts(userId) {
// 	getUserInfo(userId)
// 		.then((userInfo)=> {
// 			console.log(`User ID: ${userInfo.id}`);
// 			console.log(`User Name: ${userInfo.name}`);
// 			console.log(`User Email: ${userInfo.email}`);
// 			return getUserPosts()
// 		})
// 		.then((userPosts)=>{
// 			console.log(`User Posts: ${JSON.stringify(userPosts)}`);
// 			userPosts.forEach(posts => {
// 				getPostsComments(posts.id)
// 					.then((postsComments)=>{
// 						console.log(`Posts Comments: ${JSON.stringify(postsComments)}`)
// 				})
// 			});
// 		})
// 		.catch((error)=>{
// 			console.log(error)
// 		})
// }

// async await
async function displayUserInfoAndPosts(userId) {
	try { // handles the resolves
		const usersInfo = await getUserInfo(userId)
		const usersPost = await getUserPosts()

		console.log(`User ID: ${usersInfo.id}`);
		console.log(`User Name: ${usersInfo.name}`);
		console.log(`User Email: ${usersInfo.email}`);

		console.log(`User Posts: ${JSON.stringify(usersPost)}`);

		usersPost.forEach(async posts => {
			const postComments = await getPostsComments(posts.id)
			console.log(`Posts Comments: ${JSON.stringify(postComments)}`)
		});
	} catch(err) { // catch handles the rejects
		console.log(err)
	}
}

displayUserInfoAndPosts(123);

// keywords async/await
// async is used with functions, anonymous functions and arrow functions
// it transforms your functions into asynchronous functions and allows us to use
// the await keyword

// await keyword is used with Promises
// and await waits for the Promise to be resolved or rejected

// syntax for async

// async function example(){
// 	await new Promise()
// }

// const exampleTwo = async () => {
// 	await new Promise()
// }

// Promises
// they help to simplify with async functions

// we can use several promises to chain multiple several async functions

// The 3 states in a promise

// pending -> meaning the promises hasn't been resolved nor rejected
// resolved -> meaning the promise has been successful and can return a result
// rejected -> meaning the promise has failed and returns an error or caught an error


// syntax

// Promise

let successOne = true
let successTwo = true
let successThree = true

const requestOne = new Promise((resolve, reject)=> {
	setTimeout(()=> {
		if (successOne) {
			resolve("The promise has been successful for requestOne")
		} else {
			reject("The promise has failed for requestOne")
		}
	}, 1000)
})

const requestTwo = new Promise((res, rej) => {
	setTimeout(()=> {
		if (successTwo) {
			res("The promise has been successful for requestTwo")
		} else {
			rej("The promise has failed for requestTwo")
		}
	}, 1000)
})

const requestThree = new Promise((res, rej) => {
	setTimeout(()=> {
		if (successThree) {
			res("The promise has been successful for requestThree")
		} else {
			rej("The promise has failed for requestThree")
		}
	}, 1000)
})

// console.log(request)

// these two methods of a Promise Object will always return a Promise Object
// then -> catches a resolve
// catch -> catches a reject

// requestOne.then((resolvedValue)=> {
// 	console.log(resolvedValue)
// 	return requestTwo
// }).then((resolvedValueTwo) => {
// 	console.log(resolvedValueTwo)
// 	return requestThree
// }).then((resolvedValueThree)=>{
// 	console.log(resolvedValueThree)
// })
// .catch((rejectedValue)=> {
// 	console.log(rejectedValue)
// })

// we can chain multiple .then in a promise
// but we cant chain multiple .catch
// we can only have .catch
// .catch should only be at the end of your .then chaining