class Bullet {
  constructor(center, velocity) { // is passed a horizontal and vertical center for the unit to determine spawn location - should be slightly outside the spawning unit's body
    this.center = center
    this.radius = 5
    this.velocity = velocity
    this.color = 'green' // could be passed as argument on creation so colors can be changed on demand
  }

  update(canvas) {
    this.center.x += this.velocity.dx  // adjusts horizontal position of center by incrementing current horizontal center position by horizontal velocity
    this.center.y += this.velocity.dy // adjusts vertical position of center by incrementing current vertical center position by vertical velocity
    this.draw(canvas)
  }

  draw(canvas) {
    var ctx = canvas.getContext('2d') 
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    console.log(canvas.height + 'height')
    console.log(canvas.width + "width") // sets all pixels in the context (game board) from starting point (0, 0 - top left) and size (canvas width, canvas height) to transparent black, erasing previously drawn content - this removes trails  // should probably only be called by game.js
    ctx.beginPath();
    ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI * 2, true);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
    requestAnimationFrame(() => { this.update(canvas) });
  }
}
