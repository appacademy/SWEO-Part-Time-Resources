//We'll use the DOM to manipulate the "howdy" element

// let howdy = document.getElementById('howdy');

// let cloudySpans = document.querySelectorAll('span.cloudy');

//getElementById allows us to reference a single tag with the given ID

//querySelectorAll grabs all elements with the matching selector

const addElement = () => {
    //Create a new h1 tag
    const newElement = document.createElement('h1');

    //Set any attributes for the tag
    newElement.setAttribute('id', 'brother');

    //Create the content of the tag
    const content = document.createTextNode("Beep boop bop");

    //Put the content into the h1
    newElement.appendChild(content);

    //added the h1 into the body tag
    document.body.appendChild(newElement)
}

//When the window loads, call the addElement function

window.onload = addElement;