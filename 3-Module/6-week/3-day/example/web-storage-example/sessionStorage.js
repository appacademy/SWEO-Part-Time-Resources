window.addEventListener("DOMContentLoaded", (e)=>{
    // 1) determine if our local storage contains that data that we need to populate on the input field. Add that data into the input field if it exists
    
    // select the input field
    const inputEl = document.getElementById("field");

    //if this "autosave" key exists then get it and its value, then populate the field with it
    if(window.sessionStorage.getItem("autosave")){
        inputEl.value = window.sessionStorage.getItem("autosave");
    }

    //2) otherwise, continue and then when we get to the part where we want to save the data into our local storage, then do it there

    //event listener that will listen for a change of input, each time we have a change, update the local storage to have that value.
    inputEl.addEventListener("change", event =>{
        window.sessionStorage.setItem("autosave", inputEl.value)
    })
})

// to remove local storage key value, then use the .removeItem method: window.sessionStorage.removeItem("autosave");