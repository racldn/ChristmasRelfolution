const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
const screenSize = { 
    width: canvas.width, 
    height: canvas.height 
}

class Game {
    constructor() {
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

const game = new Game();
