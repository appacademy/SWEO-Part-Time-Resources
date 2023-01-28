
window.addEventListener("DOMContentLoaded", () => {
  // Your code here

  //P1
  let blueButton = document.querySelector("#make-circle-blue")
  let blueDiv = document.getElementById("blue-border-circle")

  // console.log(blueButton, blueDiv)
  blueButton.addEventListener("click", (e) =>{
    blueDiv.className = 'blue-fill'
  })

  //P2
  document.getElementById("will-not-check")
  .addEventListener("click", (apple) => {
    apple.preventDefault()
  })

  //P3
  let noBananaButton = document.getElementById("change-bananas-status")
  let divBanana = document.getElementById("bananas-div")
  let imgBanana = document.getElementById("bananas-image-div")

  // console.log(noBananaButton, divBanana, imgBanana)

    noBananaButton.addEventListener("click", (event) =>{
      let newImg = document.createElement("img")
      // console.log(newImg)
      newImg.src = './images/no-bananas.png'
      // console.log(imgBanana.children.length)
      if(!imgBanana.children.length){
        imgBanana.appendChild(newImg)
      }
      divBanana.innerText = "No Bananas Today!"
    })



    //P4
    let inputCookie = document.getElementById("fav-cookie")
    let storeButton = document.getElementById("store-cookie")
// console.log(inputCookie, storeButton)
if(document.cookie){
  // console.log(document.cookie)
  let favCookie = document.cookie.split("=")
  // console.log(favCookie[1])
  inputCookie.value = favCookie[1]

}
storeButton.addEventListener("click", (e) =>{  // console.log(inputCookie.value)

  document.cookie = `favCookie=${inputCookie.value}`
})

//P5
let ul = document.querySelector(".pie-list")
let pieInput = document.getElementById("pie-type")
let submitPie = document.getElementById("save-pie")
// console.log(ul, pieInput, submitPie)
submitPie.addEventListener("click", (e) =>{
  if(ul.children.length <= 4 && pieInput.value){

    let li = document.createElement("li")
    // console.log(li)
    li.innerText = pieInput.value
    ul.appendChild(li)
  }

  pieInput.value = "";
})

//P6

let iceCreamInput = document.getElementById("fav-ice-cream")
let iceButton = document.getElementById("save-ice-cream")
// console.log(iceCreamInput, iceButton)

let currFav = localStorage.getItem("iceCream")
// console.log(currFav)
if(currFav) iceCreamInput.value = currFav

iceButton.addEventListener("click", (e) =>{
  localStorage.setItem("iceCream", iceCreamInput.value)
})

//P7

let apple = document.getElementById("add-apple")
let orange = document.getElementById("add-orange")
let emptyBasket = document.getElementById("reset-basket")
let fruitBasket = document.getElementById("fruit-storage")
let piecesFruit = document.getElementById("total-fruit")
// console.log(apple, orange, emptyBasket, fruitBasket, piecesFruit)
let fruitNum = 0;
piecesFruit.innerText = fruitNum;
apple.addEventListener("click", (e) =>{
  if(fruitNum >= 25) return
  fruitBasket.innerText += '🍎';
  fruitNum++;
  piecesFruit.innerText = fruitNum;
})
orange.addEventListener("click", (e) =>{
  if(fruitNum >= 25) return
  fruitBasket.innerText += '🍊';
  fruitNum++;
  piecesFruit.innerText = fruitNum;
})

emptyBasket.addEventListener("click", (e) =>{
  fruitBasket.innerText = ""
  fruitNum = 0;
  piecesFruit.innerText = fruitNum;
})

//P8

document.getElementById("bubble-maker")
.addEventListener("click", (e) =>{
  e.stopPropagation()
})

//P9

let fetchButton = document.getElementById("dictionary-fetch")
let resultArea = document.getElementById("results-area")

// console.log(fetchButton, resultArea)

fetchButton.addEventListener("click", (e) =>{
  let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/dictionary'
  let listArea = document.createElement("ul")
  let liWord = document.createElement("li")
  let liDef = document.createElement("li")

  fetch(url)
    .then((res) => res.json())
    .then((resBody) => {
      // console.log(resBody)
      let def = resBody[0].meanings[0].definitions[0].definition
    let word = resBody[0].word
    liWord.innerText = `Word: ${word}`
    liDef.innerText = `Definition: ${def}`
    listArea.appendChild(liWord)
    listArea.appendChild(liDef)
    resultArea.appendChild(listArea)
    // console.log(def, word)
    })
})

// fetchButton.addEventListener("click", async (e) =>{
// let url = 'https://api.dictionaryapi.dev/api/v2/entries/en/dictionary'

// let res = await fetch(url)
// // console.log(res)
// let resBody = await res.json()
// let def = resBody[0].meanings[0].definitions[0].definition
// let word = resBody[0].word
// console.log(def, word)

// let listArea = document.createElement("ul")
// console.log(listArea)
// listArea.innerHTML += `<li>Word: ${word}</li>`
// listArea.innerHTML += `<li>Definition: ${def}</li>`
// // console.log(listArea)
// resultArea.appendChild(listArea)

// })

});
