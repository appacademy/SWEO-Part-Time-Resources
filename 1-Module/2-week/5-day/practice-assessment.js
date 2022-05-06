// butter: $1
// eggs: $2
// milk: $3
// bread: $4
// cheese: $5

//input; ['cheese', 'butter', 'eggs'] //cheese =5, butter=1, eggs= 2 --> total 8
//outputs: 8
function costOfGroceries(groceries) {
    //sum up all the items in groceries array based on the given prices
    //variable to hold combined prices of all items in groceries
    let total = 0;
    for(let i=0; i<groceries.length; i++){
        let item = groceries[i]; //ex above: at i=0 -->item --> 'cheese'
      if(item === 'butter'){
          total+=1;
      }
      else if(item ==='eggs'){
          total+=2
      }
      else if(item ==='milk'){
          total+=3
      }
      else if(item ==='bread'){
          total+=4
      }    
      else if(item ==='cheese'){
          total+=5
      }        
    }
    return total;
  }
  //groceriesA = ['cheese', 'butter', 'eggs']
  //input: [groceriesA, groceriesB, groceriesC, groceriesD]
  //output: 1 (index of the subArr that has the highest cost)
  function mostExpensiveGroceries(groceriesList) {
    //we need to somehow track the most expensive groceriesList (subarray)
    let mostExpensiveIndex = 0; //initially the first one will be the biggest
    let mostExpensiveCost = costOfGroceries(groceriesList[0]);
    //keep track of the biggest one, then continue and if something is bigger, replace it.
    for(let i=1; i<groceriesList.length; i++){
        let subArrList = groceriesList[i]; //at i=1 --> groceriesB
      //determine if current subArrList's cost is bigger than our current mostExpensive one
      let currentCostSubArr = costOfGroceries(subArrList)
      if(currentCostSubArr > mostExpensiveCost){
        //replace both mostExpensiveCost and Index with the new one if new is more expensive
        mostExpensiveIndex = i;
        mostExpensiveCost = currentCostSubArr;
      }
    }
    // console.log("most expensive index:", mostExpensiveIndex);
    return mostExpensiveIndex;
  }
  
  
  // TESTS
  // DO NOT MODIFY ANYTHING BELOW THIS LINE
  
  const groceriesA = ['cheese', 'butter', 'eggs'];
  const groceriesB = ['eggs', 'milk', 'bread', 'bread'];
  const groceriesC = ['cheese', 'bread'];
  const groceriesD = ['eggs', 'butter'];
  
  console.log(costOfGroceries(groceriesA));  // 8
  console.log(costOfGroceries(groceriesB));  // 13
  console.log(costOfGroceries(groceriesC));  // 9
  console.log(costOfGroceries(groceriesD));  // 3
  
  mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]);
  
  let score = 0;
  
  if (costOfGroceries(groceriesA) === 8) score++;
  if (costOfGroceries(groceriesB) === 13) score++;
  if (costOfGroceries(groceriesC) === 9) score++;
  if (costOfGroceries(groceriesD) === 3) score++;
  
  if (mostExpensiveGroceries([groceriesA, groceriesB, groceriesC, groceriesD]) === 1) score++;
  if (mostExpensiveGroceries([groceriesA, groceriesD]) === 0) score++;
  if (mostExpensiveGroceries([groceriesA, groceriesD, groceriesC]) === 2) score++;
  
  console.log("You have scored " + score + "/7 points.");