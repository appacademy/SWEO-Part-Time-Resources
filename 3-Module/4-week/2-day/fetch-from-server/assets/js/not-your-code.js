import {
    deleteDog, 
    getAllDogs, 
    getDogNumberTwo, 
    postNewDog,  
    postNewDogV2
} from "./your-code.js";

const cbHandler = async (res) => {
    if(res.redirected) {
       return window.location.href = res.url
    } 

    const [_, endpoint] = res.url.split("http://localhost:5001/");
    if(/dogs\/\d+\/delete/.test(endpoint)) {
        const html  = await res.text()
        const startIdx = html.indexOf("<body>");
        const endIdx = html.indexOf("</body>");
        const body = html.slice(startIdx, endIdx + 7)
        document.body.innerHTML = body 
    } else {
        window.location.href = `/${endpoint}`;
    }
    
    return res
};

const errorHandler = (e) => {
    console.log("ERROR: ", e)
}

const getAllDogsButton = document.querySelector("#get_dogs")
const getDogTwoButton = document.querySelector("#get_dogs2");
const postDogsButton = document.querySelector("#post_dogs");
const postDogsV2Button = document.querySelector(".userinput_dog_submit");
const deleteSelect = document.querySelector(".dog_id_delete");
const deleteButton = document.querySelector("#delete_dog");

fetch("/api/dogs").then(res => res.json()).then((dogs)=> {
    dogs.forEach(dog => {
        const option = document.createElement("option");
        option.value = dog.dogId;
        option.innerText = dog.dogId;
        deleteSelect.appendChild(option)
    });
})

const dogName = document.querySelector(".dog_name");
const dogAge = document.querySelector(".dog_age")

getAllDogsButton.addEventListener("click", (e) => {
    getAllDogs()
        .then(cbHandler)
        .catch(errorHandler);
});

getDogTwoButton.addEventListener("click", () => {
    getDogNumberTwo()
        .then(cbHandler)
        .catch(errorHandler)
})

postDogsButton.addEventListener("click", () => {
    postNewDog()
        .then(cbHandler)
        .catch(errorHandler);
})

postDogsV2Button.addEventListener("click", () => {
    postNewDogV2(dogName.value, dogAge.value)
        .then(cbHandler)
        .catch(errorHandler)
})

deleteButton.addEventListener("click", () => {
    deleteDog(deleteSelect.value)
        .then(cbHandler)
        .catch(errorHandler)
})
