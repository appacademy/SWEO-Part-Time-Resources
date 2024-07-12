/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // console.log(url);
        const breed = url.split('/')[4];


        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */

        //! create li element
        const liEl = document.createElement('li');

        //! create img ele
        const dogImgEl = document.createElement('img');

        //! set img src attribute to our fetched image url.
        dogImgEl.setAttribute('src', url);


        //! create figure ele and figcaption
        const figEl = document.createElement('figure');

        const figCap = document.createElement('figcaption');
        //! set inner text of figure to the breed.
        figCap.innerText = breed;


        //! append figcaption and imgEl to figEl
        figEl.appendChild(dogImgEl);
        figEl.appendChild(figCap)

        //! append final figure to liEl
        liEl.appendChild(figEl);

        /* Add the new dog card as a child to the ul in the .gallery element */
        //! finally append the li element to the ul
        const ul = document.querySelector('.gallery > ul');
        ul.appendChild(liEl);

    } catch (e) {
        console.log("Couldn't fetch dog :(", e)
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    //! select first list element of dogList
    const dogLi = document.querySelector('.gallery > ul').children;

    console.log(dogLi);

    /*-------------------- Remove the first dog card --------------------- */
    //! key into the first el and remove from dog list
    if (dogLi.length > 0) {
        dogLi[0].remove();
    }
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const dogLi = document.querySelector('.gallery > ul').children;


    /*-------------------- Remove the last dog card ----------------------- */
    if (dogLi.length > 0) {
        dogLi[dogLi.length - 1].remove();
    }
});
