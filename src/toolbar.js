class Toolbar {
    constructor(game, imgSrc, x, y, type) {
        this.img = new Image();
        this.img.src = imgSrc;
        this.game = game;
        this.type = type;
        this.elementX = x;
        this.y = y;
        this.init();
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

    init() {
        this.game.canvas.addEventListener('mousedown', (event) => {
            if (this.game.dragDrop.selection) return;
            if (event.x > this.elementX && event.x < this.elementX + 100 && event.y > this.y && event.y < (this.y + 100)) {
                if (this.type == 'gingerbreadMan' && this.game.christmasSpirit >= 50) {
                    this.game.addWeapon(new GingerbreadMan(0, 600, this.game));
                    this.game.christmasSpirit -= 50;
                } else if (this.type == 'pudding' && this.game.christmasSpirit >= 10) {
                    this.game.addWeapon(new ChristmasPudding(100, 600, this.game));
                    this.game.christmasSpirit -= 10;
                }
            }
        }, true);
    }
}
