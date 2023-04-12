//Manipulate the HTML

//

// let howdyDiv = document.getElementById('howdy');

// let cloudySpans = document.querySelectorAll('span.cloudy');

//getElementById grabs the maching element
//querySelectorAll grabs ALL elements that match the given selector
//vs querySelector that only grabs the first matching one

function addElement() {
    //Create an empty tag
    const newElement = document.createElement('h1');

    //Set an attribute for this tag
    newElement.setAttribute('id', 'h1guy');

    //<h1 id="h1guy"></h1>

    //Create some content (in the form of a node);
    const content = document.createTextNode("Beep boop bop");

    //Put the content into the new tag
    newElement.appendChild(content);

    //Put the finished tag into the body of html
    document.body.prepend(newElement);
}

window.onload = addElement;