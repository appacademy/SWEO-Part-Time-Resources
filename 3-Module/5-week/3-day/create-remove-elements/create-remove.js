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
        const newCap = document.createElement('figcaption')
        const newImg = document.createElement('img')

        newImg.src = url
        newCap.innerText = breed

        /* Add the new dog card as a child to the ul in the .gallery element */
        // Your code here
        newFig.appendChild(newCap)
        newFig.appendChild(newImg)

        newDog.appendChild(newFig)


        const ul = document.getElementsByTagName('ul')[0]
        ul.appendChild(newDog)

        // other way of doing it, shouldn't be used, unsafe
        // newDog.innerHTML = `
        //     <figure>
        //         <img src="${url}" />
        //         <figcaption>${breed}</figcaption>
        //     </figure>
        // `;


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

    /*-------------------- Remove the first dog card --------------------- */
    // Your code here
    if(first){
        first.remove()
    } else {
        console.log('nothing left to remove')
    }
});

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById("remove-last");
removeLast.addEventListener("click", () => {
    /*-------------------- Select the last dog card ----------------------- */
    // Your code here
    // const all = document.querySelectorAll('li')
    // let last = all[all.length - 1]
    const last = document.querySelector(".gallery ul li:last-child");

    /*-------------------- Remove the last dog card --------------------- */
    // Your code here
    if(last){
        last.remove()
    } else {
        console.log('nothing left to remove')
    }
});