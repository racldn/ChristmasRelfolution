class Bullet {
  constructor(center, velocity) { // is passed a horizontal and vertical center for the unit to determine spawn location - should be slightly outside the spawning unit's body
    this.center = center // consists of this.center.x and this.center.y for horizontal and vertical position on the screen
    this.radius = 5
    this.velocity = velocity // consists of this.velocity.x and this.verlocity.y for movement along the x axis and y axis
    this.color = 'green' // could be passed as argument on creation so colors can be changed on demand
  }

  update(canvas) {
    if (this.center.x > 0) {
      this.center.x += this.velocity.dx
    }
    // this.center.y += this.velocity.dy // not needed because our items only move along the x axis - adjusts vertical position of center by incrementing current vertical center position by vertical velocity
    this.draw(canvas)
  }

  draw(canvas) {
    var ctx = canvas.getContext('2d')
    let img = new Image();
    img.src = ("./candycane.png")
    ctx.clearRect(0, 0, canvas.width, canvas.height) // should probavly only be called by game.js
    ctx.drawImage(img, this.center.x - 50, this.center.y + 50);
    console.log(this.center.x)
    console.log(this.center.y)
    requestAnimationFrame(() => { this.update(canvas) }) // only for testing

  }
}
