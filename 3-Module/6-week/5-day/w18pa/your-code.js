window.addEventListener('DOMContentLoaded', () => {
  //! /******************** Problem 1 ********************/

  const blueButton = document.getElementById('make-circle-blue');
  const blueDiv = document.getElementById('blue-border-circle');

  blueButton.addEventListener('click', (e) => {
    blueDiv.className = 'blue-fill';
    // blueDiv.classList = 'blue-fill';
    // blueDiv.setAttribute('class', 'blue-fill');
  });

  //! /******************** Problem 2 ********************/

  const unclickable = document.getElementById('will-not-check');

  unclickable.addEventListener('click', (event) => event.preventDefault());

  // (supercalifragilisticexpialadocious) => {
  //   supercalifragilisticexpialadocious.preventDefault();
  // }

  //! /******************** Problem 3 ********************/

  const noBananaButton = document.getElementById('change-bananas-status');
  const divBanana = document.getElementById('bananas-div');
  const imgBanana = document.getElementById('bananas-image-div');

  noBananaButton.addEventListener('click', (event) => {
    const newImg = document.createElement('img');
    newImg.src = './images/no-bananas.png';

    // if (divBanana.innerText !== 'No Bananas Today!')
    //   imgBanana.appendChild(newImg);

    divBanana.innerText = 'No Bananas Today!';
    if (!imgBanana.children.length) imgBanana.appendChild(newImg);
  });

  // //? /************** Aaron **************/
  // const noBananas = document.getElementById('change-bananas-status');
  // const bananaText = document.getElementById('bananas-div');
  // const bananasImg = document.getElementById('bananas-image-div');

  // const alterBananaInv = () => {
  //   bananaText.innerText = 'No Bananas Today!';

  //   let newImg = document.createElement('img');
  //   newImg.src = './images/no-bananas.png';

  //   if (Array.from(bananasImg.childNodes) < 1) bananasImg.appendChild(newImg);
  // };

  // noBananas.addEventListener('click', alterBananaInv);

  // //? /************** Natalia **************/
  // function noBananas() {
  //   document
  //     .getElementById('change-bananas-status')
  //     .addEventListener('click', (e) => {
  //       document.getElementById('bananas-div').innerText = 'No Bananas Today!';
  //       let img = document.createElement('img');
  //       img.setAttribute('src', './images/no-bananas.png');
  //       if (!document.getElementById('bananas-image-div').children.length)
  //         document.getElementById('bananas-image-div').appendChild(img);
  //     });
  // }
  // noBananas();

  // //? /************** Alex  **************/ Spicy award
  // const storeBananas = () => {
  //   const newImg = document.createElement('img');
  //   document
  //     .getElementById('change-bananas-status')
  //     .addEventListener('click', (e) => {
  //       document.getElementById('bananas-div').innerText = 'No Bananas Today!';

  //       newImg.src = './images/no-bananas.png';
  //       console.log(
  //         document.getElementById('bananas-image-div').appendChild(newImg)
  //       );
  //     });
  // };
  // storeBananas();

  //! /******************** Problem 4 ********************/

  const inputCookie = document.getElementById('fav-cookie');
  const storeButton = document.getElementById('store-cookie');

  if (document.cookie) {
    // console.log(document.cookie);
    // console.log(document.cookie.split('='));
    // console.log(document.cookie.split('=')[1]);
    const favCookie = document.cookie.split('=')[1];
    inputCookie.value = favCookie;
  }

  storeButton.addEventListener('click', (e) => {
    const myCookie = `favCookie=${inputCookie.value}; max-age=1800`;
    document.cookie = myCookie;
  });

  //! /******************** Problem 5 ********************/

  const ul = document.querySelector('.pie-list');
  const pieInput = document.querySelector('#pie-type');
  const submitPie = document.querySelector('#save-pie');

  submitPie.addEventListener('click', (e) => {
    if (pieInput.value && ul.childNodes.length <= 4) {
      const li = document.createElement('li');
      li.innerText = pieInput.value;

      ul.appendChild(li);
    }
    pieInput.value = '';
  });

  // //? /************** Aaron **************/

  // const pieList = document.querySelector('.pie-list');
  // const pieInput = document.getElementById('pie-type');
  // const submitPie = document.getElementById('save-pie');

  // const addPie = () => {
  //   const inputPie = pieInput.value;
  //   let newPie = document.createElement('li');

  //   if (inputPie && Array.from(pieList.childNodes).length <= 4) {
  //     newPie.innerText = inputPie;
  //     pieList.appendChild(newPie);
  //   }
  //   pieInput.value = '';
  // };
  // submitPie.addEventListener('click', addPie);

  // //? /************** Alex **************/

  // const pieList = () => {
  //   // click event
  //   document.getElementById('save-pie').addEventListener('click', (e) => {
  //     // query and create elements
  //     const pies = document.getElementById('pie-type').value;
  //     const unList = document.querySelector('.pie-list');
  //     const newPie = document.createElement('li');

  //     // assign the input 'pie' value to the newPiw list item
  //     newPie.innerText = pies;

  //     // check and limit number of pies to 5 and only 'truly' values can be added to the list
  //     if (unList.childNodes.length < 5 && pies) {
  //       //append the newPie to the un ordered List
  //       unList.appendChild(newPie);
  //     }
  //     // document.getElementById('pie-type').value = '';
  //   });
  // };
  // pieList();

  //! /******************** Problem 6 ********************/

  const iceCreamInput = document.getElementById('fav-ice-cream');
  const iceButton = document.getElementById('save-ice-cream');
  const currFav = localStorage.getItem('grossColdMilk');
  // console.log(localStorage.grossColdMilk);

  if (currFav) iceCreamInput.value = currFav;

  iceButton.addEventListener('click', (e) => {
    localStorage.setItem('grossColdMilk', iceCreamInput.value);
  });

  //! /******************** Problem 7 ********************/
  //? Bad spice
  // const fruitNum = (starter = 1) => {
  //   if (starter === 0) piecesFruit.innerText = 0;

  //   const curr = Number(piecesFruit.innerText);
  //   piecesFruit.innerText = curr + starter;
  // };
  // fruitNum(0);
  const apple = document.getElementById('add-apple');
  const orange = document.getElementById('add-orange');
  const emptyBasket = document.getElementById('reset-basket');
  const fruitBasket = document.getElementById('fruit-storage');
  const piecesFruit = document.getElementById('total-fruit');
  let fruitNum = 0;
  piecesFruit.innerText = fruitNum;

  apple.addEventListener('click', (e) => {
    if (fruitNum >= 25) return;
    fruitBasket.innerText += '🍎';
    fruitNum++;
    piecesFruit.innerText = fruitNum;
  });

  orange.addEventListener('click', (e) => {
    if (fruitNum >= 25) return;
    fruitBasket.innerText += '🍊';
    fruitNum++;
    piecesFruit.innerText = fruitNum;
  });

  emptyBasket.addEventListener('click', (e) => {
    fruitBasket.innerText = '';
    fruitNum = 0;
    piecesFruit.innerText = fruitNum;
  });

  //! /******************** Problem 8 ********************/

  const bubbleButton = document.getElementById('bubble-maker');

  bubbleButton.addEventListener('click', (e) => e.stopPropagation());

  //! /******************** Problem 9 ********************/

  const fetchButton = document.getElementById('dictionary-fetch');
  const resultsArea = document.getElementById('results-area');

  // fetchButton.addEventListener('click', (e) => {
  //   const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/dictionary';
  //   const ul = document.createElement('ul');
  //   const liWord = document.createElement('li');
  //   const liDefinition = document.createElement('li');

  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       // res is an array with one object inside
  //       // res[0] is that object
  //       const responseObj = res[0];
  //       const word = responseObj.word;
  //       // console.log(typeof responseObj.meanings); // object => BUT, it's an array
  //       // console.log(Array.isArray(responseObj.meanings)); // true
  //       const arrOfDefs = responseObj.meanings[0].definitions;
  //       const singleDefObj = arrOfDefs[0];

  //       const definition = singleDefObj.definition;

  //       liWord.innerText = `Word: ${word}`;
  //       liDefinition.innerText = `Definition: ${definition}`;

  //       ul.appendChild(liWord);
  //       ul.appendChild(liDefinition);

  //       resultsArea.appendChild(ul);
  //     });
  // });

  fetchButton.addEventListener('click', async (e) => {
    const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/dictionary';
    const ul = document.createElement('ul');
    const liWord = document.createElement('li');
    const liDefinition = document.createElement('li');

    let res = await fetch(url);
    res = await res.json();
    console.log(res);
    // res is an array with one object inside
    // res[0] is that object
    const responseObj = res[0];
    const word = responseObj.word; // word = res[0].word
    // console.log(typeof responseObj.meanings); // object => BUT, it's an array
    // console.log(Array.isArray(responseObj.meanings)); // true
    const arrOfDefs = responseObj.meanings[0].definitions;
    const singleDefObj = arrOfDefs[0]; // singleDefObj = res[0].meanings[0].definitions[0]

    const definition = singleDefObj.definition;

    liWord.innerText = `Word: ${word}`;
    liDefinition.innerText = `Definition: ${definition}`;

    ul.appendChild(liWord);
    ul.appendChild(liDefinition);

    resultsArea.appendChild(ul);
  });
});
