
class Elf {

  constructor() {
  this.canvas = document.getElementById("game-canvas");
  this.ctx = this.canvas.getContext("2d");
  this.x = 50;
  this.y = Math.floor(Math.random() * 8) * 100 + 50;
  this.dx = 2;
  this.update();
  }
  
  draw() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  this.ctx.beginPath();
  this.ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
  this.ctx.fillStyle = "red";
  this.ctx.fill();
  this.ctx.closePath();
  }

  update() {
    this.draw();
    
    if(this.x < this.canvas.width){
      this.x += this.dx;
    }
    
    requestAnimationFrame(() => { this.update() });
  }
  
}

elf = new Elf();
