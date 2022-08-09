export async function getAllDogs() {
    // fetch returns a promise, we want to wait for the promise to finish fulfillment therefore we use "await"
    const dogsData = await fetch("/dogs");
    return dogsData;
}
// getAllDogs();


export function getDogNumberTwo() {
    // Your code here
}

export function postNewDog() {
    // Your code here
}

export function postNewDogV2(name, age) {
     // Your code here
}

export function deleteDog(id) {
      // Your code here
}