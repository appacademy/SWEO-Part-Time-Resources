window.addEventListener("DOMContentLoaded", (e)=>{
    console.log("event object", e);
    // select the element
    let field = document.getElementById("field");

    // check if the element's value is already stored inside of the local storage or session storage
    if(sessionStorage.getItem("autosave")){
        //populate the input field with the storage item if that "autosave" key exists
        field.value = sessionStorage.getItem("autosave");
    }

    //let's say we didn't have a autosave key and we initially want to add that whenever the user enters into the input field
    field.addEventListener("change", (event)=>{
        // take the field.value that the user enters, and listen for a change each time, then call the sessionStorage.setItem / sessionStorage.setItem to save it to the storage
        sessionStorage.setItem("autosave", field.value )
    })
})

// to remove sessionStorage using javascript: `sessionStorage.removeItem("key-that-you-want-to-remove")