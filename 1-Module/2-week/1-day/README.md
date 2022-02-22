# W2D1

## Assessment Day

1. Kickoff talk
2. Assessment
3. Culture Curriculum (How to Study)
4. Overview of the week
5. If there is time:
    - Pig Latin Recall Walkthrough
    - Two Sum Walkthrough
# W2D1

## Assessment Day

1. Kickoff talk
2. Assessment
3. Culture Curriculum (How to Study)
4. Overview of the week
5. If there is time:
    - Pig Latin Recall Walkthrough
    - Two Sum Walkthrough


### Solution for twoSum:

```js
// your code here

// numbers are unique
function twoSum(arr, target){
	for(let i = 0; i < arr.length; i++){
		for(let j = i + 1; j < arr.length; j++){
			let firstNumber = arr[i] // i = 0 , arr[i] = 1
            let secondNumber = arr[j] // j = 1,  arr[j] = 7
            let sum = firstNumber + secondNumber
            console.log('i == ', i, ' arr[i] == ', arr[i])
			console.log('j == ', j, ' arr[j] == ', arr[j])
            if(sum === target){
				return true
			}
		}
	}

  	return false
}

// beginner solution


				//  i = 0 , arr[i] = 1
				//  j = 1,  arr[j] = 7
console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false
```

## Resources
https://bjorklab.psych.ucla.edu/research/
https://en.wikipedia.org/wiki/Leitner_system


resources for studying:

1. https://howtostudy.org/
2. https://collegeinfogeek.com/flashcard-apps/
3. https://chrome.google.com/webstore/detail/stayfocusd/laankejkbhbdhmipfmgcngdelahlfoji?hl=en
4. https://chrome.google.com/webstore/detail/stayfocusd/laankejkbhbdhmipfmgcngdelahlfoji?hl=en
5. https://www.forestapp.cc/
6. https://www.forestapp.cc/
7. https://chrome.google.com/webstore/detail/marinara-pomodoro%C2%AE-assist/lojgmehidjdhhbmpjfamhpkpodfcodef?hl=en

resources for wellness:
1. https://www.nami.org/Your-Journey/Individuals-with-Mental-Illness/Taking-Care-of-Your-Body/Managing-Stress
2. https://www.sleepfoundation.org/bedroom-environment/technology-in-the-bedroom
3. https://www.health.harvard.edu/healthbeat/foods-linked-to-better-brainpower
4. https://www.taste.com.au/quick-easy/galleries/top-100-easy-dinner-recipes/biccuul7?page=6
5. https://www.self.com/gallery/best-at-home-workouts-bodyweight
6. https://www.womenshealthmag.com/health/g25178771/best-meditation-apps/
7. https://www.headspace.com/
8 .https://www.youtube.com/watch?v=snAhsXyO3Ck&ab_channel=CGPGrey
