class Toolbar {
  constructor(game, imgSrc, x, y, type) {
    this.img = new Image();
    this.img.src = imgSrc;
    this.game = game;
    this.type = type;
    this.elementX = x;
    this.y = y;
  }

  draw() {
    this.game.ctx.drawImage(this.img, this.elementX, this.y);
    this.displayScore();
    this.displayGBMCosts();
    this.displayPuddingCosts();
  }

  displayGBMCosts() {
    this.game.ctx.fillStyle = 'rgb(213,0,0)'
    this.game.ctx.font = "30px Lobster";
    this.game.ctx.fillText('50', 60, 690);
  }

  displayPuddingCosts() {
    this.game.ctx.fillStyle = 'rgb(213,0,0)'
    this.game.ctx.font = "30px Lobster";
    this.game.ctx.fillText('10', 165, 690);
  }
  displayScore() {
    this.game.ctx.fillStyle = 'rgb(213,0,0)';
    this.game.ctx.strokeStyle = 'black';
    this.game.ctx.font = "30px Lobster";
    this.game.ctx.fillText(`${this.game.christmasSpirit}`, 725, 660);
    this.game.ctx.fill();
  }
}

