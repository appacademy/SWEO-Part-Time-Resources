
export const initializePage = () => {
    console.log("test");
    // Create container
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.marginTop = "20px";
    document.body.appendChild(container);
};

export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);

    fetchImage();
};

const fetchImage = async () => {
    // Fetch image from API and set img url
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small"); //fetch returns a promise w/ a value of the return object, if resolved successfully
        //https://api.thecatapi.com/v1/images/search
        // Converts to JSON
        const kittenData = await kittenResponse.json(); //covert the json to its data.
        console.log(kittenData);
        const kittenImgUrl = kittenData[0].url;
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenImgUrl;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};