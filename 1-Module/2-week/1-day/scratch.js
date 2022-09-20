let students = ["jim", "bob", "tom", "sally"] // an array of students

//i === 4
for (let i = 0; i < students.length; i++) {
  //sally
  let firstStudent = students[i];

  // i === 1
  // j === 4
 for (let j = i + 1; j < students.length; j++){

  //student sally
  let secondStudent = students[j];

  console.log(firstStudent, secondStudent)
 }
}
