class Obstacle {
  constructor(x, y, game) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.type = 'pudding';
    this.w = 100;
    this.h = 100;
  
    this.hitpoints = 1;

    this.lastPosition = {
      x: this.x,
      y: this.y
    };

    this.isActive = true;

    this.currentFrame = 0;
    this.totalFrames = 31;

    this.spriteHeight = 100;
    this.spriteWidth = 100;
    this.srcX = this.currentFrame * this.spriteWidth;
    this.srcY = 0;

    this.animTick = 3;
    this.currentAnimTick = 0;
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

    this.srcX = this.currentFrame * this.spriteWidth;
    this.game.ctx.drawImage(img, this.srcX, this.srcY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight);
  }

  update(ctx) {
    // isactive
    this.draw(ctx);
  }

  contains(mx, my) {
    return (this.x <= mx) && (this.x + this.w >= mx) &&
      (this.y <= my) && (this.y + this.h >= my);
  }
}