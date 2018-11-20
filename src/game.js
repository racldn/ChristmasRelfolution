class Game {
	constructor(canvas) {
		this.canvas = canvas;
		this.ctx = this.canvas.getContext("2d");
		this.elves = [];
		this.bullets = [];
		this.weapons = [];
		var mouseX = 0;
		var mouseY = 0;
		var that = this;
		var buttonX = 0;
		var buttonY = 0;
		var buttonW = 100;
		var buttonH = 100;
		var img = new Image();
		img.src = ('./assets/gbm.png');
		img.onload = function() {
			var pattern = that.ctx.createPattern(img, 'no-repeat');
			that.ctx.fillStyle = pattern;
			that.ctx.fillRect(buttonX, buttonY, buttonW, buttonH);
		  };
		this.canvas.addEventListener('click', function(event) {				
		if(event.x> buttonX && event.x < buttonX + buttonW && event.y > buttonY && event.y < buttonY + buttonH) {  
			 that.addWeapon(new Weapon(1, 0, that));	
			}
		}, true); 
		
		this.score = 0
		this.inGame = true;
		this.dragDrop = new DragDrop(this);
		this.elfSound = new Sound("assets/audio/elfChomp.wav");
		this.GBMSound = new Sound("assets/audio/GBMSqueal.mp3")
		this.bulletHit = new Sound("assets/audio/BulletHit.mp3")
		this.elfUh = new Sound("assets/audio/elfUh.wav") 

		this.update();
	}

	update() {
		
		var img = new Image();
		img.src = ('./assets/gbm.png');

		var pattern = this.ctx.createPattern(img, 'no-repeat');
			this.ctx.fillStyle = pattern;
			this.ctx.fillRect(0,0,100,100);

		
		if (this.inGame) {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			this.weapons.forEach((weapon) => {
				weapon.update(this.ctx);
			});
			this.bullets.forEach((bullet) => {
				bullet.update(this.ctx);
				collision.bulletHitsSide(bullet, this);
			});
			this.elves.forEach((elf) => {
				elf.update(this.ctx);
				collision.elfHitsRightWall(elf, this);
				collision.elfHitsWeapon(elf, this);
				collision.elfHitsBullet(elf, this);
			});

			requestAnimationFrame(() => {
				this.update();
			});
		} else {
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			this.ctx.beginPath()
			this.ctx.rect(0, 0, this.canvas.width, this.canvas.height);
			this.ctx.fillStyle = 'pink'
			this.ctx.fill();
			this.ctx.fillStyle = 'white'
			this.ctx.font = "20px Arial";
			this.ctx.fillText(`You lose! Your score is ${this.score}`, this.canvas.width / 2 - 50, this.canvas.height / 2 - 50);
		}
	}

	addElf() {
		if(Math.floor(Math.random() * 5) < 4) {
			this.elves.push(new Elf(this, './assets/red-elf.png', 2, 3));
		} else {
			this.elves.push(new Elf(this, './assets/green-elf.png', 4, 2));
		}

	}

	addBullet(bullet) {
  	this.bullets.push(bullet);
	}

	addWeapon(weapon) {
		this.weapons.push(weapon);
	}
}
