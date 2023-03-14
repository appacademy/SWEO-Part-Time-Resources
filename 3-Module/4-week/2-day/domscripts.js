// Browser Object Model
// console.log(window.navigator); //subscript
// console.log(window.screen) //your computer screen
// console.log(window.history) //history
// console.log(window.location);
// console.log(window.document);

//Document Object Model
// Contains a collection of nodes that can ba accessed and manipulated

window.onload = () => {
  // let button = document.getElementsByTagName('button');
  // let comments = document.getElementsByClassName('comments')[0];
  // console.log( document.querySelector('.comments') );
  // console.log( document.querySelectorAll('button'));
  
  // console.log(button);
  // console.log(comments.children[0].children[1].innerText);
  let body = document.querySelector('body');
  // console.log(body.innerHTML);
  // console.log(document.body.innerHTML)
  let div = document.createElement('div');
  div.setAttribute('style', 'width:100px;height:100px;background-color:red;');
  body.appendChild(div);
}