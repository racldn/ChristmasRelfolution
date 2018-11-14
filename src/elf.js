
class Elf {
  constructor() {
    this.canvas = document.getElementById("game-canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 50;
    this.y = Math.floor(Math.random() * 6) * 100 + 50;
    this.dx = 2;
    this.update();
  }
  
  draw() {
    this.ctx.beginPath();
    let img = new Image();
    img.src = ('/Users/nathanquayle/Documents/Projects/christmas-relfolution/elf.png');
    this.ctx.drawImage(img, this.x, this.y);
    this.ctx.closePath();
  }

  update() {
    this.draw();
    
    if(this.x < this.canvas.width) {
      this.x += this.dx;
    }
    
    requestAnimationFrame(() => { this.update() });
  }
}
