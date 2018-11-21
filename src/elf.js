class Elf {
  constructor(game, imgSrc, hitpoints, dx) {
    this.game = game;
    this.imgSrc = imgSrc;
    this.dx = dx;
    this.hitpoints = hitpoints;
    this.x = 0;
    this.y = Math.floor(Math.random() * 6) * 100;
    this.attackPower = 1;
    this.currentFrame = 0;
    this.totalFrames = 2;
    this.spriteHeight = 100;
    this.spriteWidth =  100;
    this.srcX = this.currentFrame * this.spriteWidth;
    this.srcY = 0;
    this.animTick = 30;
    this.currentAnimTick = 0;
    this.opacity = 100;
    this.sound = {
      hasBeenHit:	new Sound("assets/audio/elfUh.wav", .7),
      hasHit: new Sound("assets/audio/elfChomp.wav", .7)
    }
    this.draw();
  }
  
  draw() {
    let img = new Image();
    img.src = this.imgSrc;

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
    this.game.ctx.filter = `opacity(${this.opacity}%)`
    this.game.ctx.drawImage(img, this.srcX, this.srcY, this.spriteWidth, this.spriteHeight, this.x, this.y, this.spriteWidth, this.spriteHeight);
    this.game.ctx.filter = `opacity(100%)`
  }

  update() {
    this.x += this.dx;
    this.draw();
  }
}
