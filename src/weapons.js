class Weapon{
  constructor(x, y) {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.center = {x: (x - 50), y: (y + 50)};
    this.position = {x: x, y: y};
    this.draw(this.ctx);
    this.bullets = [];
    setInterval(() => {
      this.addBullet(document.getElementById('canvas'));
    }, 3000);
  }

  draw(ctx) {
    let img = new Image();
    img.src = ('./assets/gbm.png');
    ctx.drawImage(img, this.x, this.y);
    
  }

  addBullet(){
    this.bullets.push(new Bullet(this.center, 3));
    this.bullets.forEach((bullet) => {
      bullet.draw(this.ctx);
    });
  }

  update(ctx) {
    this.bullets.forEach((bullet) => {
      bullet.update(this.ctx);
    });
    this.draw(ctx);
  }

  

  contains(mx, my) {
    return  (this.x <= mx) && (this.x + this.w >= mx) &&
            (this.y <= my) && (this.y + this.h >= my);
  }
}





