window.addEventListener("DOMContentLoaded", () => {

  // PROBLEM 1

  const blueButton = document.querySelector('#make-circle-blue');
  blueButton.addEventListener('click', () => {
    document.querySelector('#blue-border-circle').className = "blue-fill"

  })

  // PROBLEM 2

  const inputCheck = document.querySelector('#will-not-check');

  inputCheck.addEventListener('click', (event) => {
    event.preventDefault();
  })


  // PROBLEM 3

  const noBanana = document.querySelector('#change-bananas-status');
  const img = document.createElement('img');
  noBanana.addEventListener('click', () => {
    document.querySelector('#bananas-div').innerHTML = 'No Bananas Today!'
    img.src = "./images/no-bananas.png";
    document.querySelector('#bananas-image-div').appendChild(img)
  })


  // PROBLEM 4

  const inputBox = document.querySelector('#fav-cookie');
  const cookieBtn = document.querySelector('#store-cookie');
  cookieBtn.addEventListener('click', () => {
    const text = inputBox.value;
    document.cookie = `favCookie=${text}`
  })

  if (document.cookie.includes('favCookie')) {
    inputBox.value = document.cookie.split("=")[1];
  }


  // PROBLEM 5

  const ulPies = document.querySelector('.pie-list');
  const inputBoxId = document.querySelector('#pie-type');
  const submitPie = document.querySelector('#save-pie');

  submitPie.addEventListener('click', () => {
    if (ulPies.children.length < 5 && inputBoxId.value) {
      const pieLi = document.createElement('li');
      pieLi.innerText = inputBoxId.value;
      ulPies.appendChild(pieLi);
    };
  })


  //PROBLEM 6

  const iceInput = document.querySelector('#fav-ice-cream');
  const iceFlavor = document.querySelector('#save-ice-cream');

  iceFlavor.addEventListener('click', () => {
    const favIceCream = iceInput.value
    localStorage.setItem('favoriteIce', favIceCream);
  })

  if (localStorage.getItem('favoriteIce')) {
    iceInput.value = localStorage.getItem('favoriteIce');
  }


  // PROBLEM 7

  const addApp = document.querySelector('#add-apple')
  const addOrange = document.querySelector('#add-orange')
  const empty = document.querySelector('#reset-basket')
  const fruitBasket = document.querySelector('#fruit-storage');
  const piecesFruit = document.querySelector('#total-fruit')

  let fruitCounter = 0;
  addApp.addEventListener('click', () => {

    if (fruitBasket.children.length < 25) {
      fruitCounter++
      piecesFruit.innerText = fruitCounter.toString();
      const apple = document.createElement('p');
      apple.innerText = 'apple';
      fruitBasket.appendChild(apple)
    }
  })

  addOrange.addEventListener('click', () => {

    if (fruitBasket.children.length < 25) {
      fruitCounter++
      piecesFruit.innerText = fruitCounter.toString();
      const orange = document.createElement('p');
      orange.innerText = 'orange';
      fruitBasket.appendChild(orange);
    }

  })

  empty.addEventListener('click', () => {
    fruitCounter = 0;
    piecesFruit.innerText = 0
    fruitBasket.innerText = '';
  })


  // PROBLEM 8

  const bubbleBtn = document.querySelector('#bubble-maker');
  bubbleBtn.addEventListener('click', (event) => {
    event.stopPropagation();
  })


  // PROBLEM 9

  const dictionaryBtn = document.querySelector('#dictionary-fetch');
  const results = document.querySelector('#results-area')

  dictionaryBtn.addEventListener('click', async () => {
    const res = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/dictionary')

    const data = await res.json();
    const word = `Word: ${data[0].word}`;
    const def = `Definition: ${data[0].meanings[0].definitions[0].definition}`

    const ul = document.createElement('ul');
    results.appendChild(ul);
    const wordLi = document.createElement('li');
    wordLi.innerText = word;
    const defLi = document.createElement('li');
    defLi.innerText = def;

    ul.appendChild(wordLi);
    ul.appendChild(defLi)
  })
});