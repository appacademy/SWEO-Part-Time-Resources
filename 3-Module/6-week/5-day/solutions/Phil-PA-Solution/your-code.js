window.addEventListener("DOMContentLoaded", () => {
  // PROBLEM 1
  const turnBlueBtn = document.getElementById("make-circle-blue");
  const circle = document.getElementById("blue-border-circle");

  turnBlueBtn.addEventListener("click", () => {
    circle.classList.add("blue-fill");
  });

  // PROBLEM 2
  const checkBox = document.getElementById("will-not-check");

  checkBox.addEventListener("click", (e) => {
    e.preventDefault();
  });

  // PROBLEM 3
  noBananasBtn = document.getElementById("change-bananas-status");
  textDiv = document.getElementById("bananas-div");
  bananaImgDiv = document.getElementById("bananas-image-div");

  noBananasBtn.addEventListener("click", () => {
    noBananasImg = document.createElement("img");
    noBananasImg.src = "./images/no-bananas.png";

    if (!bananaImgDiv.children[0]) {
      bananaImgDiv.appendChild(noBananasImg);
    };

    textDiv.innerText = "No Bananas Today!";
  });

  // PROBLEM 4
  const cookieInputBox = document.getElementById("fav-cookie");
  const storeCookieBtn = document.getElementById("store-cookie");

  if (document.cookie) {
    const brokenCookie = document.cookie.split("=");

    cookieInputBox.value = brokenCookie[1];
  };

  storeCookieBtn.addEventListener("click", () => {
    let inputBoxVal = cookieInputBox.value;

    document.cookie = `favCookie=${inputBoxVal};max-age=1800`;
  });

  // PROBLEM 5
  const pieList = document.querySelector(".pie-list");
  const pieInputBox = document.getElementById("pie-type");
  const submitPieBtn = document.getElementById("save-pie");
  const pieCollection = pieList.children;

  submitPieBtn.addEventListener("click", () => {
    const newPieItem = document.createElement("li");
    newPieItem.className = "pie-list";

    if (pieCollection.length < 5) {
      if (pieInputBox.value) {
        newPieItem.innerText = pieInputBox.value;
        pieList.appendChild(newPieItem);

        pieInputBox.value = "";
      };
    };
  });

  // PROBLEM 6
  const iceCreamInputBox = document.getElementById("fav-ice-cream");
  const saveIceCreamBtn = document.getElementById("save-ice-cream");
  const savedIceCream = localStorage.getItem("fav-ice-cream");

  if (savedIceCream) {
    iceCreamInputBox.value = savedIceCream;
  };

  saveIceCreamBtn.addEventListener("click", () => {
    localStorage.setItem("fav-ice-cream", iceCreamInputBox.value);
  });

  // PROBLEM 7
  const fruitBtns = document.getElementById("fruit-buttons-div");
  const basketDiv = document.getElementById("fruit-storage");
  const totalFruit = document.getElementById("total-fruit");
  const fruitCollection = basketDiv.childNodes;

  let counter = 0;
  totalFruit.innerText = counter;

  // Added one event listener to the entire btns container, then had conditionals to check the target
  // Vs having one event listener for each button
  fruitBtns.addEventListener("click", (e) => {
    if (fruitCollection.length < 25) {
      if (e.target.id === "add-apple") {
        basketDiv.append("🍎");
        totalFruit.innerText = `${++counter}`;
      } else if (e.target.id === "add-orange") {
        basketDiv.append("🍊");
        totalFruit.innerText = `${++counter}`;
      };
    };

    // Can you reason about why I separated this conditional, based on what I wrote above?
    if (e.target.id === "reset-basket") {
      basketDiv.innerText = "";
      counter = 0;
      totalFruit.innerText = counter;
    };
  });

  // PROBLEM 8
  const bubbleBtn = document.getElementById("bubble-maker");

  bubbleBtn.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // PROBLEM 9
  const fetchBtn = document.getElementById("dictionary-fetch");
  const resultsDiv = document.getElementById("results-area");

  fetchBtn.addEventListener("click", async () => {
    const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dictionary");
    const resObj = await res.json();
    const { word, meanings: [{ definitions: [{ definition }] }] } = resObj[0];

    const wordInfo = document.createElement("ul");
    const wordItem = document.createElement("li");
    const definitionItem = document.createElement("li");

    wordItem.innerText = word[0].toUpperCase() + word.slice(1);
    wordItem.style.listStyle = "none";
    wordItem.style.fontWeight = "bold";
    wordItem.style.marginLeft = "-40px";

    definitionItem.innerText = definition;

    wordInfo.appendChild(wordItem);
    wordInfo.appendChild(definitionItem);
    resultsDiv.appendChild(wordInfo);
  });
});