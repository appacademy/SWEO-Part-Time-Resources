export function getAllDogs() {
    return fetch("/dogs")
}

export function getDogNumberTwo() {
	let url = "/dogs/2";
  	return fetch(url);
}

export function postNewDog() {
    // Your code here
	const newBody = new URLSearchParams({name: 'Louie', age:'6'})
	return fetch('/dogs', {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: newBody
	})
}

export function postNewDogV2(name, age) {
     // Your code here
	 const param = new URLSearchParams(`name=${name}&age=${age}`)
	 return fetch('/dogs', {
		method: "POST",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded"
		},
		body: new URLSearchParams({
			name,
			age
		})
	})
}

export function deleteDog(id) {
      // Your code here
	// /dogs/id/delete
	return fetch(`/dogs/${id}/delete`,
			{
				methods: 'POST',
				headers: {"AUTH": `ckyut5wau0000jyv5bsrud90y`}
			}
		)
}
