let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//forEach - can't return anything
let sumFE = 0;

array.forEach( (i, idx) => {
  sumFE += i;
  // console.log( i, idx );
} )

console.log('forEach: ', sumFE);
//map - returns an array
/*
let res = [];
for (let i = 0; i < array.length; i++) {
  res.push( array[i] * 2 );
}

let res = array.map( el => el * 2 );
*/
let newArr = array.map( (el, idx) => {
  if (el % 2 === 0) return 'even';
  else return 'odd';
} );
let regular = array.map( function(el) {
  return el * 2;
});

console.log('map: ', newArr);
// console.log( regular );

//filter - return an array of elements that returned truthy
// let filtered = array.filter( (el, idx) => {
//   if ( el % 2 === 0 ) {
//     return true;
//   } else {
//     return false;
//   }

//   return el % 2 === 0;
// })
let filtered = array.filter( (el) => el % 2 === 0 )

console.log('filter: ', filtered)
//reduce - returns a single variable
let sum = array.reduce( ( counter, el ) =>  {
  return counter += el * 3;
}, 0)
console.log('reduce: ', sum );

let words = ['how', 'are', 'you', 'luke']
/* 
let accum = ''

for (let i = 0; i < words.length; i++) {
  accum += el + ' ';
}
*/
let sent = words.reduce( (accum, el) => {
  return accum += ' ' + el + ' ';
}, '')
console.log( sent );

// Git and Github Stuff

/*
1. Clone repository into wherever we want it
  - Go to repo
  - Copy Link
  - ```git clone <link>```
2. Delete '.git' file
  - rm .git
3. Create your repo
  - Go to Github
  - Click 'New Repository'
    - Set option, give it a name
4. Follow what it says on screen
5. Follow Step 5 below on
*/

/* Clone and Share Steps ( The Tristan Way )
1. Clone repository into wherever we want it
  - Go to repo
  - Copy Link
  - ```git clone <link>```
2. Create your repo
  - Go to Github
  - Click 'New Repository'
    - Set option, give it a name
3. Change repo-url
  - ```git remote set-url origin <link>```
  - check that the repo has been redirect
    - ``` git remote -v ```
4. Add repo => ```git add .```
  - commit repo => ``` git commit -m 'first commit' ```
  - push repo => ```git push```
5. Add collaborators
  - setting > collaborators > manage access > put in username
  - this sends an email to the people you specified
*/

/* Clone as Collaborator
1. Accept the Email
2. Clone repo into wherever we want it
  - Go to repo
  - Copy Link
  - ```git clone <link>```
3. Make changes
4. Add, Commit, Push like before

*** if you have a clone, you only need to pull
  - ```git pull```

*** additional commands
  - git status : shows current status
*/