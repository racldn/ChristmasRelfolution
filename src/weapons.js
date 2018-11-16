class Weapon{
  constructor(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    this.w = 100;
    this.h = 100;
    this.lastPosition = {
      x: this.x,
      y: this.y
    }
  }

  draw(ctx) {
    ctx.fillStyle = this.fill;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  update(ctx) {
    this.draw(ctx);
  }

  contains (mouseX, mouseY) {
    return  (this.x <= mouseX) && (this.x + this.w >= mouseX) &&
            (this.y <= mouseY) && (this.y + this.h >= mouseY);
  }
}
