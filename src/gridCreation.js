function createGridOnCanvas(gridCanvas) {
  let canvas = gridCanvas;
  let ctx = canvas.getContext('2d');
  for(i = 0; i <= 800; i += 100) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, 800);
    ctx.stroke()
  }
  
  for(i = 0; i <= 800; i += 100) {
    ctx.moveTo(0, i);
    ctx.lineTo(800, i);
    ctx.stroke()
  }
};