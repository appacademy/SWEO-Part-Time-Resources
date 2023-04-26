import { resetScore } from './score.js';
import { resetComments } from './comments.js';

export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const newKittenBtn = createNewKittenBtn();

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.append(newKittenBtn);
    container.appendChild(img);

    //!!ADD
    // fetchImage();
    //!!END_ADD
    //!!START SILENT
    // load kitten image from browser storage
    loadImgUrl();
    //!!END
};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImgUrl = kittenData[0].url;
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenImgUrl;
        //!!START SILENT

        // Store the new URL in localStorage
        storeImgUrl(kittenImgUrl);
        //!!END

        // After the image is finished loading, reset the score and comments
        kittenImg.addEventListener('load', () => {
            resetScore();
            resetComments();
        });
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

const createNewKittenBtn = () => {
    // Create "New Kitten" button
    const newKittenBtn = document.createElement("button");
    newKittenBtn.id = "new-kitten";
    newKittenBtn.innerText = "New Kitten";
    newKittenBtn.addEventListener('click', fetchImage);
    return newKittenBtn;
};

//!!START SILENT
const loadImgUrl = () => {
    // Load kitten image from localStorage if there is one. If not, get one
    if (localStorage.getItem("url")) {
        const kittenImg = document.querySelector("img");
        kittenImg.src = localStorage.getItem("url");
    } else {
        fetchImage();
    }
};

const storeImgUrl = (url) => {
    // Store the URL in localStorage
    localStorage.setItem("url", url);
};