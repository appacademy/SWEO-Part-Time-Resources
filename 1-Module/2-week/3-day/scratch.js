let changeWordsNoHelper = function(sentence){
    let words = sentence.split(' ');
    let vowels = 'aeiou';

    for (let i = 0; i < words.length; i++){
      let word = words[i];
      let newWord = '';
      for (let j = 0; j < word.length; j++){
        if (!vowels.includes(word[j])){
            newWord += word[j]
        }
      }
      words[i] = newWord;
      }
      return words.join(' ');
    }



 let removeVowels = function(word){
    let vowels = 'aeiou';
    let newWord = '';

    for (let i = 0; i < word.length; i++){
      if (!vowels.includes(word[i])) newWord += word[i]
    }
    return newWord;
  }


  let changeWords = function(sentence){
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++){
      let word = words[i];
      words[i] = removeVowels(word);
      }
      return words.join(' ');
    }



  let tweet = 'I just spent 3 hours walking around town playing pokemon go and I feel great!'
  console.log(changeWords(tweet));
  console.log(changeWordsNoHelper(tweet));
