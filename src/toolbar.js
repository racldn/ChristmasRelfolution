class Toolbar{
    constructor(game,imgSrc, x){
        this.img = new Image();
        this.img.src = imgSrc;
        this.game = game;
        this.init();
        this.elementX = x;
    }

    draw(){
        this.game.ctx.drawImage(this.img, this.elementX, 600);
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
        this.game.canvas.addEventListener('click', (event)  => {
            if(event.x > that.elementX && event.x < that.elementX + 100 && event.y > 600 && event.y < 700) {
                
                if (that.game.weaponCounter < 3){
                    that.game.addWeapon(new Weapon(0, 600, that.game));
                }
                that.game.incrementWeaponCounter();
                
            }
        }, true);
    }

}