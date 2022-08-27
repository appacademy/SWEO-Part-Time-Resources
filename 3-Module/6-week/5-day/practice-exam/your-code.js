
window.addEventListener("DOMContentLoaded", () => {
  // problem #1
  // select the button
  const p1_button = document.getElementById("make-circle-blue");
  // console.log(p1_button);

  // add event listener to our newly selected button
  p1_button.addEventListener("click", e => {
    const circle = document.getElementById("blue-border-circle");
    console.log(circle);
    circle.classList.add("blue-fill");
  })

  // problem 2
  const checkBox = document.getElementById("will-not-check");
  checkBox.addEventListener("click", appleWhateverEvent => {
    appleWhateverEvent.preventDefault();

  })

  // problem 3
  const p3_button = document.getElementById("change-bananas-status");
  // we add the event listener to button we selected
  p3_button.addEventListener("click", e => {
    // select the content we want to update once we click this event
    const textBox = document.getElementById("bananas-div");
    textBox.innerHTML = "No Bananas Today!";

    // check if the stop sign has been added already
    if (document.getElementById("added") === null) {
      // create image element
      const imgEl = document.createElement("img");
      imgEl.src = "./images/no-bananas.png"
      imgEl.id = "added"

      // add that to our banana image
      const imageDiv = document.getElementById("bananas-image-div");
      imageDiv.appendChild(imgEl);
    }
  })


  // problem 4
  // 1) add cookie to our text input if it exists in storage
  const cookieString = document.cookie;
  if(cookieString){
   
    console.log("cookieString:", cookieString);
    const cookieSplit = cookieString.split("; ")
    console.log("cookieSplit:", cookieSplit);
    const cookieMatch = cookieSplit.find((cookie) => {
      return cookie.startsWith("cookie-fav")
    })
    console.log("cookieMatch:", cookieMatch);
    const cookieValue = cookieMatch.split("=")[1];
    console.log("cookieValue:", cookieValue);

    // check if cookieValue exists, and add it to the input field
    document.getElementById("fav-cookie").value = cookieValue;
  }

  // 2) store cookie
  const storeCookieButton = document.getElementById("store-cookie");
  storeCookieButton.addEventListener("click", e=>{
    // add our input field data into the storage 
    const inputEl = document.getElementById("fav-cookie");
    console.log(inputEl.value);
    document.cookie = `cookie-fav=${inputEl.value}; max-age=${30*60}`;
  })


  // problem 5
  // select button
  const p5_button = document.getElementById("save-pie");
  // console.log(p5_button)
  p5_button.addEventListener("click", e => {
    // on click, take the content inside of the input el, and add it to the list of type of pies.
    const inputEl = document.getElementById("pie-type");
    if (inputEl.value) {
      // lets create out li element with the input data and add it to our list
      const pieLi = document.createElement("li");
      pieLi.innerText = inputEl.value;

      // select ul and add the pieLi to it
      const ul = document.querySelector(".pie-list");
      ul.appendChild(pieLi);
    }
  })


  // problem 6
  // 1) if that thing we are looking for already is stored/exists in the storage, then get it. 
  const inputEl = document.getElementById("fav-ice-cream");
  const alreadyStored = localStorage.getItem("fav");
  if (alreadyStored) {
    inputEl.value = alreadyStored;
  }
  // 2) store / set the thing that we want to keep track of in the storage
  const save = document.getElementById("save-ice-cream");
  save.addEventListener("click", e => {
    const textToSave = inputEl.value;
    localStorage.setItem("fav", textToSave);
  })


  // problem 7
  // select the basket 
  const basket = document.getElementById("fruit-storage");

  // select the total pieces of fruit and update that as we go
  const totalFruits = document.getElementById("total-fruit");
  totalFruits.innerText = 0;

  // select apple button and add logic
  const appleButton = document.getElementById("add-apple");
  appleButton.addEventListener("click", e => {
    basket.innerText += "🍎"
    totalFruits.innerText = Number(totalFruits.innerText) + 1;
  })

  // select orange button and add logic
  const orangeButton = document.getElementById("add-orange");
  orangeButton.addEventListener("click", e => {
    basket.innerText += "🍊"
    totalFruits.innerText = Number(totalFruits.innerText) + 1;
  })
  // select empty basket and add logic
  const emptyBasketButton = document.getElementById("reset-basket");
  emptyBasketButton.addEventListener("click", e => {
    basket.innerText = "";
    totalFruits.innerText = 0;
  })

  // problem 8
  const p8_button = document.getElementById("bubble-maker");
  p8_button.addEventListener("click", eventApple => {
    eventApple.stopPropagation();
  })

  // problem 9
  // select button and add an event listener that will fetch and perform logic
  const p9_button = document.getElementById("dictionary-fetch");
  p9_button.addEventListener("click", async (e)=>{
    // so we know that fetch is a promise and it's async so we need to `await` it, but in order to use `await` we need to define the function as `async`
    // fetch will give us a promise, if resolved successfully, that promise's value will be a response obj. Await will then extract that response object value out.
    const responseObj = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dictionary");
    // console.log(responseObj); //we still need to parse this response object since it contains our json data
    const data = await responseObj.json();  

    console.log("json string data:", data);
    const definition = data[0].meanings[0].definitions[0].definition;
    console.log("definition:", definition);

    // -----------------DOM Manipulation-----------------
    // create the unordered list
    const ul = document.createElement("ul");
    // create li elements to add to the unordered list
    const liWord = document.createElement("li");
    liWord.innerText = data[0].word; //"definition"
    ul.appendChild(liWord);

    const liDef = document.createElement("li");
    liDef.innerText = `definition: ${definition}`;
    ul.appendChild(liDef);

    console.log("ul:", ul);
    // take the finalized ul element and append it to the results-area element div
    const resultDiv = document.getElementById("results-area");
    resultDiv.appendChild(ul);
  })




});