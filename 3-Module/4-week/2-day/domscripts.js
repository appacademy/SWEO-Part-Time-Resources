console.log('wow');
// BOM - Browser Object Model
// primary browser object is the window object
// console.log(window);
// console.log(window.navigator);
// console.log(window.screen);
// console.log(window.history);
// console.log(window.location);
// console.log(window.document);
// DOM - Document Object Model
// contains a collection of nodes that can be accessed and manipulated
window.onload = () => {
  let nodeList = document.body.childNodes;
  let htmlCollect = document.body.children;

  console.log(nodeList, htmlCollect);
  
  let redSquare = document.createElement("div");
  redSquare.setAttribute("style", "width:100px;height:100px;background-color:red;");
  document.body.append(redSquare);
}