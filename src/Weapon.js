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
  }
  draw(ctx) {
    let img = new Image();
    img.src = ('./assets/gbm.png');
    ctx.drawImage(img, this.x, this.y);
  }

  fire() {
    this.game.addBullet(new Bullet(this.x - 50, this.y, this.game));
  }

  update(ctx) {
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
    this.draw(ctx);
  }

  contains(mx, my) {
    return (this.x <= mx) && (this.x + this.w >= mx) &&
      (this.y <= my) && (this.y + this.h >= my);
  }
}