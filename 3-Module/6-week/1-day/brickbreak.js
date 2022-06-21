import Game from './game.js'

window.addEventListener('DOMContentLoaded', ()=>{
	const dimensions = prompt('What size would you like your canvas? Width x Height')
	const canvas = document.querySelector('#canvas');

	const width = dimensions.split(' ')[0];
	const height = dimensions.split(' ')[1];

	const game = new Game(canvas, width, height);

	document.body.addEventListener('keydown', (e)=>{
		if(e.key === 'ArrowRight'){
			game.paddleMoveRight()
		}
	})

	document.body.addEventListener('keydown', (e)=>{
		if(e.key === 'ArrowLeft'){
			game.paddleMoveLeft()
		}
	})

	canvas.setAttribute('width', width);
	canvas.setAttribute('height', height);


	game.createPaddle();
	game.createBricks();

	function gameLoop(timestamp){
		game.update();
		window.requestAnimationFrame(gameLoop);
	}
	// while(game.status){
	// 	game.update()

	// }

	window.requestAnimationFrame(gameLoop)
})
