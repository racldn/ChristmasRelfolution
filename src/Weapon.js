class Weapon {
  constructor(x, y, game) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.w = 100;
    this.h = 100;
    this.center = {
      x: (x - 50),
      y: (y + 50)
    };
    this.lastPosition = {
      x: this.x,
      y: this.y
    };
    this.game = game;
    this.timer = setInterval(() => {
      this.callBullet();
    }, 2000);
  }
  draw(ctx) {
    let img = new Image();
    img.src = ('./assets/gbm.png');
    ctx.drawImage(img, this.x, this.y);
  }

  removeBullet(bullet){
    this.game.removeBullet(bullet, this);
    // clearInterval(this.timer);
  }

  
  callBullet() {
    // Object.assign creates copy of this.center 
    //( Since this.center is an object, it is passed as call by reference to the Bullet constructor. 
    // By calling Object.assign on this.center, we're creating a copy that is passed to the constructor.)
    let bullet = new Bullet(Object.assign({}, this.lastPosition), {
      dx: -3,
      dy: 0
    }, this);
    this.game.addBullet(bullet, this);
  }
  update(ctx) {
    this.draw(ctx);
  }

  contains(mx, my) {
    return (this.x <= mx) && (this.x + this.w >= mx) &&
      (this.y <= my) && (this.y + this.h >= my);
  }
}