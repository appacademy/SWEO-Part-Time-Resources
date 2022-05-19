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
        const newFigure = document.createElement('figure')
        const newImage = document.createElement('img')
        newImage.src = url

        const newCaption = document.createElement('figcaption')
        newCaption.innerText = breed
        newCaption.style.color = 'red'

        newFigure.appendChild(newImage)
        newFigure.appendChild(newCaption)

        newDog.appendChild(newFigure)


        // console.log(ul)
        const ul = document.querySelector('.gallery')
        ul.firstElementChild.appendChild(newDog)

        // ul.innerHTML += `
        // <li>
        //     <figure>
        //         <img src="${url}" />
        //         <figcaption>${breed}</figcaption>
        //     </figure>
        // </li>
        // `



        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here

    } catch (e) {
        console.log("Couldn't fetch dog :(")
    }
});

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById("remove-first");
removeFirst.addEventListener("click", () => {
    /*-------------------- Select the first dog card --------------------- */
    // Your code here
    const firstDog = document.querySelector('li')

    if(firstDog){
        firstDog.remove()
    } else{
        console.log("no dogs left")
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

    let lastDog;
    if(allDogs.length){
        lastDog = allDogs[allDogs.length - 1]
    }

    if(lastDog){
        lastDog.remove()
    } else{
        console.log("no dogs left")
    }

    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
