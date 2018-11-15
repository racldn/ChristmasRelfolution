class Elf {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.x = 50;
    this.y = Math.floor(Math.random() * 6) * 100;
    this.dx = 2;
  }
  
  draw() {
    let img = new Image();
    img.src = ('./assets/elf.png');
    this.ctx.drawImage(img, this.x, this.y);
  }

  update() {
    if(this.x < this.canvas.width) {
      this.x += this.dx;
    }
    this.draw();
  }
}
