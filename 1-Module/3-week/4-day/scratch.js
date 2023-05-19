// let animals = ["dragon", "panda", "gorilla", "lion"]

// let [firstAnimal, secondAnimal, thirdAnimal] = animals;

// // let firstAnimal = animals[0]

// console.log("firstAnimal:", firstAnimal);
// console.log("secondAnimal:", secondAnimal);

let cohort = {
    startMonth: "May",
    instructors: [{
        name: "Philip",
        currentGame: "Pokemon Unite",
        mostPlayed: [
            "Cinderace",
            "Charizard"
        ]
    }, {
        name: "Alan",
        currentGame: "Zelda: Tears of the Kingdom",
        hours: 100
    }],
}

// let startMonth = cohort.startMonth
// let instructors = cohort.instructors;

// let { startMonth, instructors: teachers } = cohort;
// console.log(startMonth)
// console.log(teachers)

// let { instructors: [Philip, Alan] } = cohort;
// console.log("Philip: ", Philip)
// console.log("Alan: ", Alan)


// let makeThemBig = function (...words) {
//     // console.log(words)

//     return words.join(" ")
// };

// console.log(makeThemBig("hello", "world", "!"))

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2];
// let arr4 = [0, ...arr1, ...arr2];

// console.log(arr3);
// console.log(arr4);

let obj1 = { name: "Obi-Wan Kenobi" };
let obj2 = { master: "Qui-Gon Jinn", apprentices: ["Luke", "Anakin"] };
let obj3 = { obj1, obj2, gender: "male" };
let obj4 = { ...obj1, ...obj2, gender: "male" };

console.log(obj3);
console.log(obj4);
