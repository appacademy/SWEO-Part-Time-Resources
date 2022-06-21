export default class Game {
	constructor(canvas, width, height, bricks){
		this.canvas = canvas.getContext('2d');
		this.width = width;
		this.height = height;
		this.currentY = Math.floor(height - Math.floor(height/5));
		this.currentX = 0;
		this.status = true;
        this.bricks = [];
	}


	createPaddle (){
		this.canvas.fillStyle = 'red'
		this.canvas.fillRect(this.currentX,this.currentY, Math.floor(this.width/5), Math.floor(this.height/5))
	}

	paddleMoveRight (){
		this.canvas.fillRect(this.currentX + 1,this.currentY, Math.floor(this.width/5), Math.floor(this.height/5))
		this.currentX += 20;
	}

	paddleMoveLeft (){
		this.canvas.fillRect(this.currentX + 1,this.currentY, Math.floor(this.width/5), Math.floor(this.height/5))
		this.currentX -= 20;
	}

	update(){
		this.canvas.fillStyle = 'white';
		this.canvas.fillRect(0, 0, this.width, this.height);

		for(let i = 0; i < this.bricks.length; i++){
			this.bricks[i].createBrick()
		}

		this.canvas.fillStyle = 'red';
		this.canvas.fillRect(this.currentX,this.currentY, Math.floor(this.width/5), Math.floor(this.height/5))
	}


	createBricks(){
		for(let i = 0; i < 5; i++){
			this.bricks.push(new Bricks(this.canvas, this.getX(), this.getY(), Math.floor(this.width/5), Math.floor(this.height/5)))
		}
	}

	getY(){
        return Math.floor(Math.random() * Math.floor(this.height - Math.floor(this.height/5)))
	}

	getX(){
		return Math.floor(Math.random() * Math.floor(this.width - Math.floor(this.width/5)))
	}
};




class Bricks{
	constructor(canvas, x, y, heigth, width){
		this.canvas = canvas
        this.x = x;
		this.y = y;
		this.height = heigth;
		this.width = width;
	}

	createBrick(){
		this.canvas.fillStyle = 'green';
		this.canvas.fillRect(this.x, this.y - this.height, this.height, this.width)
	}
}
