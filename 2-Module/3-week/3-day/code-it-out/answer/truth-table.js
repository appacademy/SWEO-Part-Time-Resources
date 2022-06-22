/*Things to note:
    
    ! = not

    && = both conditions are true

    || = one or both conditions are true

    XOR ( ^ ) = exclusive or, one is true, but not both

    True can be represented by 1, and false by 0.

    De Morgan's Law: !(A && B) === !A || !B
*/

console.log("--------------fill in the table!-----------")
/*
Given this table, what is the logic result of the compound expression. Fill in the (?)

Hint: Try to break this problem down into multiple columns. I.e. a column for (!A && B) and a column for (A || !B). Then come back and compare the two through the `||` operation.

A   B     (!A && B) || (A || !B)
------------------------
0   0          ?
0   1          ?
1   0          ?
1   1          ?


YOUR TABLE HERE(feel free to copy and paste above and change it):

A   B     (!A && B)    (A || !B)   (!A && B) || (A || !B)
---------------------------------------------------------
0   0          0           1                1
0   1          1           0                1
1   0          0           1                1    
1   1          0           1                1


*/

console.log((!false && false) || (false || !false))
console.log((!false && true) || (false || !true))
console.log((!true && false) || (true || !false))
console.log((!true && true) || (true || !true))



// ---robert's code
function logicSentence1(bool1, bool2) {
    const A = bool1;
    const B = bool2;

    const disjunct1 = (!A && B);
    const disjunct2 = (A || !B);

    const result = (disjunct1 || disjunct2);

    return result;
}

const truthConditions = [[false, false], [false, true], [true, false], [true, true]];

for (let i = 0; i < truthConditions.length; i++) {
    const thisCondition = truthConditions[i];
    const thisResult = logicSentence1(...thisCondition);
    console.log(thisResult);
}


// Christopher's Code: My code to demo: 
//1 is truthy, 0 is falsey
for (let i = 0; i < 2; i++) {//A
  for (let j = 0; j < 2; j++) {//B
    console.log(((!i && j) || (i || !j)))
  }
}
