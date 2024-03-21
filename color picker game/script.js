const gameBoard = document.getElementById('game-board');
const paddleA = document.getElementById('paddleA');
const paddleB = document.getElementById('paddleB');
const ball = document.getElementById('ball');
const restartButton = document.getElementById('restart-button');
const score = document.getElementById('score');

// Set up paddle properties
const paddleWidth = 15;
const paddleHeight = 80;
const paddleSpeed = 5;

// Set up ball properties
const ballSize = 15;
const ballSpeed = 5;

// Set up player scores
let playerAScore = 0;
let playerBScore = 0;

// Initialize ball velocity
let ballX = 0;
let ballY = 0;

// Initialize game variables
let gameStarted = false;
let currentPlayer = 1;

// Initialize paddle positions
const paddleAPosition = {
	left: 50,
	top: 160,
};

const paddleBPosition = {
	left: 550,
	top: 160,
};

let paddleADirection = 0;
let paddleBDirection = 0;

// Initialize ball position
const ballPosition = {
	left: 300,
	top: 200,
};

function updatePaddlePosition(paddle, direction) {
	if (paddle.top + paddleHeight > gameBoard.clientHeight - paddleHeight) {
		paddle.top = gameBoard.clientHeight - paddleHeight;
	}
	else if (paddle.top < 0) {
		paddle.top = 0;
	}
	else {
		paddle[direction] = paddle[direction] + paddleSpeed;
	}
}

function updateBallPosition() {
	ballPosition.left = ballPosition.left + ballX;
	ballPosition.top = ballPosition.top + ballY;

	checkCollision();
