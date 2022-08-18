/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        console.log("dog url", url);
        const breed = url.split('/')[4];

        /*------------ Create new dog card with the url above ------------- */
        const newDog = document.createElement("li");

        const newFigure = document.createElement("figure");

        const newImg = document.createElement("img");
        newImg.src = url;

        const newCaption = document.createElement("figcaption");
        newCaption.innerText = breed;

        newFigure.appendChild(newImg);
        newFigure.appendChild(newCaption);
        newDog.appendChild(newFigure);

        /* Add the new dog card as a child to the ul in the .gallery element */
        const ul = document.getElementsByTagName("ul")[0];
        ul.appendChild(newDog);

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});