class Game {
    constructor() {
        this.canvas = document.getElementById("game-canvas");
        this.ctx = canvas.getContext("2d");
        this.screenSize = { 
            width: canvas.width, 
            height: canvas.height 
        }
        
        this.elves = [];
        this.bullets = [];
        this.gingerbreadman = [];
        this.update();
    }

    update() {
        this.elves.forEach((elf) => {
            elf.update();
        });
        this.gingerbreadman.forEach((gbm) => {
            gbm.update();
        });
        this.bullets.forEach((bullet) => {
            bullet.update();
        });

        requestAnimationFrame(this.update);
    }
}