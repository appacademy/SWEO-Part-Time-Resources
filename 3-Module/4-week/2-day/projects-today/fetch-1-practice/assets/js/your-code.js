export async function getAllDogs() {
    // fetch returns a promise, we want to wait for the promise to finish fulfillment therefore we use "await"
    const dogsData = await fetch("/dogs");
    return dogsData;
}
// getAllDogs();


export async function getDogNumberTwo() {
    const url = "/dogs/2";
    const dataDog = await fetch(url);
    return dataDog;
}

export async function postNewDog() {
    const url = "/dogs";
    const params = new URLSearchParams({
        name: "tofu",
        age: 1
    })
    const postDataResponse = await fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: params
    })
    return postDataResponse;
}

export async function postNewDogV2(name, age) {
    const url = "/dogs";
    const params = new URLSearchParams({
        name: name,
        age: age
    })
    const postDataResponse = await fetch(url, {
        method: "POST",
        headers:{
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: params
    })
    return postDataResponse;
}

export async function deleteDog(id) {
      const url = `/dogs/${id}/delete`;
      const deleteDataResponse = await fetch(url,{
        method: "POST",
        headers: {
            AUTH: "ckyut5wau0000jyv5bsrud90y"
        }
      })
      return deleteDataResponse;
}