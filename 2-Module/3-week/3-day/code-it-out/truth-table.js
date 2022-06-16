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

A   B      (!A && B)   (A || !B)   (!A && B) || (A || !B)
---------------------------------------------------
0   0          0            1               1
0   1          1            0               1
1   0          0            1               1
1   1          0            1               1

*/

console.log((!false && false) || (false || !false))
console.log((!false && true) || (false || !true))
console.log((!true && false) || (true || !false))
console.log((!true && true) || (true || !true))