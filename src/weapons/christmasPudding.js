class Obstacle extends Weapon {
  constructor(x, y, game) {
    super(x, y, game);
    this.type = 'pudding';
    this.hitpoints = 1;
    this.totalFrames = 31;
    this.animTick = 3;
  }
    
  draw() {
    let img = new Image();
    img.src = ('./assets/christmas-pudding.png');

    if (this.currentAnimTick < this.animTick) {
      this.currentAnimTick++;
    } else {
      if (this.currentFrame < this.totalFrames - 1) {
        this.currentFrame++;
      } else {
        this.currentFrame = 0;
      }
      this.currentAnimTick = 0;
    }

    this.srcX = this.currentFrame * this.w;
    this.game.ctx.drawImage(img, this.srcX, this.srcY, this.w, this.h, this.x, this.y, this.w, this.h);
  }

  update() {
    this.draw();
  }
}