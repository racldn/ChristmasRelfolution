const canvas = document.getElementById("canvas");
const canvasBG = document.getElementById("canvas-bg");
const canvasSnow = document.getElementById("canvas-snow");
var mouseX = 0;
var mouseY = 0;
var btnPlay = new Button(417, 559, 171, 228)
var snow = createSnow(canvasSnow);

window.onload = function() {
  const ctx = canvasBG.getContext("2d");
  loadMenu(ctx)
  document.addEventListener('click', playBtnClicked, false)
}

function loadMenu(ctx) {
  let img = new Image();
  img.src = ("./assets/bg.png");
  img.onload = function() {
    ctx.drawImage(img, 0, 0, 800, 600, 0, 0, 800, 600)
  }  
  setInterval(snow.draw, 33);
}

function startGame() {
  let ctx = canvasBG.getContext("2d");
  let game = new Game(canvas);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  game.addObstacle();

  setBG('bg_main.jpg')
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
