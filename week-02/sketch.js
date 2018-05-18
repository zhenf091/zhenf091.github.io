
var ball;

var p1;
var p2;

var playerNum;
var whichPlayer;

var p1Up = false;
var p1Down = false;
var p2Up = false;
var p2Down = false;
var p1Score = 0;
var p2Score = 0;


function setup() {
	createCanvas(500, 500);
	ball = new Ball();
	p1 = new Paddle(0);
	p2 = new Paddle(1);
}

function draw() {
	background(0);
	ball.update();
	ball.display();
	ball.paddleCollision(p1);
	ball.paddleCollision(p2);

	p1.update();
	p1.display();

	p2.update();
	p2.display();

	textSize(36);

	textAlign(CENTER, CENTER);

	fill(0, 0, 255);
	text(p1Score, width / 2 - 100, 50);
	fill(255, 0, 0);
	text(p2Score, width / 2 + 100, 50);
	fill(255, 255, 255);
}


function Ball() {
	this.pos = createVector(width / 2, height / 2);
	this.vel = createVector(0, 0);
	this.s = 15;
	var angle = random(TWO_PI);
	var speed = 3;
	this.vel.x = cos(angle) * speed;
	this.vel.y = sin(angle) * speed;

	this.update = function () {

		if (p2Score >= 5) {
			fill(255);
			text('Win!', width / 2 + 100, 100);
		} else if (p1Score >= 5) {
			fill(255);
			text('Win!', width / 2 - 100, 100);
		} else if (p2Score < 5) {
			if (this.pos.x < this.s / 2) {
				p2Score++;
				this.pos.x = width / 2;
				this.pos.y = height / 2;
			} else if (this.pos.x > width - this.s / 2) {
				p1Score++;
				this.pos.x = width / 2;
				this.pos.y = height / 2;
			} else if (this.pos.y < this.s / 2 || this.pos.y > height - this.s / 2) {
				this.vel.y *= -1;
			}

		}
		this.pos.add(this.vel);
	};


	this.display = function () {
		noStroke();
		fill(255);
		rectMode(CENTER);
		rect(this.pos.x, this.pos.y, this.s, this.s);
	};
	this.paddleCollision = function () {
		if (this.pos.x + this.s / 2 > p1.pos.x && this.pos.x - this.s / 2 < p1.pos.x || this.pos.x + this.s / 2 > p2.pos.x && this.pos.x - this.s / 2 < p2.pos.x) {
			if (this.pos.y + this.s / 2 > p1.pos.y && this.pos.y - this.s / 2 < p1.pos.y || this.pos.y + this.s / 2 > p2.pos.y && this.pos.y - this.s / 2 < p2.pos.y) {
				this.vel.x *= -1;
			}
		}
	};


}


function Paddle(whichPlayer) {
	playerNum = whichPlayer;
	var w = 20;
	var h = 100;

	if (whichPlayer == 0) {
		this.pos = createVector(width - 15, height / 2);
	} else if (whichPlayer == 1) {
		this.pos = createVector(15, height / 2);
	}

	this.update = function () {
		if (whichPlayer == 0) {
			if (p1Up && this.pos.y - h / 2 > 0) {
				this.pos.y -= 10;
			}
			if (p1Down && this.pos.y + h / 2 < width) {
				this.pos.y += 10;
			}
		}

		if (whichPlayer == 1) {
			if (p2Up && this.pos.y - h / 2 > 0) {
				this.pos.y -= 10;
			}
			if (p2Down && this.pos.y + h / 2 < width) {
				this.pos.y += 10;
			}
		}
	}

	this.display = function () {
		fill(255);
		rectMode(CENTER);
		rect(this.pos.x, this.pos.y, w, h);
	}
}


function keyPressed() {
	if (key === 'W') {
		p2Up = true;
	}
	if (key === 'S') {
		p2Down = true;
	}
	if (key === 'D') {
		p2Laser = true;
	}

	if (keyCode === UP_ARROW) {
		p1Up = true;
	}
	if (keyCode === DOWN_ARROW) {
		p1Down = true;
	}
	if (keyCode === LEFT_ARROW) {
		p1Laser = true;
	}
}

function keyReleased() {
	if (key === 'W') {
		p2Up = false;
	}
	if (key === 'S') {
		p2Down = false;
	}


	if (keyCode === UP_ARROW) {
		p1Up = false;
	}
	if (keyCode === DOWN_ARROW) {
		p1Down = false;
	}

}
