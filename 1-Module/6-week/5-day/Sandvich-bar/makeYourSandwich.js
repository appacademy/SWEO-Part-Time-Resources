const { resolve } = require('path');
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let bread = {
  italian: 5,
  wheat: 6,
  garlic: 7
}
let meat = {
  chicken: 5,
  turkey: 4,
  steak: 6
}
let drink = {
  small: 2,
  medium: 3,
  large: 4
}

let order = []

function makeYourSandwich() {
  let sandwich = {}
  let customer = {}
  rl.question("What is your name ", (answer) => {
    console.log("hello, " + answer)
    customer['name'] = answer
    order.push(customer)
    rl.question("What kind of bread you would like today? [italian, wheat, garlic] ", (answer) => {
      sandwich["bread"] = answer
      console.log("Exelent choice ")
      rl.question("What kind of meat you would like ? [chicken,turkey, steak ] ", (answer) => {
        console.log("Great")
        sandwich["meat"] = answer
        rl.question("What vegetables would you like to add to your sandwich ", (answer) => {
          console.log("You've got this")
          sandwich['vegetables'] = answer
          let price = calcPrice(sandwich)
          if (!price) {
            console.log('You order is incorrect')
            rl.close()
            makeYourSandwich()
          }
          sandwich['price'] = price
          order.push(sandwich)
          orderDrink()
        })
      })
    })
  })
}
makeYourSandwich()

function calcPrice(sandwich) {
  let price = 0
  if (sandwich.bread in bread && sandwich.meat in meat) {
    price += bread[sandwich.bread]
    price += meat[sandwich.meat]
  } else {
    price = null
  }
  return price
}

function orderDrink() {
  let drink = {}
  rl.question('what kind of drink you would like ? ', (answer) => {
    console.log("Your drink is : " + answer)
    drink["soda"] = answer
    rl.question('What size? [small, medium, large] ', (answer) => {
      console.log("Cool")
      drink['size'] = answer
      rl.question('Would you like some ice ? ', (answer) => {
        console.log("Exelelent")
        drink['ice'] = answer
        let price = getPrice(drink)
        if (!price) {
          console.log('You order is incorrect')
          rl.close()
          makeYourSandwich() 
        }
        rl.close()
        drink["price"] = price
        order.push(drink)
        let tax = calcTax()
        let total = {}
        total["total"] = tax
        order.push(total)
        let message = createTotalMessege()
      })
    })
  })
}

function getPrice(beverage) {
  let price = 0
  if (beverage.size in drink) {
    price += drink[beverage.size]
  } else {
    console.log('your order is incorrect')
    price = null
  }
  return price
}

function calcTax() {
  let res=0
  for(let i=0; i<order.length; i++){
    if(order[i].price){
      res+=order[i].price
    }
  }
  return (res  * 1.08625).toFixed(2)
}

function createTotalMessege() {
  console.log(`Dear, ${order[0].name} your sandwich with ${order[1].bread} bread, and ${order[1].meat}, with ${order[1].vegetables} is ready. Your drink is ${order[2].size} ${order[2].soda}. Total $${order[3].total}`)
}

