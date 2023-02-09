window.addEventListener("DOMContentLoaded", () => {
  //problem 1
  document.getElementById("make-circle-blue").addEventListener("click", (e) => {
    document.getElementById("blue-border-circle").classList.add("blue-fill");
  });

  //problem 2
  document.getElementById("will-not-check").addEventListener("click", (e) => {
    e.preventDefault();
  });

  // problem 3
  document
    .getElementById("change-bananas-status")
    .addEventListener("click", (e) => {
      document.getElementById("bananas-div").innerHTML = "No Bananas Today!";

      const bananasDiv = document.getElementById("bananas-image-div");

      const img = document.createElement("img");
      img.src = "./images/no-bananas.png";

      if (bananasDiv.children.length) return;

      bananasDiv.appendChild(img);
    });
  // problem 4
  const input = document.getElementById("fav-cookie");
  document.getElementById("store-cookie").addEventListener("click", (e) => {
    document.cookie = `favCookie=${input.value}; max-age=1800 `;

  });
  const cookieVal = document.cookie.split("=")[1];



  if (document.cookie) {
    input.value = cookieVal;
  }

  // problem 5
  document.getElementById("save-pie").addEventListener("click", (e) => {
    const type = document.getElementById("pie-type");

    const list = document.getElementsByClassName("pie-list");

    const addPie = document.createElement("li");

    if (list[0].children.length >= 5) return;

    if (type.value.length > 0) {
      addPie.innerText = type.value;
      list[0].appendChild(addPie);

      type.value = "";
    }
  });

  // problem 6
  const input2 = document.getElementById("fav-ice-cream");
  document.getElementById("save-ice-cream").addEventListener("click", (e) => {
    localStorage.setItem("favorite-flavor", input2.value);
  });

  const favFlovor = localStorage.getItem("favorite-flavor");

  if (favFlovor) {
    input2.value = favFlovor;
  }

  //problem 7
  let fruitCount = 0;
  const counter = document.getElementById("total-fruit");
  counter.innerText = fruitCount;

  const basket = document.getElementById("fruit-storage");

  document.getElementById("add-apple").addEventListener("click", (e) => {
    if (fruitCount >= 25) return;
    counter.innerText = ++fruitCount;
    basket.innerText += "🍎";
  });

  document.getElementById("add-orange").addEventListener("click", (e) => {
    if (fruitCount >= 25) return;
    counter.innerText = ++fruitCount;
    basket.innerText += "🍊";
  });

  document.getElementById("reset-basket").addEventListener("click", (e) => {
    basket.innerText = "";
    counter.innerText = fruitCount = 0;
  });

  // problem 8
  document.getElementById("bubble-maker").addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // problem 9
  document
    .getElementById("dictionary-fetch")
    .addEventListener("click", async (e) => {
      let res = await fetch(
        "https://api.dictionaryapi.dev/api/v2/entries/en/dictionary"
      );
      res = await res.json()
      console.log(res)
      const resultArea = document.getElementById('results-area')
      const list = document.createElement('ul')
      const li1 = document.createElement('li')
      const li2 = document.createElement('li')
      li1.innerText = `Word: ${res[0].word}`
      li2.innerText = `Definition: ${res[0].meanings[0].definitions[0].definition}`
      
      list.appendChild(li1)
      list.appendChild(li2)
      resultArea.appendChild(list)

    });
});
