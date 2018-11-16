class Weapon {
  constructor(x, y, game) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 80;
    this.center = {
      x: (x - 50),
      y: (y + 50)
    };
    this.lastPosition = {
      x: this.x,
      y: this.y
    };
    this.game = game;
    setInterval(() => {
      this.callBullet();
    }, 3000);
  }
  draw(ctx) {
    let img = new Image();
    img.src = ('./assets/gbm.png');
    ctx.drawImage(img, this.x, this.y);
  }

  callBullet() {
    // Object.assign creates copy of this.center 
    //( Since this.center is an object, it is passed as call by reference to the Bullet constructor. 
    // By calling Object.assign on this.center, we're creating a copy that is passed to the constructor.)
    let bullet = new Bullet(Object.assign({}, this.center), {
      dx: -3,
      dy: 0
    });
    this.game.addBullet(bullet);
  }
  update(ctx) {
    this.draw(ctx);
  }

  contains(mx, my) {
    return (this.x <= mx) && (this.x + this.w >= mx) &&
      (this.y <= my) && (this.y + this.h >= my);
  }
}