// const url = "/endpoint";
// const headers = {"Content-Type": "Request body's Content-Type"};
// // Use the URLSearchParams API to format your body as shown below
// const body = new URLSearchParams({
//     key: "value"
// });

// const options = {
//     method: "GET|POST|PUT|DELETE",
//     headers: headers,
//     body: body
// };

// fetch(url, options);

export function getAllDogs() {
    // Your code here
	return fetch('/dogs')
}

export function getDogNumberTwo() {
    // Your code here
	return fetch ('/dogs/2');
}

export function postNewDog() {
    // Your code here
	const url = "/dogs";
  	const headers = { "Content-Type": "application/x-www-form-urlencoded" };

	const body = new URLSearchParams({
		name: "Rosie",
		age: "1",
	});

	const options = {
		method: "POST",
		headers: headers,
		body: body,
	};

  	return fetch(url, options);
}

export function postNewDogV2(name, age) {
     // Your code here
	const url = "/dogs";
  	const headers = { "Content-Type": "application/x-www-form-urlencoded" };

	const body = new URLSearchParams({
		// name: name,
		// age: age,
		name,
		age
	});

	const options = {
		method: "POST",
		// headers: headers,
		// body: body,
		headers,
		body
	};

  	return fetch(url, options);
}

export function deleteDog(id) {
    return fetch(`/dogs/${id}/delete`, {
        method: "POST",
        headers: {"AUTH" : "ckyut5wau0000jyv5bsrud90y"},
        body: false
    })
}
