const dogs = [
    {
    "dogId": 1,
    "name": "Fluffy",
    "age": 2
    }
];

let nextDogId = 2;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const newDogBody1 = {
    "dogId": getNewDogId(),
    "name": "First New Dog Name",
    "age": 17
};

const newDogBody2 = {
    "dogId": getNewDogId(),
    "name": "Second New Dog Name",
    "age": 11
};

const newDogBody3 = {
    "dogId": getNewDogId(),
    "name": "Third New Dog Name",
    "age": 5
};

const updateDogBody3 = {
    "name": "Updated Third Dog Name",
    "age": 6
};

const newDogBody4 = {
    "dogId": getNewDogId(),
    "name": "Fourth New Dog Name",
    "age": 20
};

module.exports = {
    dogs,
    newDogBody1,
    newDogBody2,
    newDogBody3,
    updateDogBody3,
    newDogBody4
};