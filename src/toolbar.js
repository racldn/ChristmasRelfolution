class Toolbar{
    constructor(game,imgSrc, x, y){
        this.img = new Image();
        this.img.src = imgSrc;
        this.game = game;
        
        this.elementX = x;
        this.y = y;
        this.init();
    }

    draw(){
        this.game.ctx.drawImage(this.img, this.elementX, this.y);
        this.displayScore();
    }

    displayScore(){
        this.game.ctx.fillStyle = 'blue'
        this.game.ctx.font = "20px Arial";
        this.game.ctx.fillText(` ${this.game.score}`, 725, 650);
    
    }
    init(){
        var that = this;
        this.game.canvas.addEventListener('mousedown', (event)  => {
            if(event.x > that.elementX && event.x < that.elementX + 100 && event.y > this.y && event.y < (this.y + 100)) {
                if (that.game.weaponCounter >= 50){
                    that.game.addWeapon(new GingerbreadMan(0, that.y, that.game));
                    that.game.weaponCounter -= 50;
                }
            }
        }, true);
    }

}