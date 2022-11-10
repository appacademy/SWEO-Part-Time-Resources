/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://dog.ceo/api/breeds/image/random")
        const data = await res.json();

        const url = data.message; // URL of new dog image

        /*--------------- Get breed (Hint: Parse from URL) ---------------- */
        // Your code here
        const breed = url.split('/')[4]

        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const newDog = document.createElement('li')
        const newFig = document.createElement('figure')
        const newImg = document.createElement('img')
        const figCap = document.createElement('figcaption')

        newImg.src = url
        figCap.innerText = breed

        newFig.appendChild(newImg)
        newFig.appendChild(figCap)
        newDog.appendChild(newFig)
        
        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        const ul = document.querySelector('.gallery > ul')
        ul.appendChild(newDog)

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const first = document.querySelector('li')

    if(first){
        first.remove()
    } else {
        console.log('nothing left to remove')
    }

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    const allDogs = document.querySelectorAll('li')
    const last = allDogs[allDogs.length - 1]

    if(last){
        last.remove()
    } else {
        console.log('nothing left to remove')
    }

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});