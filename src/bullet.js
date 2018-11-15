class Bullet {
  constructor(center, velocity) { // is passed a horizontal and vertical center for the unit to determine spawn location - should be slightly outside the spawning unit's body
    this.center = center; // consists of this.center.x and this.center.y for horizontal and vertical position on the screen
    this.velocity = velocity; // consists of this.velocity.x and this.verlocity.y for movement along the x axis and y axis
    this.currentFrame = 0;
    this.totalFrames = 4;
    
    this.spriteHeight = 100;
    this.spriteWidth = 400 / 4;
    this.srcX = 0;
    this.srcY = 0;

    this.animTick = 30;
    this.currentAnimTick = 0;
   
  }

  update(ctx) {
    if (this.center.x > 0) {
      this.center.x += this.velocity.dx;
    }
    // this.center.y += this.velocity.dy // not needed because our items only move along the x axis - adjusts vertical position of center by incrementing current vertical center position by vertical velocity
    this.draw(ctx);
  }

  draw(ctx) {
    console.log('draw me');
    console.log(this.center.x);
    console.log(this.center.y);

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
    ctx.drawImage(img, this.srcX, this.srcY, this.spriteWidth, this.spriteHeight, (this.center.x -50), (this.center.y - 50), this.spriteWidth, this.spriteHeight);
    //ctx.drawImage(img, this.center.x, this.center.y);
  }
}
