
export const changeText = function () {
    // 1. Select the elements by class name and store it in a variable called "textCollection" (note elements is plural, class selector gives a collection)
    // hint look up on MDN: document.getElementsBy...
    const textCollection = document.getElementsByClassName("text")

    // 1.1 log the `textCollection` variable, what do you see in the console browser?
    console.log(textCollection);

    //1.2 iterate through our HTMLCollection (can either use a forloop, or convert HTMLCollection to an array w/ Array.from or spread... to use array methods)


    // 1.3 now select the second text by. Try indexing into it since we know that textCollection is an HTMLCollection. use the variable `const text2`


    // 2.1 change the color on the second text to red


    // 2.2 give the text a bold ("font-weight" is the property --> "fontWeight" is the property when doing dot notation)

}


