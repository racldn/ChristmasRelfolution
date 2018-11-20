class Bullet {
  constructor(x, y, game) { // is passed a horizontal and vertical center for the unit to determine spawn location - should be slightly outside the spawning unit's body  
    this.game = game;  
    this.currentFrame = 0;
    this.totalFrames = 4;
    this.x = x;
    this.y = y;
    this.h = 100;
    this.w = 200 / 4;
    this.attackPower = 1;
    this.speed = 3;
    this.srcX = 0;
    this.srcY = 0;
    this.animTick = 20;
    this.currentAnimTick = 0;
    this.sound = {
      hasAttacked: new Sound("assets/audio/bulletHit.mp3", .7)
    }
  }

  update(ctx) {
    this.x -= this.speed;
    this.draw(ctx);
  }

  draw(ctx) {
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
  
    this.srcX = this.currentFrame * this.w
    ctx.drawImage(img, this.srcX, this.srcY, this.w, this.h, this.x , this.y, this.w, this.h);
  }
}
