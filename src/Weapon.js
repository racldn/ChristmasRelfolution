class Weapon {
  constructor(x, y, game) {
    this.game = game;

    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 100;

    this.lastPosition = {
      x: this.x,
      y: this.y
    };

    this.fireRate = 120; // 60 refreshes = 1s roughly
    this.currentFire = 0;

    this.isActive = true;

    this.currentFrame = 0;
    this.totalFrames = 2;

    this.spriteHeight = 100;
    this.spriteWidth = 150 / 2;
    this.srcX = this.currentFrame * this.spriteWidth;
    this.srcY = 0;

    this.animTick = 30;
    this.currentAnimTick = 0;
  }

  draw() {
    let img = new Image();
    img.src = ('./assets/gbm.png');

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

  contains(mx, my) {
    return (this.x <= mx) && (this.x + this.w >= mx) &&
      (this.y <= my) && (this.y + this.h >= my);
  }
}
