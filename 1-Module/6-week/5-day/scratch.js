//NODE VS BROWSER
//-Node.js is a runtime environment

//In the node.js runtime environment, the GLOBAL OBJECT is where global variables 
// are stored

//In browsers, however, the WINDOW OBJECT is where global variables are stored
//Most browsers will let you reference the "Global Object" it's just the window object

//The window object has a bunch properties and methods that help it render
//stuff on screen

//You cannot reference the window object in node, because node doesn't need access to those methods

//THINGS THAT BELONG TO THE WINDOW OBJECT

//Document Object - Contains the HTML of a webpage
//The document object belongs to the browser window, SO NODE DOESN'T HAVE ONE

//Location Object - Holds information pertaining to the web address that is currently in the browser

//DOM VS. BOM

//DOM - Document Object Model
//If the document object holds the HTML, then the DOM holds the hierarchy of the HTML
//MOST IMPORTANTLY - The dom has methods that can manipulate the HTML elements

//BOM - Browser Object Model
//The hierarchy of the browser objects

//HTML - Hyper Text Markup Language

/*

Opening and closing tags

<!DOCTYPE html>
<html>
    <head>
        Contains all important info about the page, including links to images, links, scripts, etc.
    </head>
    <body>
        Contains all the contents of the HTML page, such as headers, paragraphs, imgs, hyperlinks
        <h1>Largest header tag</h1>
        <p>Paragraph</p>
    </body>
</html>


*/

