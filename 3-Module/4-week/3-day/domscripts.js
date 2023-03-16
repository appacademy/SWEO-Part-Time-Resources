window.onload = () => {
  let submit = document.querySelector('button');
  // submit.setAttribute('style', 'background-color: blue');
  // submit.style = 'background-color: blue';
  submit.style.backgroundColor = '#aaf';

  // submit.innerHTML = "Submit"
  submit.innerText = "Submit"
  // submit.addEventListener('mousedown', event => {
  //   let toGo = document.querySelector('.toGo');
  //   toGo.style.visibility = 'visible';
  // })

  let newElement = document.createElement('h2');
  newElement.innerText = 'I WAS JUST BORN!!!'
  document.body.append(newElement);
  let toGo = document.querySelector('.toGo');
  toGo.remove();
}

window.addEventListener("DOMContentLoaded", event => {
  const title = document.querySelector('title');
  const time = () => {
    const date = new Date();
    let seconds = date.getSeconds();
    let mins = date.getMinutes();
    let hours = date.getHours();
    title.innerHTML = `${hours}:${mins}:${seconds}`
  }
  setInterval(time, 1000);

  let countButton = document.querySelector('.clickme');
  let count = document.querySelector('.counter');
  let counter = 0;
  countButton.addEventListener("click", event => {
    counter++;
    count.innerHTML = counter;
  })
});