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

<<<<<<< HEAD
=======

>>>>>>> 2022-Jan-E
        /*------------ Create new dog card with the url above ------------- */
        /* (use the HTML structure for the current dog image in the index.html
            file to create a new image with the url) */
        // Your code here
        const newDog = document.createElement('li')
<<<<<<< HEAD
        const newFig = document.createElement('figure')
        const newImg = document.createElement('img')
        newImg.src = url
        const newCap = document.createElement('figcaption')
        newCap.innerText = breed

        newFig.appendChild(newImg)
        newFig.appendChild(newCap)

        newDog.appendChild(newFig)

        const ul = document.querySelector('ul')
        ul.appendChild(newDog)
            // ul.innerHTML += `
            //     <li>
            //         <figure>
            //             <img src="${url}"/>
            //             <figcaption>${breed}</figcaption>
            //         </figure>
            //     </li>
            // `
=======
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


>>>>>>> 2022-Jan-E

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
<<<<<<< HEAD
    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    if(firstDog){
        firstDog.remove()
    } else {
        console.log('theres nothing left dummy')
    }

=======

    if(firstDog){
        firstDog.remove()
    } else{
        console.log("no dogs left")
    }

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
>>>>>>> 2022-Jan-E
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
<<<<<<< HEAD
    const lastDog = document.querySelector('ul').lastChild
    // if(dogs.length){
    //     lastDog = dogs[dogs.length - 1]
    // }

    if(lastDog){
        lastDog.remove()
    } else {
        console.log('theres nothing left dummy')
    }
=======
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

>>>>>>> 2022-Jan-E
    /*-------------------- Remove the last dog card ----------------------- */
    // Your code here
});
