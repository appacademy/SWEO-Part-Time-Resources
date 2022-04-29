let alternatingWords = function(wordsArray){
	for(let i=0; i<wordsArray.length; i++){
		//if index is % 2 === 0 
      	if(i % 2 === 0){
        	//then uppercase
          wordsArray[i] = wordsArray[i].toUpperCase();
        }
      	else{
        	wordsArray[i] = wordsArray[i].toLowerCase();
        }
      		
      
    }
}



let words1 = ['Belka', 'STRELKA', 'laika', 'DEZIK', 'Tsygan'];
alternatingWords(words1);
console.log(words1); // [ 'BELKA', 'strelka', 'LAIKA', 'dezik', 'TSYGAN' ]

let words2 = ['Yellowstone', 'Yosemite', 'Zion', 'Acadia'];
alternatingWords(words2);
console.log(words2); // [ 'YELLOWSTONE', 'yosemite', 'ZION', 'acadia' ]