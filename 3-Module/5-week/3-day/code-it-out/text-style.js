
export const changeText = function () {
    // 1. Select the elements by class name and store it in a variable called "textCollection" (note elements is plural, class selector gives a collection)
    // hint look up on MDN: document.getElementsBy...
    const textCollection = document.getElementsByClassName("text")

    // 1.1 log the `textCollection` variable, what do you see in the console browser?
    console.log(textCollection);

    //iterate through our HTMLCollection
    for (let i = 0; i < textCollection.length; i++) {
        const childEl = textCollection[i];
        console.log(childEl);
    }


    // 1.2 now select the text 2 by index into it since we know that textCollection is an HTMLCollection. use the variable `const text2`
    const text2 = textCollection[1];
    console.log("second text2", text2);

    // 2.1 change the color on the text to red
    text2.style.color = "red";

    // 2.2 give the text a bold ("font-weight" is the property --> "fontWeight" is the property when doing dot notation)
    text2.style.fontWeight = "bold";
}


