const sentence = "Whate is the most common character in this sentence";
/*
make an obj to count letters with
loop through sentence
	on each char see if its in my obj
    	if so, I know that the val is how many times it's shown up. So just add 1
        if not, I know its the first time we've seen the char, so add it to the obj
        
I have an obj with all the chars as keys, and the vals are how many times they showed up
save the highest
loop through the vals to find the highest
	return the letter with the highest val
*/

const mostCommonChar = sentence => {
	let obj = {}
    // sentence = sentence.split(" ").join("") 
  	for (let char of sentence) {
      	if (obj[char] !== undefined) obj[char] += 1
    	else obj[char] = 1
    }	
  	delete obj[' ']
  
  	let highNum = 0
    let highLetter = ''
    
    let keyArr = Object.keys(obj)
  	for (let i = 0; i < keyArr.length; i++) {
      	let key = keyArr[i]
    	let val = obj[key]
        if (val === highNum) {
        	if (key < highLetter) highLetter = key
        } else if (val > highNum) {
        	highNum = val
          	highLetter = key
        }
    }
  // console.log(obj)
  return highLetter
}
// console.log('a' < 'b')
console.log(mostCommonChar(sentence));           //  "t"
