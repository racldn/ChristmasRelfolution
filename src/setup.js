function createGrid() {
  let canvas = document.getElementById('canvas-bg');
  let ctx = canvas.getContext('2d');

  for(i = 100; i <= 900; i += 100) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 900);
    ctx.strokeStyle = 'rgba(240, 255, 255, 0.1)';
    ctx.stroke();
  }

  for(i = 100; i <= 900; i += 100) {
    ctx.moveTo(0, i);
    ctx.lineTo(900, i);
    ctx.strokeStyle = 'rgba(240, 255, 255, 0.1)';
    ctx.stroke();
  }
};

function setBG(name) {
  let canvas = document.getElementById('canvas-bg');
  let ctx = canvas.getContext('2d');
  let bg = new Image();

  bg.src = `./assets/${name}`
  bg.onload = function() {
    ctx.drawImage(bg, 0, 0, 800, 600);

    // oid ctx.drawImage(image, dx, dy, dWidth, dHeight);
    createGrid();
  }
}
