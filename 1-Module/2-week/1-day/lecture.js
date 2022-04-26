console.log("-----------nested loops pairing------------");
// let people = ["wes", "jesse", "bill", "jeff"]
//             //["wes", "jesse", "bill", "jeff"]
// for(let i=0; i<people.length; i++){
//     let person1 = people[i];
//     // console.log(person1);
//     for(let j=0; j<people.length; j++){
//         let person2 = people[j];
//         console.log(person1, person2);
//     }
// }

console.log("-----------nested loops unique pairing------------");
let people = ["wes", "jesse", "bill", "jeff"]
            //["wes", "jesse", "bill", "jeff"]
for(let i=0; i<people.length; i++){
    let person1 = people[i];
    // console.log(person1);
    for(let j=i+1; j<people.length; j++){
        let person2 = people[j];
        console.log(person1, person2);
    }
}

console.log("----------------nested loops pairing arrays---------")
let names = ["wes", "jesse"];
let fields = ["age", "occupation", "hobby"];

//the outer is paused until the inner loop finishes it's iteration
for(let i=0; i<names.length; i+=1){
    let person = names[i];
    //the inner for loop will iterate while the outer is paused
    for(let j=0; j<fields.length; j+=1){
        let property = fields[j];
        console.log(person, property);
    }
}