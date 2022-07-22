/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById('add');
add.addEventListener('click', async () => {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await res.json();

    const url = data.message; // URL of new dog image

    /*--------------- Get breed (Hint: Parse from URL) ---------------- */
    // const breed = url.split('/')[4];
    const urlArray = url.split('/');
    const i = urlArray.indexOf('breeds') + 1;
    const breed = urlArray[i];
    console.log(breed);

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

    /* Add the new dog card as a child to the ul in the .gallery element */
    const ul = document.querySelector('.gallery ul');
    ul.appendChild(newDog);
    console.log(ul);
  } catch (e) {
    console.log("Couldn't fetch dog :(");
  }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById('remove-first');
removeFirst.addEventListener('click', () => {
  /*-------------------- Select the first dog card --------------------- */
  const dogToDie = document.querySelector('li');

  /*-------------------- Remove the first dog card --------------------- */
  dogToDie.remove();
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById('remove-last');
removeLast.addEventListener('click', () => {
  /*-------------------- Select the last dog card ----------------------- */
  // const dogToDie = document.querySelector('li:last-child');
  const dogToDie = document.querySelector('ul').lastChild;

  // const dogToDie = document.querySelector('li:nth-last-child()');

  // const dogsOnDeathRow = document.querySelector('ul').children;
  // const dogToDie = dogsOnDeathRow[dogsOnDeathRow.length - 1];

  /*-------------------- Remove the last dog card ----------------------- */
  dogToDie.remove();
});
