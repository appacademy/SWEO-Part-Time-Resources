//our object
let cohort = {
  schoolName: "app academy",
  startMonth: "june",
  instructors: [
    {
      firstName: "Philip",
      lastName: "Ling",
      role: "Lead Instructor",
      currentGame: { title: "Pokemon Unite", hoursPlayed: 300 },
      multipleChoiceScore: 4,
      specProblemsScore: 6,
      pets: false,
    },
    {
      firstName: "Blake",
      lastName: "Watts",
      role: "Instructional Assitant",
      currentGame: { title: "Escape From Tarkov", hoursPlayed: 350 },
      multipleChoiceScore: 4,
      specProblemsScore: 6,
      pets: "dog",
    },
  ],
};

// phillip and blake deconstructed from our objects instructor array
const [phillip, blake] = cohort.instructors;

// blake and phillip are just objects that we can now use to key into
// console.log(phillip, blake);

// console.log(phillip.firstName + " and " + blake.firstName + " are our instructors!");
// console.log(`${phillip.firstName} and ${blake.firstName} are our instructors!`)


// with string interpolation we actually can throw javascript straight into our curly braces, including functions, methods, condtionals, and expressions
const getFullName = (person) => {
    return `${person.firstName} ${person.lastName}`
}

// console.log(`My full name is ${getFullName(blake)}!`)
// console.log(`My full name is ${getFullName(blake).toUpperCase()}!`)

// console.log(`Our instructors have played a total of ${cohort.instructors.reduce((accum, obj) =>
//     accum += obj.currentGame.hoursPlayed, 0)} hours in video games`)

// ternary
// conditional-after ? runs if true -- else runs code after :
// blake.pets ? `${ has a blake.pets} : 'does not have any pets'

// console.log(`${blake.pets ? `Blake has a ${blake.pets}` : 'blake does not have any pets'}!`)
// console.log(`${phillip.pets? `Phillip has a ${phillip.pets}`: 'Phillip does not have any pets'}!`)

// we can also do expressions
// console.log(`I got ${4 + 6}/10 on my last test!`);
// console.log(`I got a ${phillip.multipleChoiceScore + phillip.specProblemsScore}/10 on my last test!`);

//using \n will create a new line in your string
// console.log('Sky is blue. \nGrass is green');

//using single or double quotes inside of your back tics will represent themselves accordingly with an escape character
//without back tics you would need to use a \ infront of of your single or oduble quotes
// console.log('Phillip \'said\'', ("Good \"job\" on the test!"))
//with back tic we can do it like this
// console.log(`Phillip 'said', "Good job on the test!"`);
