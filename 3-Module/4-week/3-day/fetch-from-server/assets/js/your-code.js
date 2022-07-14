export function getAllDogs() {
  return fetch('/dogs');
}

export function getDogNumberTwo() {
  return fetch('/dogs/2');
}

export function postNewDog() {
  const body = new URLSearchParams({ name: 'diggitydawg', age: 100 });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: body,
  };

  return fetch('/dogs', options);
}

export function postNewDogV2(name, age) {
  const body = new URLSearchParams({ name, age });

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  };

  return fetch('/dogs', options);
}

export function deleteDog(id) {
  const options = {
    method: 'POST',
    headers: {
      AUTH: 'ckyut5wau0000jyv5bsrud90y',
    },
  };

  return fetch(`/dogs/${id}/delete`, options);
  // return fetch(`/dogs/${id}/delete`, {
  //   method: 'POST',
  //   headers: {
  //     AUTH: 'ckyut5wau0000jyv5bsrud90y',
  //   },
  // });
}
