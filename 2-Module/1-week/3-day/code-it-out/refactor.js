
// Determine if the function below is breaking the SRP or DRY principle?
    //ANSWER:


// After determining it, refactor the code to make it follow that principle
function logFirstFourWords(words){
    console.log(`the word at index 0 is ${words[0]}`)
    console.log(`the word at index 1 is ${words[1]}`)
    console.log(`the word at index 2 is ${words[2]}`)
    console.log(`the word at index 3 is ${words[3]}`)

}


const myWords = ["hello", "darkness", "my", "old", "friend"];
logFirstFourWords(myWords);



// HINTS:
// DRY: Identify if there's a repeating pattern that is the same that can be condensed down
// SRP: Identify if the function is doing too much if the logic is different, should there be helpers?