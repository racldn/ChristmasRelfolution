class GingerbreadMan extends Weapon {
  constructor(x, y, game) {
    super(x, y, game);
    this.type = 'elf';
    this.hitpoints = 1;
    this.fireRate = 120; // 60 refreshes = 1s roughly
    this.currentFire = 0;
    this.totalFrames = 2;
    this.cost = 50;
    this.animTick = 30;
    this.img.src = './assets/gbm.png';
    this.sound = {
      takenDamage: new Sound("assets/audio/GBMSqueal.mp3", .7)
    }
  }
  
  draw() {
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
    this.game.ctx.drawImage(this.img, this.srcX, this.srcY, this.w, this.h, this.x, this.y, this.w, this.h);
  }

  fire() {
    this.game.addBullet(new Bullet(this.x - 50, this.y, this.game));
  }

  update() {
    if(this.isActive) {
      if(this.currentFire >= this.fireRate) {
        this.fire();
        this.currentFire = 0;
      } else {
        this.currentFire++;
      }
    } else {
      this.currentFire = 0;
    }
    this.draw();
  }
}