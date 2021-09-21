/* 
Write a function that counts and uppercases all the vowels of all the 
strings located in an array of strings. Return an array that has the
count at the zeroth position and the uppercase version of the string
at the first position.
*/

function countAndUpper(arrOfStrs) {
  let count = 0;
  for (let i = 0; i < arrOfStrs.length; i++) {
    let str = arrOfStrs[i];
    for (let j = 0; j < str.length; j++) {
      let char = str[j];
      if ("aeiou".includes(char)) {
        arrOfStrs[i] = arrOfStrs[i].slice(0, j) + char.toUpperCase() + arrOfStrs[i].slice(j + 1);
        arrOfStrs[i].splice(j, 1, char.toUpperCase());
        count += 1;
      }
    }
  }
  return [count, arrOfStrs];
}

console.log(
  countAndUpper(["hello", "happy birthday", "this is what dreams are made of"])
); // [15, ['hEllO', 'hAppy bIrthdAy'....]}
