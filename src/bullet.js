class Bullet {
  constructor(x, y, game) { // is passed a horizontal and vertical center for the unit to determine spawn location - should be slightly outside the spawning unit's body  
    this.game = game;  
    this.currentFrame = 0;
    this.totalFrames = 4;

    this.x = x;
    this.y = y;

    this.attackPower = 1;

    this.speed = 3;
    
    this.spriteHeight = 100;
    this.spriteWidth = 400 / 4;
    this.srcX = 0;
    this.srcY = 0;

    this.animTick = 20;
    this.currentAnimTick = 0;
  }

  update() {
    this.x -= this.speed;
    this.draw();
  }

  draw() {
    let img = new Image();
    img.src = ("./assets/candycane.png")
  
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
  
    this.srcX = this.currentFrame * this.spriteWidth
    this.game.ctx.drawImage(img, this.srcX, this.srcY, this.spriteWidth, this.spriteHeight, this.x , this.y, this.spriteWidth, this.spriteHeight);
  }
}
