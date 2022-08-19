
export const changeAll = function(){
    // 1. Select all elements with the class name of "square".. Use any variable you would like.
    const allBox = document.getElementsByClassName("square");

    // this also will work too.
    // const queryAllBox = document.querySelectorAll("div.square");
    // console.log("queryallBox:", queryAllBox);
 
    // 1.1 This is a very important step and a good way to make sure you've selected something correctly: console.log what you selected in step 1. 
    // i.e. console.log("all box:", allBox); 
    //DOES IT SHOW UP ON OUR BROWSER'S CONSOLE?
    console.log("allBox:", allBox);



    // 2. give a change to all the elements with the "square" class name a border of "5px solid black"; 
    
    //hint: what is the datatype that we have selected in step 1? Is it an element, a collection, etc. If it's an array like collection and we want to apply each change to the items inside it, should we convert the collection to an array first? maybe even use a traditional for loop?
    //INVALID, NEED TO GO THROUGH EAT ONE allBox.style.border = "5px solid black";
    // --------method 1: traditional loop------
    // for(let i=0; i<allBox.length; i++){
    //     let el = allBox[i];
    //     el.style.border = "5px solid black";
    // }
    // --------method 2: coverting collection to array and then using array methods------
    const allBoxArray = [...allBox] //Array.from(allBox) will work as well;
    // console.log(allBoxArray);
    allBoxArray.forEach(el => {
        el.style.border = "5px solid black";
    })

    

    
    // we should now see all the box have a 5px thick border and it should all be black
}



