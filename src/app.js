const canvas = document.getElementById("canvas-grid");
const ctx = canvas.getContext("2d");
var mouseX = 0;
var mouseY = 0;
var btnPlay = new Button(417, 559, 171, 228);



window.onload = function() {
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
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var game = new Game();
  createGrid()
  //game.addWeapon(new Weapon(100, 0, game));
  // game.addWeapon(new Weapon(200, 0, game));
  // game.addWeapon(new Weapon(300, 0, game));
  
  
  //game.addWeapon(new Weapon(700, 300, game));

  setInterval(() => {
    game.addElf();
  }, 5000);
}

function playBtnClicked(e) {
  mouseX = e.pageX - canvas.offsetLeft;
  mouseY = e.pageY - canvas.offsetTop;
  if (btnPlay.isClicked(mouseX, mouseY)) {
    startGame()
  };
}





  // Control that click event occurred within position of button
  // NOTE: This assumes canvas element is positioned at top left corner 
  
    // Executes if button was clicked!
 
