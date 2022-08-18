
export const changeBox = function(){
    // 1. Select the single element by its id and put it in a variable
    const box1 = document.getElementById("box-1")
    // 1.1 log box1 and see what you'll get in the console
    console.log("element box 1:", box1);



    // 2. select the box1 and make the change to the border-color property, give it a "green" color. ("border-color" is the property --> "borderColor" is the property when doing dot notation)
    box1.style.borderColor = "green";

}



