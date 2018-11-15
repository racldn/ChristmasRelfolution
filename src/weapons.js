class Weapon{
  constructor(x, y, game) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.center = {x: (x - 50), y: (y + 50)};
    this.position = {x: x, y: y};
    this.draw(this.ctx);
    this.game = game;
   // this.bullets = [];
    setInterval(() => {
      this.callBullet();
    }, 3000);
  }

  draw(ctx) {
    let img = new Image();
    img.src = ('./assets/gbm.png');
    ctx.drawImage(img, this.x, this.y);
    
  }

  callBullet(){
    console.log(this.center);
    let bullet = new Bullet(this.center, {dx: -3, dy: 0});
    this.game.addBullet(bullet);
  }

  update(ctx) {
    this.draw(ctx);
  }

  

  contains(mx, my) {
    return  (this.x <= mx) && (this.x + this.w >= mx) &&
            (this.y <= my) && (this.y + this.h >= my);
  }
}





