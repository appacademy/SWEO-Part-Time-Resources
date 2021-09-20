/* 
Write a function that counts and uppercases all the vowels of all the 
strings located in an array of strings. Return an array that has the
count at the zeroth position and the uppercase version of the string
at the first position.
*/

function countAndUpper(arrOfStrs) {
  for (i = 0; i < arrOfStrs.length; i++) {
    for (i = 0; i < arrOfStrs.length; i++) {
      if (arrOfStrs[i].includes("aeiou")) {
        arrOfStrs.toUpperCase();
        count += 1;
      }
    }
  }
  return [count, arrOfStrs];
}

countAndUpper(["hello", "happy birthday", "this is what dreams are made of"]);
