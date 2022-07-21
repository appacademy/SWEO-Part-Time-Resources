/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById('add');
add.addEventListener('click', async () => {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();

    const url = data.message; // URL of new dog image

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */

    // const urlArr = url.split('/');
    // const i = urlArr.indexOf('breeds') + 1;
    // const breed = urlArr[i];
    // const breed = urlArr[4];
    const breed = url.split('/')[4];

    //! Aaron overkill
    // let splitURL = url.split('/');
    // console.log(splitURL);
    // let finalArray = [];
    // for (let i = 0; i < splitURL.length; i++) {
    //   let currentEl = splitURL[i];
    //   let nextEl = splitURL[i + 1];

    //   if (currentEl === 'breeds')
    //     finalArray.push(nextEl) && console.log(currentEl, nextEl);
    // }

    // let dogBreed = finalArray.toString();

    /*------------ Create new dog card with the url above ------------- */
    /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
    const newDog = document.createElement('li');
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figCaption = document.createElement('figcaption');

    img.src = url;
    figCaption.innerText = breed;

    figure.appendChild(img);
    figure.appendChild(figCaption);
    newDog.appendChild(figure);

    console.log(newDog);

    /* Add the new dog card as a child to the ul in the .gallery element */
    // const ul = document.querySelector('.gallery ul');
    const ul = document.getElementsByTagName('ul')[0];
    ul.appendChild(newDog);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById('remove-first');
removeFirst.addEventListener('click', () => {
  /*-------------------- Select the first dog card --------------------- */
  const dogToDie = document.querySelector('li');
  console.log(dogToDie);
  /*-------------------- Remove the first dog card --------------------- */
  try {
    dogToDie.remove();
  } catch (e) {
    console.log('No dogs left to kill');
  }
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById('remove-last');
removeLast.addEventListener('click', () => {
  /*-------------------- Select the last dog card ----------------------- */
  //! Zaviar
  // const dogsOnDeathRow = document.querySelector('ul').children;
  // const dogToDie = dogsOnDeathRow[dogsOnDeathRow.length - 1];

  //! Alex
  // const dogToDie = document.querySelectorAll('ul > li:last-child')[0];

  //! Aaron
  let ul = document.querySelector('ul');

  let dogToDie = ul.lastChild;

  /*-------------------- Remove the last dog card ----------------------- */
  try {
    dogToDie.remove();
  } catch (e) {
    window.alert('You murdered all the dogs you monster');
  }
});
