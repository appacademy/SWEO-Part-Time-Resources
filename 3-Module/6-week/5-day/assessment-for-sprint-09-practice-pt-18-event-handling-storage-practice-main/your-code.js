
window.addEventListener("DOMContentLoaded", () => {


	// problem 1

	const circleBlueButton = document.querySelector('#make-circle-blue')
	const circleBlueDiv = document.querySelector('#blue-border-circle')

	circleBlueButton.addEventListener('click', ()=> {
		circleBlueDiv.classList.add('blue-fill')
	})

	// circleBlueButton.onclick = () => circleBlueDiv.classList.add('blue-fill')

	// problem 2

	const willNotCheck = document.querySelector('#will-not-check')

	willNotCheck.addEventListener('click', e => {
		e.preventDefault()
	})

	// problem 3

	const bananaButton = document.querySelector('#change-bananas-status')
	const bananaTextDiv = document.querySelector('#bananas-div')
	const bananaImageDiv = document.querySelector('#bananas-image-div')

	bananaButton.addEventListener('click', ()=>{

		// if (bananaImageDiv.children.length) return
		bananaTextDiv.innerHTML = "No Bananas Today!"

		const noBananaImage = document.createElement('img')
		noBananaImage.setAttribute('src', "./images/no-bananas.png")
		bananaImageDiv.appendChild(noBananaImage)
		bananaButton.setAttribute('disabled', 'true')
	})

	// problem 4

	const favCookieInput = document.querySelector('#fav-cookie')
	const storeCookieButton = document.querySelector('#store-cookie')

	const cookie = document.cookie
	if(cookie){
		favCookieInput.value = cookie.split('=')[1]
	}

	storeCookieButton.addEventListener('click', ()=>{
		const faveCookieValue = favCookieInput.value
		document.cookie = `favCookie=${faveCookieValue}; max-age=1800`
	})

	// problem 5

	const pieUL = document.querySelector('.pie-list')
	const pieInput = document.querySelector('#pie-type')
	const pieButton = document.querySelector('#save-pie')
	// const pieUL = document.getElementsByClassName('pie-list')[0]

	pieButton.addEventListener('click', ()=>{
		if (pieUL.childElementCount >= 5) {
			return;
		}
		if(!pieInput.value) return

		const pieLi = document.createElement('li')
		pieLi.innerText = pieInput.value
		pieUL.appendChild(pieLi)

		pieInput.value = ''
	})

	// problem 6

	const faveIceCreamInput = document.querySelector('#fav-ice-cream')
	const faveIceCreamButton = document.querySelector('#save-ice-cream')

	const favIceCream = localStorage.getItem('favIceCream')
	if(favIceCream){
		faveIceCreamInput.value = favIceCream
	}

	faveIceCreamButton.addEventListener('click', ()=>{
		localStorage.setItem('favIceCream', faveIceCreamInput.value)
		faveIceCreamInput.value = ''
	})


	// problem 7

	const appleButton = document.querySelector('#add-apple')
	const orangeButton = document.querySelector('#add-orange')
	const emptyBasketButton = document.querySelector('#reset-basket')
	const fruitBasketDiv = document.querySelector('#fruit-storage')
	const piecesOfFruitSpan = document.querySelector('#total-fruit')

	let totalFruitsInBasket = 0;
	piecesOfFruitSpan.innerText = totalFruitsInBasket

	appleButton.addEventListener('click', ()=> {
		if(totalFruitsInBasket === 25) return
		fruitBasketDiv.innerText += '🍎'
		// fruitBasketDiv.innerText = fruitBasketDiv.innerText + '🍎'
		totalFruitsInBasket += 1
		piecesOfFruitSpan.innerText = totalFruitsInBasket
	})

	orangeButton.addEventListener('click', ()=> {
		if(totalFruitsInBasket === 25) return
		fruitBasketDiv.innerText += '🍊'
		totalFruitsInBasket += 1
		piecesOfFruitSpan.innerText = totalFruitsInBasket
	})

	emptyBasketButton.addEventListener('click', ()=> {
		fruitBasketDiv.innerText = ''
		totalFruitsInBasket = 0
		piecesOfFruitSpan.innerText = totalFruitsInBasket
	})

	// problem 8

	const bubbleButton = document.querySelector('#bubble-maker')

	bubbleButton.addEventListener('click', e => {
		e.stopPropagation();
	})

	// problem 9

	const dictionaryFetchButton = document.querySelector('#dictionary-fetch')
	const resultsDiv = document.querySelector('#results-area')

	// dictionaryFetchButton.addEventListener('click', async ()=>{
	// 	const dictionaryResponse = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/dictionary')
	// 	const dictionaryJson = await dictionaryResponse.json()

	// 	const resultsUL = document.createElement('ul')
	// 	const wordLi = document.createElement('li')
	// 	const definitionLi = document.createElement('li')

	// 	wordLi.innerText = `Word: ${dictionaryJson[0].word}`
	// 	definitionLi.innerText = `Definition: ${dictionaryJson[0].meanings[0].definitions[0].definition}`

	// 	resultsUL.appendChild(wordLi)
	// 	resultsUL.appendChild(definitionLi)

	// 	resultsDiv.appendChild(resultsUL)
	// })

	dictionaryFetchButton.addEventListener('click', ()=>{
		fetch('https://api.dictionaryapi.dev/api/v2/entries/en/dictionary')
			.then(res => res.json())
			.then(dictionaryJson => {
				const resultsUL = document.createElement('ul')
				const wordLi = document.createElement('li')
				const definitionLi = document.createElement('li')

				wordLi.innerText = `Word: ${dictionaryJson[0].word}`
				definitionLi.innerText = `Definition: ${dictionaryJson[0].meanings[0].definitions[0].definition}`

				resultsUL.appendChild(wordLi)
				resultsUL.appendChild(definitionLi)

				resultsDiv.appendChild(resultsUL)
			})
	})


});
