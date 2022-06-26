
window.addEventListener("DOMContentLoaded", () => {
	// problem 1
	const circleButton = document.querySelector('#make-circle-blue');
	const circleDiv = document.querySelector('#blue-border-circle');

	circleButton.addEventListener('click', e => {
		circleDiv.classList.add('blue-fill')
		// circleDiv.setAttribute('class', 'blue-fill');
		// circleDiv.classList.toggle('blue-fill');
		// circleDiv.innerHTML = `<div id='blue-border-circle' class='blue-fill'></div>`
	})

	// problem 2
	const cantClickInput = document.querySelector('#will-not-check');

	cantClickInput.addEventListener('click', e =>{
		e.preventDefault();
	})

	// document.querySelector('#will-not-check').addEventListener('click', e=>e.preventDefault());

	// problem 3
	const bananaButton = document.querySelector('#change-bananas-status');
	const bananaDiv = document.querySelector('#bananas-div');
	const bananaImage = document.querySelector('#bananas-image-div');

	bananaButton.addEventListener('click', e=>{
		// if(bananaImage.children.length < 1){
		// 	bananaDiv.innerHTML = 'No Bananas Today!';
		// 	const newBananaImage = document.createElement('img');
		// 	newBananaImage.setAttribute('src', './images/no-bananas.png');
		// 	bananaImage.appendChild(newBananaImage)
		// }

		if(!bananaImage.hasChildNodes()){
			bananaDiv.innerHTML = 'No Bananas Today!';
			const newBananaImage = document.createElement('img');
			newBananaImage.setAttribute('src', './images/no-bananas.png');
			bananaImage.appendChild(newBananaImage)
		}
	})

	// problem 4

	const cookieInput = document.querySelector('#fav-cookie');
	const cookieButton = document.querySelector('#store-cookie');

	const now = new Date();
	now.setMinutes(now.getMinutes() + 30);

	if(document.cookie.split('=')[1]){
		cookieInput.value = document.cookie.split('=')[1]
	}

	cookieButton.addEventListener('click', e =>{
		const cookieValue = cookieInput.value;

		// document.cookie = `favCookie=${cookieValue}; max-age=${30 * 60}`
		document.cookie = `favCookie=${cookieValue}; expires=${now.toUTCString()}`
	})

	// problem 5

	const pieUL = document.querySelector('.pie-list');
	const pieInput = document.querySelector('#pie-type');
	const pieButton = document.querySelector('#save-pie');

	pieButton.addEventListener('click', e=>{
		if(pieInput.value && pieUL.children.length < 5){
			const pieL = document.createElement('li');
			pieL.innerText = pieInput.value;
			pieL.classList.add('pie-list');
			pieUL.appendChild(pieL);

			// reset
			pieInput.value = '';
		}
	})

	// problem 6

	const iceCreamInput = document.querySelector('#fav-ice-cream');
	const iceCreamButton = document.querySelector('#save-ice-cream');

	if(localStorage.getItem('iceCream')){
		iceCreamInput.value = localStorage.getItem('iceCream')
	}

	iceCreamButton.addEventListener('click', e=>{
		localStorage.setItem('iceCream', iceCreamInput.value)
	});

	// problem 7

	// const appleButton = document.querySelector('#add-apple');
	// const orangeButton = document.querySelector('#add-orange');
	// const emptyBasketButton = document.querySelector('#reset-basket');

	const fruitBasketDiv = document.querySelector('#fruit-storage');
	const fruitBasketSpan = document.querySelector('#total-fruit');

	// SRP
	const fruitBasketButtonDiv = document.querySelector('#fruit-buttons-div');

	// let totalFruits = 0;

	// fruitBasketSpan.innerText = totalFruits;

	// appleButton.addEventListener('click', e=>{
	// 	if(totalFruits < 25){
	// 		fruitBasketDiv.innerText += '🍎';
	// 		totalFruits +=1;
	// 		fruitBasketSpan.innerText = totalFruits;
	// 	}
	// })

	// orangeButton.addEventListener('click', e=>{
	// 	if(totalFruits < 25){
	// 		fruitBasketDiv.innerText += '🍊';
	// 		totalFruits +=1;
	// 		fruitBasketSpan.innerText = totalFruits;
	// 	}
	// })

	// emptyBasketButton.addEventListener('click', e=>{
	// 	fruitBasketDiv.innerText = '';
	// 	totalFruits = 0;
	// 	fruitBasketSpan.innerText = totalFruits;
	// })


	// fruitBasketButtonDiv.addEventListener('click', e=>{
	// 	if(e.target.tagName === 'BUTTON'){
	// 		if(totalFruits < 25){
	// 			if(e.target.id === 'add-apple'){
	// 				fruitBasketDiv.innerText += '🍎';
	// 				totalFruits +=1;
	// 				fruitBasketSpan.innerText = totalFruits;
	// 			} else if(e.target.id === 'add-orange'){
	// 				fruitBasketDiv.innerText += '🍊';
	// 				totalFruits +=1;
	// 				fruitBasketSpan.innerText = totalFruits;
	// 			}
	// 		}
	// 		if(e.target.id === 'reset-basket'){
	// 			fruitBasketDiv.innerText = '';
	// 			totalFruits = 0;
	// 			fruitBasketSpan.innerText = totalFruits;
	// 		}
	// 	}
	// })

	const fruitStorage = document.querySelector("#fruit-storage");
	const totalFruit = document.querySelector("#total-fruit");
	const fruitBasketButtons = document.querySelector("#fruit-buttons-div");
	totalFruit.innerText = 0;

	const basketHandler = (event) => {
		if (fruitStorage.innerText.length / 2 < 25) {
		if (event.target.id === "add-apple") fruitStorage.innerText += "🍎";
		if (event.target.id === "add-orange") fruitStorage.innerText += "🍊";
		}
		if (event.target.id === "reset-basket") fruitStorage.innerText = "";
		totalFruit.innerText = fruitStorage.innerText.length / 2;
	};

	fruitBasketButtons.addEventListener("click", basketHandler);

	// problem 8

	const bubbleButton = document.querySelector('#bubble-maker');

	bubbleButton.addEventListener('click', e=>{
		e.stopPropagation();
	})

	// document.querySelector("#bubble-maker").addEventListener("click", event => event.stopPropagation());

	// const dictionaryButton = document.querySelector('#dictionary-fetch');
	// const dictionaryDiv = document.querySelector('#results-area');


	let prob9b = document.querySelector("#dictionary-fetch");
	let prob9Div = document.querySelector("#results-area");

	prob9b.addEventListener("click", () => {
		fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dictionary", {
			method: "GET",
		})
		.then((response) => response.json())
		.then((w) => {
			let ul = document.createElement("ul");
			let li1 = document.createElement("li");
			let li2 = document.createElement("li");
			li1.innerText = w[0].word;
			li2.innerText = w[0].meanings[0].definitions[0].definition;
			ul.appendChild(li1);
			ul.appendChild(li2);
			prob9Div.appendChild(ul);
		});
 	});


	const nine = document.querySelector("#dictionary-fetch");
	nine.addEventListener("click", async e => {
		const resObj = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/dictionary");
		const data = await resObj.json();

		const ul = document.createElement("ul");
		ul.innerHTML = `<li>Word: ${data[0].word}</li><li>Definition: ${data[0].meanings[0].definitions[0].definition}`;

		const resultsDiv = document.querySelector("#results-area");
		resultsDiv.appendChild(ul);
	});

});
