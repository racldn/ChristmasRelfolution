var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var ballX = canvas.width;
var ballY = canvas.height-30;
var ballDX = -2;
var ballDY = 0;
var squareX = 10;
var squareY = canvas.height-570;
var squareDX = 2;
var squareDY = 0;

function drawSquare() {
  ctx.beginPath();
  ctx.lineWidth="4";
  ctx.strokeStyle="red";
  ctx.rect(squareX, squareY, 30, 30)
  ctx.stroke();

}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawSquare();
    ballX += ballDX;
    ballY += ballDY;
    squareX += squareDX;
    squareY += squareDY;
}

setInterval(draw, 10);
