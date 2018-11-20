function createGrid() {
  let canvas = document.getElementById('canvas-bg');
  let ctx = canvas.getContext('2d');
  
  for(i = 0; i <= 800; i += 100) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 800);
    ctx.strokeStyle = '#F0F8FF';
    ctx.stroke();
  }
  
  for(i = 0; i <= 800; i += 100) {
    ctx.moveTo(0, i);
    ctx.lineTo(800, i);
    ctx.strokeStyle = '#F0F8FF';
    ctx.stroke();
  }
};

function setBG(name) {
  let canvas = document.getElementById('canvas-bg');
  let ctx = canvas.getContext('2d');
  let bg = new Image();

  bg.src = `./assets/${name}`
    // "./assets/bg_main.jpg";
  bg.onload = function() {
    ctx.drawImage(bg, 0, 0, 800, 600, 0, 0, 800, 600)
  }
}