class Toolbar{
    constructor(game,imgSrc, x){
        this.img = new Image();
        this.img.src = imgSrc;
        this.game = game;
        this.init();
        this.elementX = x;
        this.y = 600;
    }

    draw(){
        this.game.ctx.drawImage(this.img, this.elementX, this.y);
        this.init();
        this.displayScore();
    }

    displayScore(){
        this.game.ctx.fillStyle = 'blue'
        this.game.ctx.font = "20px Arial";
        this.game.ctx.fillText(`Your score is ${this.game.score}`, 650, 650);
    
    }
    init(){
        var that = this;
        this.game.canvas.addEventListener('mousedown', (event)  => {
            if(event.x > that.elementX && event.x < that.elementX + 100 && event.y > this.y && event.y < (this.y + 100)) {
                
                if (that.game.weaponCounter < 3){
                    that.game.addWeapon(new Weapon(0, 600, that.game));
                }
                that.game.incrementWeaponCounter();
                
            }
        }, true);
    }

}