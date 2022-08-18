
export const changeAll = function(){
    // 1. Select all elements with the class name of "square".. Use any variable you would like.
    const allBox = document.getElementsByClassName("square");
    const squareClass = document.querySelectorAll("div.square");

    
    // 1.1 This is a very important step and a good way to make sure you've selected something correctly: console.log what you selected in step 1. 
    // i.e. console.log("all box:", allBox); 
    //DOES IT SHOW UP ON OUR BROWSER'S CONSOLE?
    console.log("allBox", allBox);
    console.log("squareClass", squareClass);


    // 2. give a change to all the elements with the "square" class name a border of "5px solid black"; 
    
    //INCORRECT: allBox.style.border = "5px solid black"; 
    
    //hint: what is the datatype that we have selected in step 1? Is it an element, a collection, etc. If it's an array like collection and we want to apply each change to the items inside it, should we convert the collection to an array first? maybe even use a traditional for loop?

    // ---------traditional for loop-----------
    // for(let i=0; i<allBox.length; i++){
    //     const el = allBox[i];
    //     el.style.border = "5px solid black";
    // }
    // ---------convert to array and the use method-----------
    const arrayAllBox = [...allBox];
    arrayAllBox.forEach(el => {
        el.style.border = "5px solid black";
    })

    
    // we should now see all the box have a 5px thick border and it should all be black
}



