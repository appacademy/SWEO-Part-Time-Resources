/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        const breed = url.split("/")[4];

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        const newDog = document.createElement("li");
        const newDogFigure = document.createElement("figure");
        const newDogImg = document.createElement("img");
        const newDogCaption = document.createElement("figcaption");

        newDogImg.src = url;
        newDogCaption.innerText = breed;

        newDogFigure.appendChild(newDogImg);
        newDogFigure.appendChild(newDogCaption);

        newDog.appendChild(newDogFigure);

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
    const firstDog = document.querySelector("li");

    /*-------------------- Remove the first dog card --------------------- */
    if (firstDog) {
        firstDog.remove();
    } else {
        console.log("No dogs left");
    };
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    const allDogs = document.querySelectorAll("li");
    const lastDog = allDogs[allDogs.length - 1];

    if (lastDog) {
        lastDog.remove();
    } else {
        console.log("No dogs left")
    }

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});