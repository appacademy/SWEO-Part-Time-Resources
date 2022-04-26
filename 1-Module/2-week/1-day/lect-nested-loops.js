console.log("---------------nested loops pairing-------------");
// let people = ["wes", "bill", "jeff", "jesse"];
//                 //["wes", "bill", "jeff", "jesse"];
// for(let i=0; i<people.length; i++){
//     let person1 = people[i];
//     // console.log(person1);
//     for(let j=0; j<people.length; j++){
//         let person2 = people[j];
//         console.log(person1, person2)
//     }
// }

console.log("--------------nested loops unique pairing----------")
// let people = ["wes", "bill", "jeff", "jesse"];
                //["wes", "bill", "jeff", "jesse"];
// for(let i=0; i<people.length; i++){
//     let person1 = people[i];
//     for(let j=i+1; j<people.length; j++){
//         let person2 = people[j];
//         console.log(person1, person2);
//     }
// }
console.log("--------------pair two arrays to get names and fields----------")
let names = ["wes", "jesse"];
let fields = ["name", "occupation", "hobby"];
for(let i=0; i<names.length; i++){
    let person = names[i];
    for(let j=0; j<fields.length; j++){
        let property = fields[j];
        console.log(person, property);
    }
}



