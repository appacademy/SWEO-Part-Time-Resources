export function getAllDogs() {
    // Your code here
    return fetch('/dogs')
}

export function getDogNumberTwo() {
    // Your code here
    return fetch('/dogs/2')
}

export function postNewDog() {
    // Your code here
    const urlParams = new URLSearchParams({name: 'Trigger', age: 5})

    return fetch('/dogs', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: urlParams
    })
}

export function postNewDogV2(name, age) {
     // Your code here
        const urlParams = new URLSearchParams({name, age})
    
    return fetch('/dogs', {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: urlParams
    })

}

export function deleteDog(id) {
      // Your code here
      return fetch(`/dogs/${id}/delete`, {
        method: 'POST',
        headers: {
           'AUTH': 'ckyut5wau0000jyv5bsrud90y' 
        }
      })
}