function createGrid() {
  let canvas = document.getElementById('canvas-bg');
  let ctx = canvas.getContext('2d');

  for(i = 0; i <= 800; i += 100) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 800);
    ctx.strokeStyle = 'rgba(240, 255, 255, 0.1)';
    ctx.stroke();
  }

  for(i = 0; i <= 800; i += 100) {
    ctx.moveTo(0, i);
    ctx.lineTo(800, i);
    ctx.strokeStyle = 'rgba(240, 255, 255, 0.1)';
    ctx.stroke();
  }
};

function setBG(name, canvas, callback) {
  let ctx = canvas.getContext('2d');
  let bg = new Image();
  bg.src = `./assets/${name}`
  bg.onload = function() {
    ctx.drawImage(bg, 0, 0, 800, 600);
    callback.call();
  }
}

function renderText(text, canvas) {
  let ctx = canvas.getContext('2d');
  ctx.font = `30px 'Lobster'`;
  ctx.textAlign = 'center';
  ctx.fillStyle = 'white';
  ctx.fillText(`${text}`, canvas.width / 2, canvas.height - 500);
}
