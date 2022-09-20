// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 5; j++){
//     console.log(i, j)
//   }
// }

let dogs = ["belka", "strelka", "laika", "dezik"];

for (let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for (let j = i + 1; j < dogs.length; j++) {
    let dog2 = dogs[j];
    console.log(dog1, dog2);
  }
}
