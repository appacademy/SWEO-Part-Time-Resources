window.addEventListener('DOMContentLoaded', ()=>{
	const food = document.querySelector('.food');
	const game = document.querySelector('.game');
	const obj = {'test': 'randomValue'}

	food.addEventListener('change', e=>{
		console.log(e.target.value)
		// window.localStorage
		// localStorage.setItem('food', e.target.value)
		// sessionStorage.setItem('food', JSON.stringify(obj))
		document.cookie = `food=${e.target.value}; max-age = 3000`
	})

	game.addEventListener('change', e=>{
		console.log(e.target.value)
		// localStorage.setItem('game', e.target.value)
		// sessionStorage.setItem('game', e.target.value)
		document.cookie = `game=${e.target.value}`
	})

	// if(sessionStorage.getItem('food')){
	// 	// food.value = localStorage.getItem('food')
	// 	// food.value = sessionStorage.getItem('food')
	// 	console.log(sessionStorage.getItem('food')) // string
	// 	console.log(JSON.parse(sessionStorage.getItem('food'))) // object
	// }

	// if(sessionStorage.getItem('game')){
	// 	// game.value = localStorage.getItem('game')
	// 	game.value = sessionStorage.getItem('game')
	// }

	// localStorage.removeItem('game')
})
