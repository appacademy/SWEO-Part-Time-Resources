/*

Fix the `cutestCat` function. Should return the cat with the highest `cuteness`
rating.

*/

function cutestCat(cats) {
  //add debugger keyword
  debugger;
  let cutest = 0;
  let cutestObj;
  let i = 0;


  while (i < cats.length) {
    const cat = cats[i];
    if (cat["cuteness"] > cutest) { //obj > 0 // 9 > 0 // I EXPECT TO ENTER THIS IF STATEMENT.
      cutest = cat.cuteness;
      //update the cutestObj as well with the new cat that is cuter
      cutestObj = cat;
    }
    i++;
  }

  return cutestObj;
}

const cats = [
  { name: 'Fluffy', cuteness: 9 },
  { name: 'Princess', cuteness: 6 },
  { name: 'Tiger', cuteness: 7 },
  { name: 'Indie', cuteness: 5 },
]

console.log(cutestCat(cats)); // { name: 'Fluffy', cuteness: 9 }