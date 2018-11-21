const canvas = document.getElementById("canvas");
const canvasBG = document.getElementById("canvas-bg");
const canvasSnow = document.getElementById("canvas-snow");
const ctx = canvasBG.getContext("2d");
var canvasOffset = canvas.getBoundingClientRect();
var mouseX = 0;
var mouseY = 0;
var btnPlay = new Button(516, 642, 177, 255);
var snow = createSnow(canvasSnow);

window.onload = () => {
  loadMenu()
  document.addEventListener('click', playBtnClicked, false)
}

function loadMenu() {
  let img = new Image();
  img.src = ("./assets/bg.png");
  img.onload = function() {
    ctx.drawImage(img, 0, 0, 800, 700, 0, 0, 800, 700)
  }  
  setInterval(snow.draw, 33);
}

function startGame() {
  document.removeEventListener('click', playBtnClicked, false)
  let game = new Game(canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  setBG('bg_main.jpg', canvasBG, 600, createGrid);
  setTB('toolbar_bg.png', canvasBG) 

  setInterval(() => {
    if (game.inGame) {
      game.addElf();
    }
  }, 5500);
}

function playBtnClicked(e) {
  mouseX = e.pageX - canvasOffset.left;
  mouseY = e.pageY - canvasOffset.top;
  if (btnPlay.isClicked(mouseX, mouseY)) {
    startGame();
  };
}