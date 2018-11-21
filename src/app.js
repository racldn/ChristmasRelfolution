const canvas = document.getElementById("canvas");
const canvasBG = document.getElementById("canvas-bg");
const canvasSnow = document.getElementById("canvas-snow");
const ctx = canvasBG.getContext("2d");
var mouseX = 0;
var mouseY = 0;
var btnPlay = new Button(516, 642, 177, 255)
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
  setBG('bg_main.jpg', canvasBG, createGrid);
  setInterval(() => {
    if (game.inGame) {
      game.addElf();
    }
  }, 3000);
}

function playBtnClicked(e) {
  mouseX = e.pageX - canvas.offsetLeft;
  mouseY = e.pageY - canvas.offsetTop;
  if (btnPlay.isClicked(mouseX, mouseY)) {
    startGame()
  };
}