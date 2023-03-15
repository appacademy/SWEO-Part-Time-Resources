// window.onload = () => {
//   let button = document.querySelector('button');
  
//   // button.setAttribute('style', 'background-color:red');
//   button.style = 'background-color: blue';
//   button.innerHTML = "SUBMIT"
//   // -----------------------------------------
//   let parent = document.querySelector('#innerHTML');
//   let newElement = document.createElement('p');
//   newElement.innerText = 'Good Evening';
//   newElement.id = 'smol';
//   newElement.classList.add('bean');
//   parent.appendChild(newElement);

//   let toGo = document.querySelector('.toGo');
//   toGo.remove();
// }

window.addEventListener('DOMContentLoaded', event => {
  // let title = document.getElementById('title');
  // const time = () => {
  //   const date = new Date();
  //   let seconds = date.getSeconds();
  //   let minutes = date.getMinutes();
  //   let hours = date.getHours();

  //   title.innerHTML = `${hours}:${minutes}:${seconds}`;
  // }
  // setInterval(time, 1000);
  let button = document.querySelector('.clickme');
  let counter = document.querySelector('.counter');
  let count = 0;
  button.addEventListener('click', event => {
    count++;
    counter.innerHTML = count;
  })
});