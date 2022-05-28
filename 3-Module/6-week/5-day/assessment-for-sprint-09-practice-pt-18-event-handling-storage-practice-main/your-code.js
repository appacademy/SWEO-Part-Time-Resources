function blueCircle () {
  document.getElementById('make-circle-blue').addEventListener('click', e => {
    let div = document.getElementById('blue-border-circle')
    div.classList.add('blue-fill')
  })
}
function checkBox () {
  document.getElementById('will-not-check').addEventListener('click', e => {
    e.preventDefault()
  })
}
function noBananas () {
  document.getElementById('change-bananas-status').addEventListener('click', e => {
    document.getElementById('bananas-div').innerText = 'No Bananas Today!'
    let img = document.createElement('img')
    img.setAttribute('src', './images/no-bananas.png')
    document.getElementById('bananas-image-div').appendChild(img)
  })
}
function storeCookie () {
  if(document.cookie){
    document.getElementById('fav-cookie').value = document.cookie.split('=')[1]
  }
  document.getElementById('store-cookie').addEventListener('click', e => {
    let val = document.getElementById('fav-cookie').value
    document.cookie = `favCookie=${val}`
  })
}
function submitPie () {
  document.getElementById('save-pie').addEventListener('click', e => {
    if(document.getElementById('pie-type').value ==='') return
    let val = document.getElementById('pie-type').value
    let list = document.querySelector('.pie-list')
    let li = document.createElement('li')
    li.innerText = val
    list.appendChild(li)
    document.getElementById('pie-type').value = ''
  })
}
function saveIceCream () {
  if(localStorage.getItem('favIceCream')){
    document.getElementById('fav-ice-cream').value = localStorage.getItem('favIceCream')
  }
  document.getElementById('save-ice-cream').addEventListener('click', e => {
    let value = document.getElementById('fav-ice-cream').value
    localStorage.setItem('favIceCream', value)
  })
}
function fruitBasket () {
  document.getElementById('reset-basket').addEventListener('click', e => {
    let basket = document.getElementById('fruit-storage')
    basket.innerHTML = ''
    document.getElementById('total-fruit').innerText = '0'
  })
  document.getElementById('add-apple').addEventListener('click', e => {
    let basket = document.getElementById('fruit-storage')
    let div = document.createElement('div')
    div.innerText = 'A'
    basket.appendChild(div)
    let total = document.getElementById('total-fruit')
    total.innerText = Number(total.innerText) +1
  })
  document.getElementById('add-orange').addEventListener('click', e => {
    let basket = document.getElementById('fruit-storage')
    let div = document.createElement('div')
    div.innerText = 'O'
    basket.appendChild(div)
    let total = document.getElementById('total-fruit')
    total.innerText = Number(total.innerText) +1
  })
}
function noBubbles () {
  document.getElementById('bubble-maker').addEventListener('click', e => {
    e.stopPropagation()
  })
}
function dictionary () {
  document.getElementById('dictionary-fetch').addEventListener('click', async e => {
    let res = await fetch ('https://api.dictionaryapi.dev/api/v2/entries/en/dictionary')
    res = await res.json()
    console.log(res[0])
    let resultDiv = document.getElementById('results-area')
    
    let li1 = document.createElement('li')
    li1.innerText = `Word : ${res[0].word}`
    let li2 = document.createElement('li')
    li2.innerText = `Definition: ${res[0].meanings[0].definitions[0].definition}`
    let newUl = document.createElement('ul')
    newUl.appendChild(li1)
    newUl.appendChild(li2)
    resultDiv.appendChild(newUl)
  })
}
window.addEventListener("DOMContentLoaded", () => {
    blueCircle()
    checkBox()
    noBananas()
    storeCookie()
    submitPie()
    saveIceCream()
    fruitBasket()
    noBubbles()
    dictionary()
});