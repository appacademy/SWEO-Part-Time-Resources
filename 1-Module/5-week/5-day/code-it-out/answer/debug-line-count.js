/***********************************************************************
Context: 
- You currently arrived at the movie theater and got in line, 
- however, you are curious and wondered what position you are in line 
- You don't want to manually do the counting yourself, but instead you ask the person in front of you what their position is ... so you can add one on top of whatever position they are...

lineCount is a recursive function that will help count the amount of people that are in front of us and provide a number that represents our current position.  

Your task:
- debug this recursive function using the debugger.

Examples:
// we are denoted as "us" at the start of the array.

console.log(lineCount(["us", "john", "jeff", "Cindy", "Sara", "Ben"])); //6

console.log(lineCount(["us", "Aria", "Perry", "Katrina", "Daniels", "Derrick", "Clarence", "Potter", "Dale", "Ciara", "Eden"])); //11

***********************************************************************/
// Debug this problem!

const lineCount = (people) => {
    debugger;
    //base case: when people array is empty
    if(people.length === 0){
        return 0; 
    }

    const nextPersonTotal = lineCount(people.slice(1));

    //my Position is 1 + whoever is in front of me's total position
    const myPosition = 1 + nextPersonTotal;
    
    return myPosition;

}

console.log(lineCount(["us", "john", "jeff", "Cindy", "Sara", "Ben"])); //6

//  Us    --> "john"  -->  "jeff"  -->  "Cindy"  -->  "Sara"  -->  "Ben"  --> no one left (0)
//  |           |             |            |            |            |              |
// 6(1+5) <-- 5(1+4)  <--  4(1+3)  <--  3 (1+2)  <--  2 (1+1) <-- 1 (1+0) <--       0