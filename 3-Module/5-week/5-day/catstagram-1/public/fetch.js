export const fetchCat = async function(){
    const response = await fetch("https://api.thecatapi.com/v1/images/search"); //should give a response which is a promise and if promise resolves successfully, it will be a promise with a response object
    const catData = await response.json()
    console.log(catData);
    return catData;
}