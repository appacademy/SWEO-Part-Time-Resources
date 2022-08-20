
export const addClassPurple = function(){
    // 1. Select all elements with the class name of "square".. Use any variable you would like.
    const allBoxes = document.getElementsByClassName("square");
    
    // 1.1 This is a very important step and a good way to make sure you've selected something correctly: 
    console.log("allboxes:", allBoxes)


    // 2. attach to EACH element's class a class name of "purple", look up on mdn `element.classList` to assist you with this. Hint, className selector returns more than one element in a collection.

    // incorrect: allBoxes.classList.add("purple");
    // for(let i=0; i<allBoxes.length; i++){
    //     const box = allBoxes[i]; //this is an html element
    //     box.classList.add("purple");
    // }

    const allBoxesArray = Array.from(allBoxes);
    console.log(allBoxesArray);
    allBoxesArray.forEach(el => el.classList.add("purple"))


    
    // after adding purple, the CSS file will have a .purple class that will change the background color of all elements with a class of `purple` to the color purple~
}



