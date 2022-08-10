export async function getAllDogs() {
    const url = "/dogs"
    const dogsData = await fetch(url)
    // if we don't have any options, it will provide the default method of get, default options, and etc.
    return dogsData;
}

export async function getDogNumberTwo() {
    const url = "/dogs/2";
    const singleDogData = await fetch(url);
    return singleDogData;
}

export async function postNewDog() {
    const url = "/dogs"
    const paramsBody = new URLSearchParams({
        name: "tofu",
        age: 2
    })
    const options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: paramsBody
    }

    const postDataResponse = await fetch(url, options)
    return postDataResponse;
}

export async function postNewDogV2(name, age) {
    const url = "/dogs"
    const paramsBody = new URLSearchParams({
        name: name,
        age: age,
    })
    const options = {
        method: "POST",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded'
        },
        body: paramsBody
    }

    const postDataResponse = await fetch(url, options)
    return postDataResponse
}

export async function deleteDog(id) {
      const url = `/dogs/${id}/delete`;
      const options = {
        method: "Post",
        headers:{
            AUTH: "ckyut5wau0000jyv5bsrud90y"
        }
      }
      const dataFromServer = await fetch(url, options);
      return dataFromServer;
}