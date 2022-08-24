const createNewKittenBtn = () => {
    // Create "New Kitten" button
    const newKittenBtn = document.createElement("button");
    newKittenBtn.id = "new-kitten";
    newKittenBtn.innerText = "New Kitten";
    
    // add an event listener to the newly created button, when clicked used fetch image
    newKittenBtn.addEventListener('click', fetchImage);
    return newKittenBtn;
};

// Fetch image from API and set img url element, updating it.
const fetchImage = async () => {
    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");
        // Converts to JSON
        const kittenData = await kittenResponse.json();
        // console.log(kittenData);
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenData[0].url;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};


export const createMainContent = () => {
    // Create h1
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";

    // Create img
    const img = document.createElement("img");
    img.style.margin = "20px";
    img.style.maxWidth = "750px";

    // selector contianer and add the components
    const container = document.querySelector(".container");
    container.appendChild(h1);
    container.appendChild(img);

    //new kitten will generate a new kitty without refreshing
    const newKittenBtn = createNewKittenBtn();
    container.append(newKittenBtn);

    fetchImage();
};

