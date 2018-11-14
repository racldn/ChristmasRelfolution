class Game {
    constructor() {
        this.canvas = document.getElementById("game-canvas");
        this.ctx = this.canvas.getContext("2d");
        this.elves = [];
        this.bullets = [];
        this.gingerbreadman = [];
        this.update();
    }

    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.elves.forEach((elf) => {
            elf.update();
        });
        this.gingerbreadman.forEach((gbm) => {
            gbm.update();
        });
        this.bullets.forEach((bullet) => {
            bullet.update();
        });

        requestAnimationFrame(() => { this.update() });
    }

    addElf() {  
        this.elves.push(new Elf());
    }
}

const game = new Game();

setInterval(() => {
    game.addElf();
}, 5000);